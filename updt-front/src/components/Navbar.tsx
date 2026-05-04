import { useModal } from "./ModalContext";

export default function Navbar() {
  const { openModal } = useModal();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-pane border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/">
          <img
            src="/update.png"
            alt="upDate"
            className="cursor-pointer h-9 w-auto inline-block"
          />
        </a>
        {/* <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-white transition-colors">Program</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#timeline" className="hover:text-white transition-colors">Timeline</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div> */}
        <div>
          <button
            onClick={openModal}
            className="bg-primary/10 border border-primary/30 hover:bg-primary/20 text-red-300 px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-[0_0_15px_rgba(239,68,68,0.15)] inline-flex items-center gap-2 cursor-pointer"
          >
            Apply Now
          </button>
        </div>
      </div>
    </nav>
  );
}
