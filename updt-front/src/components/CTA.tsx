import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useModal } from './ModalContext';

export default function CTA() {
  const { openModal } = useModal();

  return (
    <section className="py-32 relative overflow-hidden border-t border-white/5">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-primary/20 blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-display font-medium tracking-tight leading-[1.1] mb-8"
        >
          Build Your Career, <br/>
          <span className="text-gradient">Start Today.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto"
        >
          Join the next cohort of driven individuals and transform your skills in just 45 days.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          <button onClick={openModal} className="inline-flex items-center gap-2 bg-white hover:bg-slate-200 text-slate-950 px-8 py-5 rounded-2xl font-bold text-xl transition-all shadow-lg shadow-white/10 hover:shadow-white/20 cursor-pointer">
            Apply Now <ArrowRight size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
