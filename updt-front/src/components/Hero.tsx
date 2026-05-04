import { motion } from "motion/react";
import { ArrowRight, Download, CheckCircle2 } from "lucide-react";
import { useModal } from "./ModalContext";

export default function Hero() {
  const { openModal } = useModal();
  const extras = [
    "Placement Assistance",
    "Real Projects",
    "Certificate + Corporate Kit",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[url('https://res.cloudinary.com/dcbx12h9i/image/upload/v1707886475/grid-bg_1_pmsihv.png')] bg-repeat bg-[length:50px_50px]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09090b]/80 to-[#09090b]" />

      {/* Background glowing effects */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-slate-300 text-sm font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            Registered Under DPIIT, Govt. of India
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-8xl font-display font-bold leading-[1.05] tracking-tight mb-8 text-white"
          >
            Kickstart Your Career <br className="hidden md:block" />
            <span className="text-gradient">In Just 45 Days.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed"
          >
            Join upDate Intensive Internship Program & Get Real Corporate
            Experience + Industry-Ready Skills from day one.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={openModal}
              className="bg-white text-slate-950 hover:bg-slate-200 px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 text-lg cursor-pointer"
            >
              Apply Now <ArrowRight size={20} />
            </button>
            <button onClick={() => window.open("/Broshure.pdf", "_blank")} className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 text-lg cursor-pointer">
              Download Brochure <Download size={20} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 pt-8 border-t border-white/5 pb-8"
          >
            {extras.map((extra, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 text-slate-400 text-sm md:text-base font-medium"
              >
                <CheckCircle2 size={18} className="text-secondary" />
                {extra}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
