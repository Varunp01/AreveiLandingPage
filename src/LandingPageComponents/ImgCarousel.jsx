import React, { useState, useEffect } from 'react';

const ImgCarousel = () => {
  // Array of image URLs to display in the carousel.
  // Using placeholder images for demonstration purposes.
  const images = [
    '/1.png',
    '/2.png',
    '/3.png',
    '/4.png',
    '/5.png',
    '/6.png',
    '/7.png',
    '/8.png',
    '/9.png',
    '/10.png',
  ];

// State to keep track of the current image index.
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect hook to handle the automatic image transition.
  useEffect(() => {
    // Set an interval to change the image every 3 seconds (3000 milliseconds).
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        // Move to the next image, or loop back to the first one if at the end.
        (prevIndex + 1) % images.length
      );
    }, 1000);

    // Clean up the interval when the component unmounts to prevent memory leaks.
    return () => clearInterval(interval);
  }, [images.length]);

  // Calculate the indices for the previous and next images,
  // using the modulo operator to handle looping at the ends.
  const prevprevIndex = (currentImageIndex - 2 + images.length) % images.length;
  const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
  const nextIndex = (currentImageIndex + 1) % images.length;
  const nextnextIndex = (currentImageIndex + 2) % images.length;
  

  return (
    <div className=" flex flex-col items-center justify-center font-sans">
      <div className="w-full max-w-6xl mx-auto overflow-hidden ">
        <div className="grid grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] gap-4 items-center transition-opacity duration-500 h-auto md:h-[50vh] ">

          {/* Previous image - small size on the left */}
          <div className="md:h-1/2 relative overflow-hidden rounded-lg">
            <img src={images[prevprevIndex]} alt={`Previous Carousel Image`} className="w-full h-full object-cover opacity-50" />
          </div>

          {/* Previous image - small size on the left */}
          <div className="md:h-3/4 relative overflow-hidden rounded-lg">
            <img src={images[prevIndex]} alt={`Previous Carousel Image`} className="w-full h-full object-cover opacity-50" />
          </div>

          {/* Current image - large size in the center */}
          <div className="md:h-full relative overflow-hidden rounded-lg">
            <img src={images[currentImageIndex]} alt={`Current Carousel Image`} className="w-full h-full object-cover transition-opacity duration-500" />
          </div>

          {/* Next image - small size on the right */}
          <div className="md:h-3/4 relative overflow-hidden rounded-lg">
            <img src={images[nextIndex]} alt={`Next Carousel Image`} className="w-full h-full object-cover opacity-50" />
          </div>

          {/* Next image - small size on the right */}
          <div className="md:h-1/2 relative overflow-hidden rounded-lg">
            <img src={images[nextnextIndex]} alt={`Next Carousel Image`} className="w-full h-full object-cover opacity-50" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ImgCarousel;