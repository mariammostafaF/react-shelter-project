import React, { useState } from "react";

const Payment = () => {
  const [reason, setReason] = useState("");
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [amount, setAmount] = useState("");

  const handleReasonChange = (event) => {
    setReason(event.target.value);
    setSelectedAnimal("");
    setAmount("");
  };

  const handleAnimalChange = (event) => {
    const animalId = event.target.value;
    setSelectedAnimal(animalId);

    const animalPrices = {
      "001": 100, // Buddy
      "002": 150, // Milo
      "003": 200, // Bella
      "004": 250, // Max
      "005": 120, // Lucy
      "006": 130, // Charlie
      "007": 140, // Daisy
      "008": 160, // Rocky
      "009": 170, // Luna
      "010": 180, // Cooper
      "011": 190, // Zoey
      "012": 210, // Finn
      "013": 220, // Sadie
      "014": 230, // Ollie
      "015": 240, // Molly
      "016": 260, // Toby
    };

    setAmount(animalPrices[animalId] || "");
  };

  return (
    <>
      <section className="payment">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8 m-auto text-center">
              <h2>Payment Information</h2>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-6 mb-3">
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="col-lg-6 mb-3">
              <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="col-lg-6 mb-3">
              <input type="tel" className="form-control" placeholder="Phone Number" />
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-6 mb-3">
              <select className="form-control" value={reason} onChange={handleReasonChange}>
                <option value="" disabled>Select Reason for Payment</option>
                <option value="adoption">Adoption</option>
                <option value="fostering">Fostering</option>
                <option value="sponsor">Sponsor</option>
              </select>
            </div>
          </div>

          {reason === "sponsor" && (
            <div className="row">
              <div className="col-lg-6 mb-3">
                <input type="text" className="form-control" placeholder="Amount" />
              </div>
            </div>
          )}

          {(reason === "adoption" || reason === "fostering") && (
            <div className="row">
              <div className="col-lg-6 mb-3">
                <select className="form-control" value={selectedAnimal} onChange={handleAnimalChange}>
                  <option value="" disabled>Select Animal ID</option>
                  <option value="001">Buddy (ID: 001)</option>
                  <option value="002">Milo (ID: 002)</option>
                  <option value="003">Bella (ID: 003)</option>
                  <option value="004">Max (ID: 004)</option>
                  <option value="005">Lucy (ID: 005)</option>
                  <option value="006">Charlie (ID: 006)</option>
                  <option value="007">Daisy (ID: 007)</option>
                  <option value="008">Rocky (ID: 008)</option>
                  <option value="009">Luna (ID: 009)</option>
                  <option value="010">Cooper (ID: 010)</option>
                  <option value="011">Zoey (ID: 011)</option>
                  <option value="012">Finn (ID: 012)</option>
                  <option value="013">Sadie (ID: 013)</option>
                  <option value="014">Ollie (ID: 014)</option>
                  <option value="015">Molly (ID: 015)</option>
                  <option value="016">Toby (ID: 016)</option>
                </select>
              </div>
              {amount && (
                <div className="col-lg-6 mb-3">
                  <input type="text" className="form-control" value={`$${amount}`} readOnly />
                </div>
              )}
            </div>
          )}
          
          {reason && (
            <>
              <div className="row">
                <div className="col-lg-6 mb-3">
                  <select className="form-control">
                    <option value="" disabled>Select Payment Method</option>
                    <option value="credit-card">Credit Card</option>
                    <option value="paypal">PayPal</option>
                  </select>
                </div>
              </div>
              
              <div className="row">
                <div className="col-lg-6 mb-3">
                  <input type="text" className="form-control" placeholder="Credit Card Number" />
                </div>
                <div className="col-lg-3 mb-3">
                  <input type="text" className="form-control" placeholder="Expiry Date (MM/YY)" />
                </div>
                <div className="col-lg-3 mb-3">
                  <input type="text" className="form-control" placeholder="CVV" />
                </div>
              </div>
            </>
          )}
          
          <div className="row">
            <div className="col-lg-12 text-center">
              <button className="btn btn-primary btn0">Pay Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
