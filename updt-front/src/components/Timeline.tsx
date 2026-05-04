import { motion } from 'motion/react';

export default function Timeline() {
  const steps = [
    {
      phase: "Week 01-02",
      title: "Foundations",
      description: "Setup your environment, understand core concepts, and build fundamental blocks."
    },
    {
      phase: "Week 03-04",
      title: "Advanced Craft",
      description: "Dive deep into advanced topics and build bite-sized projects to solidify your learning."
    },
    {
      phase: "Week 05-06",
      title: "Capstone Project",
      description: "Incorporate all learnings into a major, resume-worthy production project."
    },
    {
      phase: "Last Days",
      title: "Career Ready",
      description: "Prepare for HR rounds, optimize your LinkedIn, and grab your completion certificate."
    }
  ];

  return (
    <section id="timeline" className="py-24 relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-4">
            The <span className="text-gradient">45 Days</span> Path
          </h2>
          <p className="text-slate-400 text-lg">A structured curriculum designed to maximize your learning and output.</p>
        </div>

        <div className="relative border-l border-white/10 ml-3 md:ml-0 md:pl-0 md:border-none">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`mb-12 relative flex flex-col md:flex-row items-start md:items-center justify-between group ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="absolute left-[-5px] md:left-1/2 top-0 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 w-3 h-3 rounded-full bg-slate-400 group-hover:bg-red-500 group-hover:shadow-[0_0_12px_rgba(239,68,68,0.8)] transition-all duration-300 z-10" />

              <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                <div className="text-red-500 font-mono text-sm tracking-wider uppercase mb-3">{step.phase}</div>
                <div className="glass-card p-8 rounded-3xl group-hover:border-red-500/30 transition-colors duration-300">
                  <h3 className="text-2xl font-display font-medium text-white mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>

              <div className="hidden md:block w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
