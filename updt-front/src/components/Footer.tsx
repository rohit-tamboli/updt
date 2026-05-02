export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#09090b] pt-16 pb-8 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="text-2xl font-display font-black text-gradient-primary tracking-tighter">
            <img src="/update.png" alt="upDate" className="h-6 w-auto inline-block" />
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">Program</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#timeline" className="hover:text-white transition-colors">Timeline</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} upDate. All rights reserved.</p>
          <div className="flex gap-6 font-medium">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
