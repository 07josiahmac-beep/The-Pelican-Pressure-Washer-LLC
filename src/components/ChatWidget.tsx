import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

type Message = {
  id: string;
  role: 'user' | 'model';
  isLeadSummary?: boolean;
  content: string;
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'model', content: "Hey — need help with pressure washing or want a quick quote? I've got you." }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputMessage.trim() || isTyping) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    
    // Add user message to UI
    const newMessages: Message[] = [...messages, { id: Date.now().toString(), role: 'user', content: userMessage }];
    setMessages(newMessages);
    setIsTyping(true);

    // Prepare messages to send to the backend, filtering out the visual lead summaries
    const apiMessages = newMessages
      .filter(m => !m.isLeadSummary)
      .map(m => ({ role: m.role, content: m.content }));

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ messages: apiMessages })
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();

      if (data.functionCall && data.functionCall.name === 'captureLead') {
          const args = data.functionCall.args;
          
          setMessages(prev => [
            ...prev,
            {
              id: Date.now().toString() + '-summary',
              role: 'model',
              isLeadSummary: true,
              content: args.summary || ("New Lead: " + args.name + " - " + args.phone + " - Needs " + args.service)
            },
            { 
              id: Date.now().toString() + '-followup',
              role: 'model', 
              content: data.text || "Thanks! I've sent your details to the owner. We'll be in touch soon."
            }
          ]);
      } else if (data.text) {
        setMessages(prev => [...prev, { id: Date.now().toString(), role: 'model', content: data.text }]);
      }
      
    } catch (error) {
      console.error("Chat API error:", error);
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'model', 
        content: "Sorry, I'm having trouble connecting right now. Please call us at (503) 997-2313 instead!" 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-[5.5rem] right-4 md:bottom-6 md:right-6 z-50 flex items-center gap-4"
          >
            <div className="bg-white px-4 py-2 rounded-full shadow-lg border border-slate-100 font-medium text-slate-700 hidden md:block">
              Need a Quote?
            </div>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95"
            >
              <MessageCircle className="w-7 h-7" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-[5.5rem] right-4 md:bottom-8 md:right-8 z-50 w-[calc(100vw-32px)] md:w-[380px] h-[550px] max-h-[75vh] md:max-h-[80vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200"
          >
            {/* Header */}
            <div className="bg-blue-600 p-4 text-white flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold">Website Assistant</h3>
                  <p className="text-blue-100 text-xs">The Pelican Pressure Washing</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((message) => (
                <div 
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                    message.isLeadSummary 
                      ? 'bg-amber-100 border-2 border-amber-300 text-amber-900 font-medium text-sm'
                      : message.role === 'user' 
                        ? 'bg-blue-600 text-white rounded-br-sm' 
                        : 'bg-white text-slate-800 shadow-sm border border-slate-100 rounded-bl-sm'
                  }`}>
                    {message.isLeadSummary && (
                      <div className="text-[10px] font-bold uppercase tracking-wider text-amber-600 mb-1 flex items-center gap-1">
                        ⚡ Owner Notification Simulated
                      </div>
                    )}
                    <p className="leading-relaxed whitespace-pre-wrap text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-slate-800 shadow-sm border border-slate-100 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }} className="w-2 h-2 bg-slate-400 rounded-full" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} className="w-2 h-2 bg-slate-400 rounded-full" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }} className="w-2 h-2 bg-slate-400 rounded-full" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100 shrink-0">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-slate-100 border-transparent focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-full px-4 py-3 text-sm transition-all outline-none"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim() || isTyping}
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 transition-colors flex shrink-0 items-center justify-center"
                >
                  <Send className="w-5 h-5 -ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
