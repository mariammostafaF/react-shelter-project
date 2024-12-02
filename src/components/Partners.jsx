import React, { useRef } from "react";
import "./Partners.css"; // Import the CSS file for styling

const Partners = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      if (current.scrollLeft === 0) {
        current.scrollLeft = current.scrollWidth;
      }
      current.scrollLeft -= current.offsetWidth;
    } else {
      if (current.scrollLeft >= current.scrollWidth - current.offsetWidth) {
        current.scrollLeft = 0;
      }
      current.scrollLeft += current.offsetWidth;
    }
  };

  return (
    <div className="container py-5">
      <div className="row py-5">
        <div className="col-lg-8 m-auto text-center">
          <h3>Our Beloved Partners</h3>
        </div>
      </div>
      <div className="carousel-container">
        <button className="carousel-button left" onClick={() => scroll("left")}>
          &#9664;
        </button>
        <div className="carousel" ref={scrollRef}>
          <div className="logo">
            <img src="./Pics/logo.jpg" alt="PetSmart Charities Logo" />
            <p>PetSmart Charities: A leading funder of animal welfare.</p>
          </div>
          <div className="logo">
            <img src="./Pics/logo2.png" alt="Humane Society Logo" />
            <p>Humane Society: A national organization focused on animal welfare.</p>
          </div>
          <div className="logo">
            <img src="./Pics/logo3.png" alt="Blue Buffalo Logo" />
            <p>Blue Buffalo: A premium pet food brand.</p>
          </div>
          <div className="logo">
            <img src="./Pics/logo4.png" alt="VCA Animal Hospitals Logo" />
            <p>VCA Animal Hospitals: A network of animal hospitals across the country.</p>
          </div>
          <div className="logo">
            <img src="./Pics/logo5.png" alt="Local Veterinary Clinics Logo" />
            <p>Local Veterinary Clinics: Partnering with local vets can provide essential medical support.</p>
          </div>
        </div>
        <button className="carousel-button right" onClick={() => scroll("right")}>
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default Partners;
