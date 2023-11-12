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
      <div className="bg-[url('./images/map.png')] bg-cover bg-center">
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default BookPage;
