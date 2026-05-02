import { motion } from "motion/react";
import {
  Code2,
  Megaphone,
  Hammer,
  MessageSquare,
  Presentation,
} from "lucide-react";

export default function Skills() {
  const skills = [
    {
      name: "Web Development",
      tags: ["HTML", "CSS", "JS", "React", "Tailwind"],
      icon: <Code2 className="w-5 h-5" />,
      color: "text-zinc-400 group-hover:text-red-500",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Digital Marketing",
      tags: ["SEO", "Social Media", "Analytics"],
      icon: <Megaphone className="w-5 h-5" />,
      color: "text-zinc-400 group-hover:text-red-500",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Real Projects",
      tags: ["Architecture", "Deployment", "Git"],
      icon: <Hammer className="w-5 h-5" />,
      color: "text-zinc-400 group-hover:text-red-500",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Communication",
      tags: ["Email Etiquette", "Meetings", "Agile"],
      icon: <MessageSquare className="w-5 h-5" />,
      color: "text-zinc-400 group-hover:text-red-500",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Interview Prep",
      tags: ["Mock Interviews", "Aptitude", "HR Rounds"],
      icon: <Presentation className="w-5 h-5" />,
      color: "text-zinc-400 group-hover:text-red-500",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <section id="skills" className="py-24 relative border-t border-white/5">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        

        <div className="max-w-6xl mx-auto px-6 relative z-10 mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-4">
           Skills You Will Master
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
            Equip yourself with the tools and techniques that modern tech
            companies demand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card rounded-[2rem] p-4 group flex flex-col hover:border-red-500/30 transition-colors"
            >
              <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 relative border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-full h-full object-cover filter grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="px-2 pb-2 flex-col flex flex-grow">
                <div
                  className={`mb-5 flex items-center gap-3 transition-colors ${skill.color}`}
                >
                  {skill.icon}
                  <h3 className="text-xl font-medium font-display tracking-tight text-white group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {skill.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-medium px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
