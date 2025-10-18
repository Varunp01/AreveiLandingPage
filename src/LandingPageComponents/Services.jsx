import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../App.css";

const carouselData = [

  { 
    id: 1, 
    category: "Website Development", 
    title: "Custom Website Design", 
    description: "Visually stunning sites built for your brand.", 
    imageUrl: "https://placehold.co/600x400/3B82F6/FFFFFF?text=Website+Design", 
    color: "ring-blue-500" 
  },

  { 
    id: 2, 
    category: "Email Marketing", 
    title: "Advanced Email Automation", 
    description: "Nurture leads and generate passive revenue streams.", 
    imageUrl: "https://placehold.co/600x400/F97316/000000?text=Automation+Flows", 
    color: "ring-orange-500" 
  },

  { 
    id: 3, 
    category: "Website Development", 
    title: "High-Speed Development", 
    description: "Fast, clean coding for excellent user experience.", 
    imageUrl: "https://placehold.co/600x400/10B981/FFFFFF?text=Speed+Optimized", 
    color: "ring-green-500" 
  },

  { 
    id: 4, 
    category: "Email Marketing", 
    title: "Segmentation & Strategy", 
    description: "Precise targeting for hyper-personalized messaging.", 
    imageUrl: "https://placehold.co/600x400/EA580C/FFFFFF?text=Targeted+Segments", 
    color: "ring-amber-500" 
  },

  { 
    id: 5, 
    category: "Website Development", 
    title: "E-commerce Platform Build", 
    description: "Scalable online stores built to drive sales.", 
    imageUrl: "https://placehold.co/600x400/06B6D4/FFFFFF?text=E-commerce+Build", 
    color: "ring-cyan-500" 
  },

  { 
    id: 6, 
    category: "Email Marketing", 
    title: "Campaign Design & Copy", 
    description: "Compelling, responsive emails that drive action.", 
    imageUrl: "https://placehold.co/600x400/D97706/FFFFFF?text=Copy+and+Design", 
    color: "ring-yellow-500" 
  },

  { 
    id: 7, 
    category: "Website Development", 
    title: "UI/UX Optimization", 
    description: "Strategic design for intuitive, high-converting journeys.", 
    imageUrl: "https://placehold.co/600x400/059669/FFFFFF?text=UX/UI+Focused", 
    color: "ring-emerald-500" 
  },

  { 
    id: 8, 
    category: "Email Marketing", 
    title: "ESP Migration & Setup", 
    description: "Seamlessly move to a powerful email provider.", 
    imageUrl: "https://placehold.co/600x400/FB923C/000000?text=ESP+Migration", 
    color: "ring-orange-400" 
  },

  { 
    id: 9, 
    category: "Website Development", 
    title: "Post-Launch Maintenance", 
    description: "Ongoing security, updates, and performance monitoring.", 
    imageUrl: "https://placehold.co/600x400/60A5FA/FFFFFF?text=Site+Maintenance", 
    color: "ring-indigo-500" 
  },

  { 
    id: 10, 
    category: "Email Marketing", 
    title: "A/B Testing & Reporting", 
    description: "Continuous optimization backed by clear performance data.", 
    imageUrl: "https://placehold.co/600x400/F43F5E/FFFFFF?text=Data+Driven+Tests", 
    color: "ring-red-500" 
  }

];


function Services() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const totalSlides = carouselData.length;
  const carouselRef = useRef(null);

  // Clone first and last slides for smooth infinite scroll
  const extendedSlides = [
    carouselData[carouselData.length - 1],
    ...carouselData,
    carouselData[0],
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => goToNext(), 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const goToNext = () => {
    if (activeIndex >= totalSlides) return setActiveIndex((prev) => prev + 1);
    setActiveIndex((prev) => prev + 1);
  };

  const goToPrev = () => {
    if (activeIndex <= 0) return setActiveIndex((prev) => prev - 1);
    setActiveIndex((prev) => prev - 1);
  };

  // Handle infinite scroll “reset” when we reach cloned slides
  useEffect(() => {
    if (activeIndex === totalSlides + 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(1);
      }, 700);
    } else if (activeIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(totalSlides);
      }, 700);
    } else {
      setIsTransitioning(true);
    }
  }, [activeIndex]);

  const shiftPercentage = isMobile ? 100 : 100 / 3;
  const transformStyle = {
    transform: `translateX(-${activeIndex * shiftPercentage}%)`,
  };

  const transitionClass = isTransitioning
    ? "transition-transform duration-700 ease-in-out"
    : "";

  const buttonClasses =
    "border border-[#9BE13F] p-3 rounded-full shadow-lg text-white hover:text-black hover:bg-[#9BE13F] transition duration-300 focus:outline-none focus:ring-4 focus:ring-[#9BE13F]";

  return (
    <section className="mt-20 mb-24 max-w-6xl mx-auto px-6 " >
      <div className="flex flex-col lg:flex-row items-center">
        {/* Buttons */}
        <div className="lg:w-1/4 w-full order-2 lg:order-2">
          <div className="flex justify-center space-x-4 mb-4">
            <button onClick={goToPrev} className={buttonClasses}>
              <ChevronLeft size={24} />
            </button>
            <button onClick={goToNext} className={buttonClasses}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Text Section */}
        <div className="fontInter lg:w-3/4 w-full text-left order-1 lg:order-1 md:pr-7">
          <h2 className="fontInter text-3xl md:text-5xl font-bold text-white mb-4">
            The Unified Digital Stack
          </h2>
          <p className="fontInter text-base md:text-xl text-white mb-6 font-medium">
            <span className="text-[#9BE13F]">
              We don't offer standalone services;
            </span>{" "}
            we provide an integrated growth strategy. Our services ensure your website is a high-performing asset, and your email is a reliable revenue channel.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden rounded-3xl p-4">
        <div
          ref={carouselRef}
          className={`flex ${transitionClass}`}
          style={transformStyle}
        >
          {extendedSlides.map((card, idx) => (
            <div key={idx} className="flex-shrink-0 w-full md:w-1/3 pt-4 px-4">
              <div className="overflow-hidden group h-full bg-[#222222] hover:bg-[#9BE13F] rounded-xl pt-6 px-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <button className="text-white border border-white group-hover:border-black group-hover:text-black px-4 py-1.5 mb-4 rounded-full text-sm font-semibold hover:bg-white transition duration-300">
                  {card.category}
                </button>
                <h2 className="text-xl font-bold text-white group-hover:text-black mb-2 truncate">
                  {card.title}
                </h2>
                <p className="text-sm text-white group-hover:text-gray-800 mb-4 line-clamp-2">
                  {card.description}
                </p>
                <div
                  className={`rounded-lg overflow-hidden mt-4 shadow-md ring-2 ${card.color}`}
                >
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-full h-auto object-cover aspect-[16/9]"
                    onError={(e) => {
                      e.target.src =
                        "https://placehold.co/600x337/374151/FFFFFF?text=Image+Error";
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index + 1)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index + 1
                  ? "bg-[#9BE13F] w-6"
                  : "bg-[#9BE13F30] hover:bg-[#9BE13F70]"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
