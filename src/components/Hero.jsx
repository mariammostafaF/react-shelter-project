import React, { useState, useEffect } from "react";
import "./Hero.css"; // Import the CSS file for styling

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "./Pics/dog.jpg",
    "./Pics/dog2.jpg",
    "./Pics/adop1.jpg",
    "./Pics/adop2.jpg",
    "./Pics/adop3.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="main" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-lg-7 pt-5 text-center">
              <h1>Every tail has a tale—write yours with adoption.</h1>
              <button className="btn1 mt-3">Adopt Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
