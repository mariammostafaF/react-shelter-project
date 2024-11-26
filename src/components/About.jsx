import React from "react";

const About = () => {
  return (
    <section className="aboutFirst">
      <div className="container py-5">
        <h2 className="text-center">About Us</h2>
        
        <div className="row align-items-center my-5">
          <div className="col-md-6 order-md-1 order-2">
            <p><strong>Our Mission:</strong> Our mission is to rescue, rehabilitate, and rehome animals in need, while promoting the humane treatment of all animals.</p>
          </div>
          <div className="col-md-6 order-md-2 order-1">
            <img src="about.jpg" alt="Mission Image" className="img-fluid mb-4 uniform-size" />
          </div>
        </div>
    
        <div className="row align-items-center my-5">
          <div className="col-md-6 order-md-2 order-2">
            <p>Founded in 2018, FurEver Home was established to provide a safe haven for abandoned and neglected animals. Over the years, we have rescued thousands of animals and helped them find loving homes.</p>
          </div>
          <div className="col-md-6 order-md-1 order-1">
            <img src="dog.jpg" alt="Our Story Image" className="img-fluid mb-4 uniform-size" />
          </div>
        </div>
        
        <div className="row align-items-center my-5">
          <div className="col-md-6 order-md-1 order-2">
            <p>Our dedicated team of volunteers and staff work tirelessly to ensure the well-being of every animal that comes through our doors. From our founders to our newest volunteers, we all share a passion for animal welfare.</p>
          </div>
          <div className="col-md-6 order-md-2 order-1">
            <img src="team.jpg" alt="Team Image" className="img-fluid mb-4 uniform-size" />
          </div>
        </div>
        
        <div className="row align-items-center my-5">
          <div className="col-md-6 order-md-2 order-2">
            <ul>
              <li><strong>Adoption Services:</strong> Learn about our adoption process and meet our adorable adoptable pets.</li>
              <li><strong>Foster Programs:</strong> Become a foster parent and provide temporary care for animals in need.</li>
              <li><strong>Volunteer Opportunities:</strong> Join our team and make a difference in the lives of animals.</li>
              <li><strong>Educational Programs:</strong> Participate in workshops and events to learn more about animal care and advocacy.</li>
            </ul>
          </div>
          <div className="col-md-6 order-md-1 order-1">
            <img src="logoo.jpg" alt="Services Image" className="img-fluid mb-4 uniform-size" />
          </div>
        </div>
    
        <div className="row align-items-center my-5">
          <div className="col-md-6 order-md-1 order-2">
            <p>Thanks to the support of our community, we have successfully rescued and rehomed over 1,000 animals. Read some of our <a href="#success-stories">success stories</a> to see the difference we’re making.</p>
          </div>
          <div className="col-md-6 order-md-2 order-1">
            <img src="tur.jpg" alt="Impact Image" className="img-fluid mb-4 uniform-size" />
          </div>
        </div>
    
      </div>
    </section>
  );
};

export default About;
