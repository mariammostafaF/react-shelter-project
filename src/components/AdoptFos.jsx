import React, { useState } from "react";

const AdoptFos = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <section className="adoption">
        <div className="container">
          <div className="row py-5 m-auto text-center">
            <div className="col-lg-8 m-auto text-center">
              <h3>Animals Available For Adoption/Foster</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3">
              <div className="card border-0 bg-light">
                <div className="cardbody">
                  <img src="./Pics/foradop1.jpg" className="img-fluid" alt="Buddy" />
                </div>
              </div>
              <h13>Buddy (ID: 001)</h13>
            </div>
            <div className="col-lg-3">
              <div className="card border-0 bg-light">
                <div className="cardbody">
                  <img src="./Pics/foradop10.jpg" className="img-fluid" alt="Milo" />
                </div>
              </div>
              <h13>Milo (ID: 002)</h13>
            </div>
            <div className="col-lg-3">
              <div className="card border-0 bg-light">
                <div className="cardbody">
                  <img src="./Pics/foradop11.jpg" className="img-fluid" alt="Bella" />
                </div>
              </div>
              <h13>Bella (ID: 003)</h13>
            </div>
            <div className="col-lg-3">
              <div className="card border-0 bg-light">
                <div className="cardbody">
                  <img src="./Pics/foradop12.jpg" className="img-fluid" alt="Max" />
                </div>
              </div>
              <h13>Max (ID: 004)</h13>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-3">
              <div className="card border-0 bg-light">
                <div className="cardbody">
                  <img src="./Pics/foradop2.jpg" className="img-fluid" alt="Lucy" />
                </div>
              </div>
              <h13>Lucy (ID: 005)</h13>
            </div>
            <div className="col-lg-3">
              <div className="card border-0 bg-light">
                <div className="cardbody">
                  <img src="./Pics/foradop3.jpg" className="img-fluid" alt="Charlie" />
                </div>
              </div>
              <h13>Charlie (ID: 006)</h13>
            </div>
            <div className="col-lg-3">
              <div className="card border-0 bg-light">
                <div className="cardbody">
                  <img src="./Pics/foradop4.jpg" className="img-fluid" alt="Daisy" />
                </div>
              </div>
              <h13>Daisy (ID: 007)</h13>
            </div>
            <div className="col-lg-3">
              <div className="card border-0 bg-light">
                <div className="cardbody">
                  <img src="./Pics/foradop5.jpg" className="img-fluid" alt="Rocky" />
                </div>
              </div>
              <h13>Rocky (ID: 008)</h13>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-3">
              <div className="card border-0 bg-light">
                <div className="cardbody">
                  <img src="./Pics/foradop6.jpg" className="img-fluid" alt="Luna" />
                </div>
              </div>
              <h13>Luna (ID: 009)</h13>
            </div>
            <div className="col-lg-3">
              <div className="card border-0 bg-light">
                <div className="cardbody">
                  <img src="./Pics/foradop7.jpg" className="img-fluid" alt="Cooper" />
                </div>
              </div>
              <h13>Cooper (ID: 010)</h13>
            </div>
            <div className="col-lg-3">
              <div className="card border-0 bg-light">
                <div className="cardbody">
                  <img src="./Pics/foradop8.jpg" className="img-fluid" alt="Zoey" />
                </div>
              </div>
              <h13>Zoey (ID: 011)</h13>
            </div>
            <div className="col-lg-3">
              <div className="card border-0 bg-light">
                <div className="cardbody">
                  <img src="./Pics/foradop9.jpg" className="img-fluid" alt="Finn" />
                </div>
              </div>
              <h13>Finn (ID: 012)</h13>
            </div>
          </div>

          {showMore && (
            <div className="row mt-4">
              <div className="col-lg-3">
                <div className="card border-0 bg-light">
                  <div className="cardbody">
                    <img src="./Pics/foradop1.jpg" className="img-fluid" alt="Sadie" />
                  </div>
                </div>
                <h13>Sadie (ID: 013)</h13>
              </div>
              <div className="col-lg-3">
                <div className="card border-0 bg-light">
                  <div className="cardbody">
                    <img src="./Pics/foradop2.jpg" className="img-fluid" alt="Ollie" />
                  </div>
                </div>
                <h13>Ollie (ID: 014)</h13>
              </div>
              <div className="col-lg-3">
                <div className="card border-0 bg-light">
                  <div className="cardbody">
                    <img src="./Pics/foradop3.jpg" className="img-fluid" alt="Molly" />
                  </div>
                </div>
                <h13>Molly (ID: 015)</h13>
              </div>
              <div className="col-lg-3">
                <div className="card border-0 bg-light">
                  <div className="cardbody">
                    <img src="./Pics/foradop4.jpg" className="img-fluid" alt="Toby" />
                  </div>
                </div>
                <h13>Toby (ID: 016)</h13>
              </div>
            </div>
          )}

          <div className="row mt-4">
            <div className="col-lg-12 text-center">
              <button className="btn btn-primary btn2" onClick={handleToggle}>
                {showMore ? "Show Less" : "More"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdoptFos;
