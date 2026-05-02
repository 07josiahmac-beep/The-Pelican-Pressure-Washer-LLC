import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

export function FAQ() {
  const faqs = [
    {
      question: "Are your cleaning methods safe for my siding and roof?",
      answer: "Yes! We use a 'soft wash' technique for delicate surfaces like vinyl siding, stucco, and roofs. This relies on specialized eco-friendly detergents to kill moss and algae at the root, rather than using damaging high-pressure water."
    },
    {
      question: "Do I need to be home during the service?",
      answer: "No, you do not need to be home as long as we have access to the areas being cleaned and the external water spigot is turned on. We can send before/after photos upon completion and invoice you digitally."
    },
    {
      question: "How long does a typical house wash take?",
      answer: "Most standard 2,000 sq ft homes take between 2 to 4 hours, depending on the level of buildup. Adding a driveway or roof cleaning will extend the time. We work efficiently to minimize disruption."
    },
    {
      question: "Are your cleaning solutions safe for plants and pets?",
      answer: "Absolutely. We thoroughly pre-soak and post-rinse all surrounding vegetation to dilution levels that are completely safe. We ask that pets stay inside during the cleaning, but the area is perfectly safe for them once it dries."
    },
    {
      question: "How much does it cost?",
      answer: "Pricing varies heavily depending on the size of the area and the specific service. Driveways typically start around $150, and full house washes start around $300. Fill out our free quote form for an exact, no-obligation price."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl font-medium text-slate-600">Everything you need to know about our process.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 rounded-2xl border-4 border-slate-100 overflow-hidden shadow-sm"
            >
              <button
                className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-black text-lg text-slate-900 pr-8">{faq.question}</span>
                <ChevronDown className={cn("w-6 h-6 text-orange-500 transition-transform duration-300 font-black", openIndex === idx ? "rotate-180" : "")} />
              </button>
              <div 
                className={cn(
                  "px-8 font-medium text-slate-600 leading-relaxed transition-all duration-300 overflow-hidden",
                  openIndex === idx ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                {faq.answer}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
