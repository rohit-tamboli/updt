import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { useModal } from './ModalContext';

export default function Pricing() {
  const { openModal } = useModal();

  return (
    <section id="pricing" className="py-32 relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-12 items-center">
        
        <div className="flex-1 text-center md:text-left">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-block bg-white/5 border border-white/10 text-white font-medium px-4 py-1.5 rounded-full text-sm mb-6"
          >
            🔥 Limited Time Offer
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-6 leading-tight text-white">
            Invest in Your Future <span className="text-gradient">Today.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            Secure your spot in the next cohort. Join hundreds of students who have launched their careers with our guidance.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full max-w-md"
        >
          <div className="glass-card rounded-[2.5rem] p-8 sm:p-10 border border-white/10 relative overflow-hidden group hover:border-red-500/30 transition-colors duration-300">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" />
            
            <div className="mb-8">
              <p className="text-slate-400 text-2xl line-through decoration-slate-600 mb-2 font-mono">₹4,999</p>
              <div className="flex items-end gap-2">
                <span className="text-7xl font-display font-bold text-white tracking-tighter">₹99</span>
                <span className="text-slate-400 mb-2 font-medium">only</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 mb-10">
              {[
                "Complete 45 Days Program",
                "1-on-1 Expert Mentorship",
                "Exclusive Corporate Kit",
                "100% Placement Assistance"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors">
                    <Check size={14} className="text-red-500" />
                  </div>
                  <span className="text-slate-300 text-sm tracking-wide">{feature}</span>
                </div>
              ))}
            </div>

            <button onClick={openModal} className="w-full bg-white hover:bg-slate-200 text-slate-950 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] cursor-pointer">
              Enroll Now <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
