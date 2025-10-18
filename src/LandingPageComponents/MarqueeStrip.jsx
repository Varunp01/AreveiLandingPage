import { useState, useEffect } from 'react'
import '../App.css'

const MarqueeStrip = () => {
  const sentences = [
    "The fixed background creates an immersive depth effect.",
    "Mouse tracking spotlights your every move.",
    "Modern UI components enhance the user experience.",
    "Scroll down to explore the dynamic effects.",
    "Built with React, JSX, and Tailwind CSS."
  ];

  // Duration controls the speed (lower is faster)
  const duration = sentences.length * 5; 
  // Duplicate content for a seamless loop
  const content = [...sentences, ...sentences];
  const animationName = 'marquee-scroll-left';

  return (
    <>
      <style>{`
        @keyframes ${animationName} {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%); /* Moves one full set of duplicated sentences */
          }
        }
        /* Pauses the animation when hovering over the container */
        .marquee-container:hover .marquee-content {
          animation-play-state: paused !important;
        }
      `}</style>
      <div className="marquee-container mb-10">
      <div className="relative w-full overflow-hidden mt-5 py-3 bg-gradient-to-r from-[#1C1C1C] via-white/10 to-[#1C1C1C] border-y border-[#9BE13F]/30">
        <div className="marquee-content flex whitespace-nowrap" style={{ animation: `${animationName} ${duration}s linear infinite` }} >
          {content.map((sentence, index) => (
            <span key={index} className="fontInter text-sm sm:text-xl px-8 text-white font-medium tracking-wide flex-shrink-0">
              {sentence} <span className="text-[#9BE13F] ml-8">&#9733;</span>
            </span>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default MarqueeStrip