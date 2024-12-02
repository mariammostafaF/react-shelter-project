import React, { useState } from "react";

const SuccessfulAdoption = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="sucssadoption">
      <div className="container">
        <div className="row py-5 m-auto text-center">
          <div className="col-lg-5 m-auto text-center">
            <h2>Successful Adoptions</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="card border-0 bg-light">
              <div className="cardbody">
                <img src="./Pics/adop1.jpg" className="img-fluid" alt="Max" />
              </div>
            </div>
            <h6>Max: Adopted by Sarah, a compassionate nurse who loves long walks in the park.</h6>
          </div>
          <div className="col-lg-3">
            <div className="card border-0 bg-light">
              <div className="cardbody">
                <img src="./Pics/adop4.jpg" className="img-fluid" alt="Luna" />
              </div>
            </div>
            <h6>Luna: Fostered by James, a freelance graphic designer who enjoys painting.</h6>
          </div>
          <div className="col-lg-3">
            <div className="card border-0 bg-light">
              <div className="cardbody">
                <img src="./Pics/adop2.jpg" className="img-fluid" alt="Buddy" />
              </div>
            </div>
            <h6>Buddy: Adopted by Emily, a high school teacher known for her love of animals.</h6>
          </div>
          <div className="col-lg-3">
            <div className="card border-0 bg-light">
              <div className="cardbody">
                <img src="./Pics/adop3.jpg" className="img-fluid" alt="Whiskers" />
              </div>
            </div>
            <h6>Whiskers: Fostered by David, a retired firefighter who volunteers at the shelter.</h6>
          </div>
        </div>
        {showMore && (
          <div className="row">
            <div className="col-lg-3">
              <div className="card border-0 bg-light">
                <div className="cardbody">
                  <img src="./Pics/adop1.jpg" className="img-fluid" alt="Bella" />
                </div>
              </div>
              <h6>Bella: Adopted by Tom, a musician who loves to compose melodies.</h6>
            </div>
            <div className="col-lg-3">
              <div className="card border-0 bg-light">
                <div className="cardbody">
                  <img src="./Pics/adop2.jpg" className="img-fluid" alt="Charlie" />
                </div>
              </div>
              <h6>Charlie: Adopted by Rachel, a photographer who enjoys nature walks.</h6>
            </div>
            <div className="col-lg-3">
              <div className="card border-0 bg-light">
                <div className="cardbody">
                  <img src="./Pics/adop3.jpg" className="img-fluid" alt="Daisy" />
                </div>
              </div>
              <h6>Daisy: Fostered by Steve, a chef with a passion for culinary arts.</h6>
            </div>
            <div className="col-lg-3">
              <div className="card border-0 bg-light">
                <div className="cardbody">
                  <img src="./Pics/adop4.jpg" className="img-fluid" alt="Rocky" />
                </div>
              </div>
              <h6>Rocky: Adopted by Linda, a yoga instructor who practices mindfulness.</h6>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-lg-6 text-center m-auto">
            <button className="btn2" onClick={handleToggle}>
              {showMore ? "Show Less" : "Click Here For More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessfulAdoption;
