import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is this internship beginner-friendly?",
      a: "Absolutely. We start with the foundational concepts in the first two weeks before moving on to advanced frameworks and real-world projects."
    },
    {
      q: "Will I get a certificate?",
      a: "Yes, upon successful completion of the program and the final project, you will receive a verifiable Internship Certificate."
    },
    {
      q: "Is there placement support?",
      a: "Yes! We provide placement assistance, including resume building, LinkedIn optimization, and mock interviews to make you corporate-ready."
    },
    {
      q: "Is the program online or offline?",
      a: "The program is fully online, allowing you to learn and build projects from anywhere at your own pace alongside live mentorship sessions."
    }
  ];

  return (
    <section className="py-24 relative border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all duration-300">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-8 py-6 text-left flex justify-between items-center bg-transparent outline-none focus:outline-none focus:ring-0 cursor-pointer"
              >
                <span className="font-medium font-display text-lg text-white pr-8">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-transform duration-300 ${openIdx === idx ? 'rotate-180 bg-red-500/20' : ''}`}>
                  <ChevronDown className={`w-4 h-4 text-slate-400 ${openIdx === idx ? 'text-red-400' : ''}`} />
                </div>
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-6 text-slate-400 leading-relaxed max-w-2xl">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
