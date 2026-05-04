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
            className="relative w-full max-w-2xl glass-card rounded-[2.5rem] p-8 md:p-10 max-h-[90vh] overflow-y-auto no-scrollbar"
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

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Application Submitted Successfully!'); closeModal(); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Full Name *</label>
                  <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-sans" placeholder="Full Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Email Address *</label>
                  <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-sans" placeholder="Email Address" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Mobile Number *</label>
                  <input type="tel" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-sans" placeholder="Phone Number" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">College / University Name *</label>
                  <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-sans" placeholder="College / University Name" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Full Address *</label>
                <textarea required rows={2} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-sans resize-none" placeholder="Enter your full address"></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Which Department are you interested in Internship? (1st Preference) *</label>
                <select required className="w-full bg-[#0f1115] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-sans appearance-none">
                  <option value="" disabled selected>Select Department</option>
                  <option value="hr">Human Resources</option>
                  <option value="finance">Finance</option>
                  <option value="marketing">Marketing</option>
                  <option value="web-dev">Web Development</option>
                  <option value="data-science">Data Science</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Study In *</label>
                  <select required className="w-full bg-[#0f1115] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-sans appearance-none">
                    <option value="" disabled selected>Select Course</option>
                    <option value="btech">B.Tech / B.E</option>
                    <option value="mba">MBA / PGDM</option>
                    <option value="bba">BBA</option>
                    <option value="bsc">B.Sc</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">What describes you best *</label>
                  <select required className="w-full bg-[#0f1115] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-sans appearance-none">
                    <option value="" disabled selected>Select Option</option>
                    <option value="student">Student</option>
                    <option value="working-professional">Working Professional</option>
                  </select>
                </div>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="text-white font-medium mb-1">Company Official WhatsApp Channel</h4>
                  <p className="text-red-400/80 text-sm">Stay united with our official community.</p>
                </div>
                <a 
                  href="https://wa.me/918109718211"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors text-center shrink-0"
                >
                  Link (Click Now)
                </a>
              </div>

              <div className="pt-4">
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
