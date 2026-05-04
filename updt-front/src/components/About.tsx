import { motion } from 'motion/react';
import { Briefcase, Target, Users, TrendingUp } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Briefcase className="w-8 h-8 text-red-500" />,
      title: "Industry-Level Training",
      description: "Learn workflows and practices used inside top MNCs and tech startups.",
      colSpan: "md:col-span-2 lg:col-span-2"
    },
    {
      icon: <Target className="w-8 h-8 text-zinc-400 group-hover:text-red-400 transition-colors" />,
      title: "Real-World Projects",
      description: "Don't just watch tutorials. Build scalable projects that solve actual problems.",
      colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
      icon: <Users className="w-8 h-8 text-zinc-400 group-hover:text-red-400 transition-colors" />,
      title: "Expert Mentorship",
      description: "Get 1-on-1 guidance from seniors working at top tech giants.",
      colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-zinc-400 group-hover:text-red-400 transition-colors" />,
      title: "Profile Optimization",
      description: "Boost your visibility with resume building and LinkedIn optimization.",
      colSpan: "md:col-span-2 lg:col-span-2"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">


       

        <div className="max-w-6xl mx-auto px-6 relative z-10 mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-4">
          Why Choose <span className="text-gradient">UPDT?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
            We bridge the gap between academic learning and corporate expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card rounded-3xl p-8 flex flex-col justify-between items-start group ${feature.colSpan}`}
            >
              <div className="mb-8">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold font-display tracking-tight mb-2 text-white">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
