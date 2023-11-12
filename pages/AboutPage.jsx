import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Healthy from "../components/Healthy";
import Authentic from "../components/Authentic";
import AboutFeature from "../components/AboutFeature";
import Valueable from "../components/Valueable";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <div>
      <Header />
      <Healthy />
      <Authentic />
      <AboutFeature />
      <Valueable />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default AboutPage;
