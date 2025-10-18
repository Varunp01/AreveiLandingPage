import React, { useState, useEffect, useRef } from "react";

const useIntersectionObserver = (ref, options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [ref, options]);

  return isIntersecting;
};

const AnimatedStatCard = ({ endValue, label, prefix="", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  const isVisible = useIntersectionObserver(cardRef, { threshold: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      let startTime = null;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        const currentValue = Math.floor(percentage * endValue);
        setCount(currentValue);

        if (percentage < 1) {
          requestAnimationFrame(animate);
        } else {
          hasAnimated.current = true;
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isVisible, endValue, duration]);

  const cardClasses =
    "p-6 rounded-2xl bg-white/5 border border-[#9BE13F]/20 shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:shadow-[#9BE13F20] backdrop-blur-sm text-center";

  return (
    <div ref={cardRef} className={cardClasses}>
      <p className="text-3xl md:text-5xl font-extrabold text-white mb-2">
        {count.toLocaleString()}{prefix}
      </p>
      <p className="text-base md:text-xl font-semibold text-[#9BE13F] uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
};

export default function About() {
  const stats = [
    { id: 1, endValue: 23, prefix: "%", label: "Conversion Rate" },
    { id: 2, endValue: 92, prefix: "+", label: "Client Websites" },
    { id: 3, endValue: 95, prefix: "%", label: "Retention Rate" },
    { id: 4, endValue: 10, prefix: "M+", label: "Total Revenue Driven" },
  ];

  return (
    <section className="mt-20 mb-24 max-w-6xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 w-full order-1 lg:order-2">
          <img src="https://placehold.co/800x600/1e0a3b/a78bfa?text=About+Us" alt="Abstract visualization of a modern interface" className="w-full h-auto rounded-xl shadow-2xl border-2 border-purple-500/30 object-cover transition-transform duration-500 hover:scale-[1.01]" />
          <a href="/#Services_Section" className="hidden fontInter mt-10 text-gray-800 transition-all duration-300 ease-in-out bg-[#9BE13F] hover:bg-white rounded-4xl md:flex items-center justify-center px-8 py-3 shadow-xl font-semibold text-lg transform hover:scale-105 active:scale-100" >
            Services
          </a>
        </div>
        <div className=" fontInter lg:w-1/2 w-full text-left order-2 lg:order-1">
          {/* Heading */}
          <h2 className="fontInter text-3xl md:text-5xl font-bold text-white mb-4">
            A Powerful Agency With Real Results That Drive Growth
          </h2>
          {/* Subheading */}
          <p className="fontInter text-base md:text-xl text-white mb-6 font-medium">
            <span className='text-[#9BE13F]'>We don't just build websites and send emails</span>; we engineer integrated systems. Our success is measured by the growth of your business, built on a foundation of technical mastery and strategic conversion design.
          </p>
          <div className="grid grid-cols-2 gap-2">
            {stats.map(stat => (
              <AnimatedStatCard key={stat.id} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
