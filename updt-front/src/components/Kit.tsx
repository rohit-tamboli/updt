import { motion } from "motion/react";
import { Award, FileText, Gift, Bookmark, ShieldCheck } from "lucide-react";

export default function Kit() {
  const kitItems = [
    {
      title: "Advanced Training Certification",
      desc: "Domain specific training certificate",
      icon: (
        <Award className="w-5 h-5 text-red-500 group-hover:text-red-400 transition-colors" />
      ),
    },
    {
      title: "Letter of Recommendation (LOR)",
      desc: "To boost your professional profile",
      icon: (
        <Bookmark className="w-5 h-5 text-red-500 group-hover:text-red-400 transition-colors" />
      ),
    },
    {
      title: "NISM Certification",
      desc: "SEBI recognized financial certification",
      icon: (
        <ShieldCheck className="w-5 h-5 text-red-500 group-hover:text-red-400 transition-colors" />
      ),
    },
    {
      title: "Internship Offer Letter",
      desc: "Official confirmation document",
      icon: (
        <FileText className="w-5 h-5 text-red-500 group-hover:text-red-400 transition-colors" />
      ),
    },
    {
      title: "Welcome Corporate KIT",
      desc: "Premium T-shirt, bottle, pen & custom box",
      icon: (
        <Gift className="w-5 h-5 text-red-500 group-hover:text-red-400 transition-colors" />
      ),
    },
  ];

  return (
    <section id="kit" className="py-24 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-96 bg-red-900/10 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16 max-w-2xl text-left md:text-center mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-4">
            Included <span className="text-gradient">Corporate Kit</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Everything you need to stand out. Get certified, recognized, and
            geared up with our official welcome kit.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 w-full flex flex-col gap-4">
            {kitItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="glass-card rounded-2xl p-5 border border-white/10 hover:border-red-500/30 hover:bg-white/5 transition-all duration-300 flex items-center gap-5 cursor-pointer group">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20 group-hover:bg-red-500/20 transition-colors shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-white tracking-wide mb-1 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-tight">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full relative"
          >
            <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden glass-card border border-white/10 p-2">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                <img
                  src="Corporate.png"
                  alt="Corporate Kit and Certificates"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 text-white text-sm font-medium">
                    <Gift className="w-4 h-4 text-red-500" /> Official
                    Merchandise
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div
              className="absolute -top-6 -right-6 w-24 h-24 bg-[#09090b] rounded-full border border-white/10 flex items-center justify-center shadow-xl animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <div className="text-center">
                <Award className="w-8 h-8 text-red-500 mx-auto mb-1" />
                <div className="text-[10px] font-bold text-white leading-none">
                  CERTIFIED
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
