import React, { useEffect, useRef, useState } from "react";

const Gallery = ({ logement }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const images = logement.pictures;

  function handlePrevClick() {
    const newIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  }

  function handleNextClick() {
    const newIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  }

  useEffect(() => {
    // Reset the interval when the component mounts or the active index changes
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      // Only update the active index if the user is not manually navigating
      if (document.hidden) return;
      const newIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(newIndex);
    }, 3000);

    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [activeIndex]);

  return (
    <div className="gallery">
      <div className="gallery-container">
        {images.map((image, index) => (
          <img
            key={index}
            className={
              index === activeIndex ? "img-logement active" : "img-logement"
            }
            src={image}
            alt={logement.title}
          />
        ))}
        <span className="indexImg">
          {activeIndex + 1}/{images.length}
        </span>
        <div className="next-btn" onClick={handleNextClick}>
          <svg
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.959961 72.3458L8.03996 79.4258L47.64 39.8258L8.03996 0.22583L0.959961 7.30583L33.48 39.8258L0.959961 72.3458Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="prev-btn" onClick={handlePrevClick}>
          <svg
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.0399 7.78312L39.9199 0.703125L0.359863 40.3031L39.9599 79.9031L47.0399 72.8231L14.5199 40.3031L47.0399 7.78312Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
