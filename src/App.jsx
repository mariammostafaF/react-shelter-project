import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SuccessfulAdoption from "./components/SuccessfulAdoption";
import About from "./components/About";
import Partners from "./components/Partners";
import Contact from "./components/ContactUs";
import Sponser from "./components/Sponser";
import Payment from "./components/Payment";



import "./stylesheet.css";
import WebFont from "webfontloader";
import AdoptFos from "./components/AdoptFos";

WebFont.load({
  google: {
    families: [
      "Patua One",
      "Sour Gummy",
      "Barlow Semi Condensed",
      "Gloria Hallelujah",
    ],
  },
});

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Partners/>
      <SuccessfulAdoption/>
      <Services/>
      <AdoptFos/>
      <Sponser/>
      <Payment/>
      <Contact/>
    </>
  );
};

export default App;