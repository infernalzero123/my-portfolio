import { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "../src/img/plmun.jpg",
    "../src/img/annex.jpg",
    "../src/img/main.jpeg",
  ];

  const goToNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Carousel Image ${index}`}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPrev}
        disabled={currentIndex === 0}
        className={`absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full ${
          currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        &#8249;
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        disabled={currentIndex === images.length - 1}
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full ${
          currentIndex === images.length - 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
