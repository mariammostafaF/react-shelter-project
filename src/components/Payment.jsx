import React from "react";

const Payment = () => {
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
              <select className="form-control">
                <option value="" disabled selected>Select Reason for Payment</option>
                <option value="adoption">Adoption</option>
                <option value="fostering">Fostering</option>
                <option value="sponsor">Sponsor</option>
              </select>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-6 mb-3">
              <select className="form-control">
                <option value="" disabled selected>Select Payment Method</option>
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
