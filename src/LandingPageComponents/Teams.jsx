import React, { useState, useEffect, useRef } from "react";

const carouselData = [
  {
    id: 1,
    mainUrl: 'https://placehold.co/800x450/1e3a8a/ffffff?text=Vinay+Shakyawar',
    thumbUrl: 'https://placehold.co/60x60/1e3a8a/ffffff?text=VS',
    alt: 'FOUNDER'
  },
  {
    id: 2,
    mainUrl: 'https://placehold.co/800x450/065f46/ffffff?text=Varun+Pandey',
    thumbUrl: 'https://placehold.co/60x60/065f46/ffffff?text=VP',
    alt: 'DEVELOPER'
  },
  {
    id: 3,
    mainUrl: 'https://placehold.co/800x450/9d174d/ffffff?text=Rishabh+Katiyar',
    thumbUrl: 'https://placehold.co/60x60/9d174d/ffffff?text=RK',
    alt: 'DEVELOPER'
  },
  {
    id: 4,
    mainUrl: 'https://placehold.co/800x450/b45309/ffffff?text=Karthik+Shakyawar',
    thumbUrl: 'https://placehold.co/60x60/b45309/ffffff?text=KS',
    alt: 'DEVELOPER'
  },
  {
    id: 5,
    mainUrl: 'https://placehold.co/800x450/4c1d95/ffffff?text=Bishwa+Vijay',
    thumbUrl: 'https://placehold.co/60x60/4c1d95/ffffff?text=BV',
    alt: 'CTO'
  },
];

export default function Teams() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle clicking on a custom navigation dot
  const handleNavClick = (index) => {
    setCurrentIndex(index);
  };

  // The currently displayed image object
  const currentImage = carouselData[currentIndex];

  return (
    <section className="mt-20 mb-24 max-w-6xl mx-auto px-6 " >
      <div className="flex flex-col lg:flex-row items-center gap-5">
        <div className="lg:w-1/2 w-full order-1 lg:order-1">
          <div className="w-full rounded-xl overflow-hidden py-6 md:py-8">

            {/* --- Main Image Display Area --- */}
            <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden border-2 border-[#9BE13F] transition duration-500">
              <img key={currentImage.id} src={currentImage.mainUrl} alt={currentImage.alt} className="w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-100"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/800x450/ef4444/ffffff?text=Error+Loading+Image";
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 py-1 px-2 bg-black bg-opacity-40 text-[#9BE13F90] text-base font-semibold">
                {currentImage.alt}
              </div>
            </div>

            {/* --- Custom Image Navigation Dots --- */}
            <div className="flex flex-wrap justify-center gap-2 py-1 rounded-lg">
              {carouselData.map((item, index) => (
                <div key={item.id} onClick={() => handleNavClick(index)} className={` cursor-pointer  transition-all  duration-300  p-1  rounded-lg  flex-shrink-0 hover:shadow-lg
                ${index === currentIndex
                    ? 'border-3 border-[#9BE13F] transform scale-110 shadow-xl'
                    : 'border-2 border-gray-300 hover:border-[#9BE13F]'
                  }
              `}
                >
                  <img src={item.thumbUrl} alt={`Thumbnail for ${item.alt}`} className="w-10 h-10 object-cover rounded-md" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" fontInter lg:w-1/2 w-full text-left order-2 lg:order-2 md:px-2">
          {/* Heading */}
          <h2 className="fontInter text-3xl md:text-5xl font-bold text-white mb-4">
            Architects of Your Digital Growth
          </h2>
          {/* Subheading */}
          <p className="fontInter text-base md:text-xl text-white mb-6 font-medium">
            A unified team of <span className='text-[#9BE13F]'>tech experts and marketing strategists</span>. We build and optimize the digital systems that turn your potential into <span className='text-[#9BE13F]'>profit</span>.
          </p>
          <div className="grid grid-cols-1 gap-2">
            {/* //cards */}
            <div className=" flex p-6 rounded-2xl bg-white/5 border border-[#9BE13F]/20 shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:shadow-[#9BE13F20] backdrop-blur-sm text-center">
              <div className="">
                <div className="text-3xl md:text-5xl text-white bg-[#9BE13F] w-12 h-12 rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="black"><path d="M420.9 448C428.2 425.7 442.8 405.5 459.3 388.1C492 353.7 512 307.2 512 256C512 150 426 64 320 64C214 64 128 150 128 256C128 307.2 148 353.7 180.7 388.1C197.2 405.5 211.9 425.7 219.1 448L420.8 448zM416 496L224 496L224 512C224 556.2 259.8 592 304 592L336 592C380.2 592 416 556.2 416 512L416 496zM312 176C272.2 176 240 208.2 240 248C240 261.3 229.3 272 216 272C202.7 272 192 261.3 192 248C192 181.7 245.7 128 312 128C325.3 128 336 138.7 336 152C336 165.3 325.3 176 312 176z" /></svg>
                </div>
              </div>
              <div className="text-left px-3">
                <p className="text-base md:text-xl font-semibold text-white capitalize tracking-wide">
                  Thoughtful Planning
                </p>
                <p className="text-sm md:text-base font-normal text-gray-500 ">
                  Every plan our team arranges has a huge impact in the desired outcome and it ensures success.
                </p>
              </div>
            </div>
            <div className=" flex p-6 rounded-2xl bg-white/5 border border-[#9BE13F]/20 shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:shadow-[#9BE13F20] backdrop-blur-sm text-center">
              <div className="">
                <div className="text-3xl md:text-5xl text-white bg-[#9BE13F] w-12 h-12 rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="black"><path d="M184 120C184 89.1 209.1 64 240 64L264 64C281.7 64 296 78.3 296 96L296 544C296 561.7 281.7 576 264 576L232 576C202.2 576 177.1 555.6 170 528C169.3 528 168.7 528 168 528C123.8 528 88 492.2 88 448C88 430 94 413.4 104 400C84.6 385.4 72 362.2 72 336C72 305.1 89.6 278.2 115.2 264.9C108.1 252.9 104 238.9 104 224C104 179.8 139.8 144 184 144L184 120zM456 120L456 144C500.2 144 536 179.8 536 224C536 239 531.9 253 524.8 264.9C550.5 278.2 568 305 568 336C568 362.2 555.4 385.4 536 400C546 413.4 552 430 552 448C552 492.2 516.2 528 472 528C471.3 528 470.7 528 470 528C462.9 555.6 437.8 576 408 576L376 576C358.3 576 344 561.7 344 544L344 96C344 78.3 358.3 64 376 64L400 64C430.9 64 456 89.1 456 120z"/></svg>
                </div>
              </div>
              <div className="text-left px-3">
                <p className="text-base md:text-xl font-semibold text-white capitalize tracking-wide">
                  Collaborative Mindsets
                </p>
                <p className="text-sm md:text-base font-normal text-gray-500 ">
                  A mindset of empathy and collaboration creates a better for understanding the pain client has.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
