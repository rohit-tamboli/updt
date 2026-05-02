import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useModal } from './ModalContext';

export default function ApplicationForm() {
  const { isModalOpen, closeModal } = useModal();

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg glass-card rounded-[2.5rem] p-8 md:p-10 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" />
            
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10"
            >
              <X size={20} />
            </button>

            <h3 className="text-3xl md:text-4xl font-display font-medium text-white mb-2 tracking-tight">Join the Cohort</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">Fill out your details below to secure your spot for the next batch.</p>

            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Application Submitted Successfully!'); closeModal(); }}>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Full Name</label>
                <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-sans" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Email Address</label>
                <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-sans" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Phone Number</label>
                <input type="tel" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-sans" placeholder="+91 98765 43210" />
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full bg-white hover:bg-slate-200 text-slate-950 py-4.5 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]">
                  Submit Application
                </button>
              </div>
              <p className="text-center text-xs text-slate-500 mt-4">
                We'll reach out to you within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
