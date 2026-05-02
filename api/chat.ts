import { GoogleGenAI, Type, FunctionDeclaration } from '@google/genai';

const captureLeadDeclaration: FunctionDeclaration = {
  name: "captureLead",
  description: "Captures the lead information and sends it to the owner. Call this ALWAYS when you have collected the user's name, phone number, and the service they need.",
  parameters: {
    type: Type.OBJECT,
    properties: {
      name: { type: Type.STRING, description: "Customer's name" },
      phone: { type: Type.STRING, description: "Customer's phone number" },
      service: { type: Type.STRING, description: "The service requested (e.g., driveway cleaning, house washing)" },
      summary: { type: Type.STRING, description: "A summary of the conversation in the format: 'New Lead: [Name] - [Phone] - Needs [Service] - [Key details]'" }
    },
    required: ["name", "phone", "service", "summary"]
  }
};

const SYSTEM_INSTRUCTION = `You are a Website Assistant for "The Pelican Pressure Washer LLC".
DO NOT heavily use the term "AI". Do not say "I am an AI". Act as a "Website Assistant", "Quick Help" or a helpful team member, not a bot.
Phone: (503) 997-2313
Email: the.pelican.pw@gmail.com
Services: House washing, Driveway & concrete cleaning, Roof cleaning, Deck & patio cleaning, Fence cleaning, General pressure washing.
Positioning: Reliable, high-quality pressure washing that improves curb appeal and restores surfaces.

PRIMARY GOALS:
1. Answer customer questions clearly and simply.
2. Help visitors understand services and benefits.
3. Guide users toward calling or requesting a quote.
4. Capture lead information (name, phone, service needed).
5. Escalate important or complex requests to the owner.

PERSONALITY: Friendly and approachable. Simple and easy to understand. Helpful and quick. Slightly sales-aware but not pushy.

RESPONSE RULES:
- Keep answers short and clear. Avoid long paragraphs.
- Always guide toward the next step.
- Focus on being helpful and simple.

COMMON QUESTIONS TO HANDLE:
- How much does pressure washing cost?: Provide general pricing guidance but no exact quotes. Escalate or capture lead for exact quotes.
- How long does it take?: Confident, simple answer. Usually depends on the size of the project.
- Do you clean driveways / roofs / houses?: Yes.
- Will it damage surfaces?: No, we use safe methods like Soft Washing for delicate surfaces.
- How soon can I get service?: Capture their details and say we will contact them right away.

LEAD CAPTURE FLOW (CRITICAL):
When interest is shown, naturally move users toward requesting a quote or booking.
Keep it conversational: e.g., "Got it — what's the best number to reach you at?"
Collect: Name, Phone number, Type of service needed.
Once all three are collected, you MUST call the "captureLead" function with these details. Do not wait.

ESCALATION LOGIC:
If you cannot answer a question (e.g., exact pricing, scheduling specifics, complex job questions), respond with:
"I can have the owner reach out directly to go over that with you."
Then collect: Name, Phone, Question details, and call the "captureLead" function with these details.

SUMMARY FORMAT:
When calling the "captureLead" function, provide a summary of the conversation in this format:
"New Lead: [Name] - [Phone] - Needs [Service] - [Key details from conversation]"
`;

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("Missing GEMINI_API_KEY environment variable");
      return res.status(500).json({ error: "Missing API Key configuration on server." });
    }

    const ai = new GoogleGenAI({ apiKey });
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: 'Invalid messages array' });
    }

    let contents = messages.map((m: any) => ({
      role: m.role,
      parts: [{ text: m.content }]
    }));

    // Gemini requires the history to start with a 'user' message
    if (contents.length > 0 && contents[0].role === 'model') {
        contents = [
            { role: 'user', parts: [{ text: 'Hello, I opened the chat.' }] },
            ...contents
        ];
    }

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        tools: [{ functionDeclarations: [captureLeadDeclaration] }],
        temperature: 0.7,
      }
    });

    let functionCall = null;
    let text = response.text || "";

    // Check if the model decided to call the captureLead function
    if (response.functionCalls && response.functionCalls.length > 0) {
      const call = response.functionCalls[0];
      if (call.name === 'captureLead') {
        
        // To be robust, let's ask the model to generate a natural follow up to this action
        const followUp = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: [
                ...contents,
                { role: 'model', parts: [{ functionCall: call }] },
                { role: 'user', parts: [{ text: "SYSTEM ACTION: The lead was successfully saved! Please thank the user concisely and let them know we will be in touch shortly." }] }
            ],
            config: { systemInstruction: SYSTEM_INSTRUCTION }
        });

        functionCall = call;
        text = followUp.text || "";
        
        // Output the summary to the server logs (this simulates sending an email or sms to the business owner)
        console.log("=== NEW LEAD CAPTURED ===");
        console.log(call.args);
        console.log("=========================");
      }
    }

    return res.status(200).json({ text, functionCall });

  } catch (error: any) {
    console.error("API Error:", error);
    return res.status(500).json({ error: error.message || "Something went wrong" });
  }
}
