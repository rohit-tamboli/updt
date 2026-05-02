import { motion } from "motion/react";
import { MapPin, Building2 } from "lucide-react";

export default function Reach() {
  return (
    <section className="py-24 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1 w-full text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-medium mb-6">
                Nationwide Reach
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-8">
                Our <span className="text-gradient">PAN-India</span> Presence
              </h2>

              <div className="space-y-6 text-slate-400 text-lg leading-relaxed mb-12">
                <p>
                  We are building a strong presence across India to create wider
                  career opportunities for our learners. With connections in
                  metropolitan cities, industrial hubs, and emerging markets, we
                  ensure localized hiring expertise with national-level
                  placement support.
                </p>
                <p>
                  Through our growing network, learners gain access to
                  internship and job opportunities across India, making their
                  career prospects stronger and more scalable.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.1)] group-hover:border-red-500/30 transition-colors">
                    <MapPin className="w-8 h-8 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-4xl font-display font-bold text-white tracking-tight mb-1">
                      15+
                    </h4>
                    <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">
                      States Covered
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.1)] group-hover:border-red-500/30 transition-colors">
                    <Building2 className="w-8 h-8 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-4xl font-display font-bold text-white tracking-tight mb-1">
                      50+
                    </h4>
                    <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">
                      Cities Network
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full relative"
          >
            <div className="w-full aspect-square sm:aspect-[4/3] lg:aspect-square xl:aspect-[4/3] glass-card rounded-[2.5rem] p-2 border border-white/10 overflow-hidden group">
              <div className="w-full h-full relative rounded-[2rem] overflow-hidden bg-slate-900 flex items-center justify-center p-4">
                {/* Background map graphic simulation */}

                <div className="absolute inset-0 opacity-90 mix-blend-screen bg-[url('/Chattisgarh.png')] bg-cover bg-center grayscale contrast-105 transition-transform duration-700 group-hover:scale-105" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

                {/* Overlay content to substitute image while providing context */}
                <div className="relative z-10 w-full h-full flex flex-col justify-end md:pl-76 md:pb-19 pl-46 pb-21">
                  <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md self-start px-2 py-2 rounded-xl border border-white/10 mb-4">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    <span className="text-white font-medium text-[8px] md:text-[10px]">
                      Expanding Rapidly
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-red-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
