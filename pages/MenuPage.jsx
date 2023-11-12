import React from "react";
import Header from "../components/Header";
import MenuHero from "../components/MenuHero";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Brands from "../components/Brands";

function MenuPage() {
  return (
    <div>
      <Header />
      <MenuHero />
      <Cards />
      <Brands />
      <Footer />
    </div>
  );
}

export default MenuPage;
