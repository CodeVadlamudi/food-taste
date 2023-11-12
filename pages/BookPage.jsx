import React from "react";
import Header from "../components/Header";
import BookHero from "../components/BookHero";
import Form from "../components/Form";
import Footer from "../components/Footer";

function BookPage() {
  return (
    <div>
      <Header />
      <BookHero />
      <div
        style={{ backgroundImage: "./images/map.png", backgroundSize: "cover" }}
        className="bg-center">
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default BookPage;
