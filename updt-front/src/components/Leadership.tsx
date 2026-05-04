import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function Leadership() {
  return (
    <section className="py-24 relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full relative order-2 lg:order-1"
          >
            <div className="w-full max-w-xs mx-auto lg:max-w-xs aspect-[4/5] glass-card rounded-[2.5rem] p-2 border border-white/10 overflow-hidden group">
              <div className="w-full h-full relative rounded-[2rem] overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <img
                  src="/ceo.png"
                  alt="Kirtan Sahu - CEO upDate"
                  className="w-full h-full object-cover filter group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="inline-flex flex-col gap-1 px-4 py-3 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 text-white">
                    <span className="font-display font-medium text-lg">
                      Kirtan Sahu
                    </span>
                    <span className="text-red-400 text-sm font-medium">
                      CEO – upDate
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-red-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />
          </motion.div>

          <div className="flex-1 w-full text-left order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-300 text-sm font-medium mb-6">
                Leadership
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-4">
                Meet Our <span className="text-gradient">CEO</span>
              </h2>

              <div className="flex flex-wrap gap-3 mb-10">
                {["IIT Patna", "IIM Ahmedabad", "IIM Amritsar"].map(
                  (credential, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-sm font-medium"
                    >
                      {credential}
                    </span>
                  )
                )}
              </div>

              <div className="relative mb-10">
                <Quote className="absolute -top-6 -left-6 w-12 h-12 text-white/5" />
                <blockquote className="text-2xl md:text-3xl font-display font-medium text-white italic leading-tight pl-4 border-l-2 border-red-500 relative z-10">
                  “We don’t just teach—we transform.”
                </blockquote>
              </div>

              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  With experience across finance and HR sectors and working with
                  top companies like Upstox, Bajaj Finserv, and Motilal Oswal,
                  our mission is to bridge the gap between academic learning and
                  real corporate experience through practical internships.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
