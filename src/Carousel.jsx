import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "../src/img/plmun1.jpg",
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
    <div className={`relative w-full max-w-4xl mx-auto overflow-hidden ${className}`}>
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
        className={`absolute top-1/2 left-1 text-white rounded-full ${
          currentIndex === 0 ? "opacity-0" : ""
        }`}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-3xl"/>
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        disabled={currentIndex === images.length - 1}
        className={`absolute top-1/2 right-1 text-white rounded-full ${
          currentIndex === images.length - 1 ? "opacity-0" : ""
        }`}
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-3xl"/>
      </button>
    </div>
  );
};

// Define prop types
Carousel.propTypes = {
  className: PropTypes.string,
};

export default Carousel;
