import { Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function Experts() {
  const interns = [
    {
      name: "Suraj Tiwari",
      role: "Placed at Wipro",
      desc: "₹4.5 LPA",
      img: "/In1.png",
    },
    {
      name: "Manya M",
      role: "Placed at Cognizant",
      desc: "Web Development",
      img: "/In2.png",
    },
    {
      name: "Ananya Sindhe",
      role: "Placed at Flipkart",
      desc: "₹6 LPA",
      img: "/In3.png",
    },
    {
      name: "Praveen Tomar",
      role: "Placed at Maruti Suzuki",
      desc: "Digital Marketing",
      img: "/In4.png",
    },
    {
      name: "Rahul Lodhi",
      role: "Placed at ITC Limited",
      desc: "₹5 LPA",
      img: "/In5.png",
    },
    {
      name: "Praveen Parashar",
      role: "Placed at HYUNDAI",
      desc: "₹5 LPA",
      img: "/In6.png",
    },
    {
      name: "Sinana K",
      role: "Placed at Infosys",
      desc: "₹5 LPA",
      img: "/In7.png",
    },
    {
      name: "Sameer Khan",
      role: "Placed at PARLE",
      desc: "₹5 LPA",
      img: "/In8.png",
    },
    {
      name: "Amit Kumar Mahato",
      role: "Placed at upDate",
      desc: "₹5 LPA",
      img: "/In9.png",
    },
    {
      name: "Mayur Digambar",
      role: "Placed at AlignerAi",
      desc: "₹5 LPA",
      img: "/In10.png",
    },
    {
      name: "Sandhya Pal",
      role: "Placed at UCO BANK",
      desc: "₹5 LPA",
      img: "/In11.png",
    },
    {
      name: "Sanjana Bhanajdeo",
      role: "Placed at UCO BANK",
      desc: "₹5 LPA",
      img: "/In12.png",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let lastTime = performance.now();
    let accumulatedScroll = 0;
    const speed = 0.05; // pixels per ms

    const scroll = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isHovered && scrollContainer) {
        accumulatedScroll += speed * delta;
        if (accumulatedScroll >= 1) {
          scrollContainer.scrollLeft += accumulatedScroll;
          accumulatedScroll = accumulatedScroll % 1;
        }

        // When halfway through (meaning we scrolled past first full set), reset to 0
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft -= scrollContainer.scrollWidth / 2;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-4">
          Meet Our <span className="text-gradient">Interns</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
          Learn directly from industry leaders who have engineered products for
          millions of users.
        </p>
      </div>

      <div
        className="relative w-full overflow-hidden flex flex-col group py-4 "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          onClick={handleScrollLeft}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/10 bg-[#09090b]/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/10 hover:border-red-500/50 transition-all cursor-pointer opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleScrollRight}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/10 bg-[#09090b]/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/10 hover:border-red-500/50 transition-all cursor-pointer opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-[#09090b] to-transparent z-20 pointer-events-none" />
        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-[#09090b] to-transparent z-20 pointer-events-none" />

        <div ref={scrollRef} className="flex overflow-x-auto no-scrollbar">
          <div className="flex w-max">
            {[...Array(4)].map((_, alignIdx) => (
              <div key={alignIdx} className="flex gap-6 px-3">
                {interns.map((expert, idx) => (
                  <div
                    key={`${alignIdx}-${idx}`}
                    className="w-[260px] md:w-[260px] flex-shrink-0 glass-card rounded-[2rem] p-6 border border-white/10 hover:border-red-500/30 transition-all duration-300 group/card relative cursor-pointer"
                  >
                    <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-red-500/40 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                      <img
                        src={expert.img}
                        alt={expert.name}
                        className="w-full h-full object-cover filter grayscale group-hover/card:grayscale-0 transition-all duration-500 scale-100 group-hover/card:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-display font-medium text-white mb-1 tracking-tight">
                          {expert.name}
                        </h3>
                        <p className="text-red-400 text-sm font-medium mb-1">
                          {expert.role}
                        </p>
                        <p className="text-slate-500 text-sm font-mono">
                          {/* {expert.desc}  */}
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover/card:text-red-400 group-hover/card:border-red-400/30 transition-all transform opacity-0 translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0">
                        <Linkedin className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
