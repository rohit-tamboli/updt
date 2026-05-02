import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Frontend Developer",
      feedback: "This internship helped me land my first job! The real-world projects were exactly what my resume needed.",
      initials: "RS"
    },
    {
      name: "Priya Patel",
      role: "UI/UX Designer",
      feedback: "The mentorship and the corporate kit gave me the confidence to ace my interviews. Highly recommended!",
      initials: "PP"
    },
    {
      name: "Amit Kumar",
      role: "Full Stack Developer",
      feedback: "I learned more in these 45 days than I did in an entire semester at college. Hands-on learning is the best.",
      initials: "AK"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-4">
            Hear From Our <span className="text-gradient">Students</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Hear from those who successfully transformed their careers with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-[2rem] p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6 text-red-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-300 mb-8 leading-relaxed text-sm md:text-base">
                  "{review.feedback}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-display font-medium text-white text-sm border border-white/10">
                  {review.initials}
                </div>
                <div>
                  <h4 className="text-white font-medium font-display leading-tight">{review.name}</h4>
                  <p className="text-slate-400 text-xs">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
