import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../App.css";

const carouselData = [
  { id: 1, title: "Celestial Peaks", description: "Breathtaking icy mountains under northern lights.", imageUrl: "https://placehold.co/600x400/3B82F6/FFFFFF?text=Scene+1", color: "ring-blue-300" },
  { id: 2, title: "Urban Future", description: "Neon-lit cityscapes and modern architecture.", imageUrl: "https://placehold.co/600x400/F97316/000000?text=Scene+2", color: "ring-orange-300" },
  { id: 3, title: "Mystic Forest", description: "Sunlight filtering through moss-covered trees.", imageUrl: "https://placehold.co/600x400/10B981/FFFFFF?text=Scene+3", color: "ring-green-300" },
  { id: 4, title: "Desert Solitude", description: "Vast, silent dunes under a scorching midday sun.", imageUrl: "https://placehold.co/600x400/EF4444/FFFFFF?text=Scene+4", color: "ring-red-300" },
  { id: 5, title: "Tropical Reef", description: "Vibrant marine life in crystal clear waters.", imageUrl: "https://placehold.co/600x400/06B6D4/FFFFFF?text=Scene+5", color: "ring-cyan-300" },
  { id: 6, title: "Volcanic Caldera", description: "Steam vents and rugged, dark lava formations.", imageUrl: "https://placehold.co/600x400/6D28D9/FFFFFF?text=Scene+6", color: "ring-violet-300" },
  { id: 7, title: "Ancient Ruins", description: "Forgotten stone structures reclaimed by nature.", imageUrl: "https://placehold.co/600x400/CA8A04/FFFFFF?text=Scene+7", color: "ring-yellow-300" },
  { id: 8, title: "Cloudscape Voyage", description: "Flying high above the blanket of white clouds.", imageUrl: "https://placehold.co/600x400/EC4899/FFFFFF?text=Scene+8", color: "ring-pink-300" },
  { id: 9, title: "Winter Cabin", description: "Cozy retreat surrounded by snow and pines.", imageUrl: "https://placehold.co/600x400/4B5563/FFFFFF?text=Scene+9", color: "ring-gray-300" },
  { id: 10, title: "Harbor Sunset", description: "Boats resting in the marina as the sun goes down.", imageUrl: "https://placehold.co/600x400/8B5CF6/FFFFFF?text=Scene+10", color: "ring-purple-300" },
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
    <section className="mt-20 mb-24 max-w-6xl mx-auto px-6" id="about_section">
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
            Solutions You Can Trust
          </h2>
          <p className="fontInter text-base md:text-xl text-white mb-6 font-medium">
            <span className="text-[#9BE13F]">
              Discover how we can elevate your brand
            </span>{" "}
            and drive measurable results. We specialize in crafting unique brand
            experiences that resonate with your audience.
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
                  Read More
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
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index + 1
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
