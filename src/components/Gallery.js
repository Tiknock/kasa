import React, { useEffect } from "react";

const Gallery = ({ logement }) => {
  useEffect(() => {
    let imgLogement = document.getElementsByClassName("img-logement");
    let photoActive = 0;
    let nbrImg = imgLogement.length;
    let previous = document.querySelector(".prev-btn");
    let next = document.querySelector(".next-btn");

    function RemoveActiveImages() {
      for (let i = 0; i < nbrImg; i++) {
        imgLogement[0].classList.add("active");
        imgLogement[i].classList.remove("active");
      }
    }

    next.addEventListener("click", function () {
      console.log(photoActive, "next");
      photoActive++;
      if (photoActive >= nbrImg) {
        photoActive = 0;
      }
      RemoveActiveImages();
      imgLogement[photoActive].classList.add("active");
    });

    previous.addEventListener("click", function () {
      console.log(photoActive, "prev");
      photoActive--;
      if (photoActive < 0) {
        photoActive = nbrImg - 1;
      }
      RemoveActiveImages();
      imgLogement[photoActive].classList.add("active");
    });

    RemoveActiveImages();
    // Interval pour défilement de photos
    setInterval(function () {
      photoActive++;
      if (photoActive >= nbrImg) {
        photoActive = 0;
      }
      RemoveActiveImages();
      imgLogement[photoActive].classList.add("active");
    }, 3000);
  }, [logement]);
  return (
    <div className="gallery">
      <div className="gallery-container">
        {logement.pictures.map((pic, index) => {
          return (
            <img
              className="img-logement"
              src={pic}
              key={index}
              alt={logement.title}
            />
          );
        })}
        <div className="next-btn">
          <svg
            width="48"
            height="80"
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
        <div className="prev-btn">
          <svg
            width="48"
            height="80"
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
