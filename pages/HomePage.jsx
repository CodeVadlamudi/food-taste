import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Menu from "../components/Menu";
import About from "../components/About";
import Service from "../components/Service";
import Content from "../components/Content";
import Testimonial from "../components/Testimonial";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Menu />
      <About />
      <Service />
      <Content />
      <Testimonial />
      <Blog />
      <Footer />
    </div>
  );
}

export default HomePage;
