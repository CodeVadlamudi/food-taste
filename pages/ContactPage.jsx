import React from "react";
import Header from "../components/Header";
import ContactTitle from "../components/ContactTitle";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";

function ContactPage() {
  return (
    <div>
      <Header />
      <ContactTitle />
      <ContactForm />
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default ContactPage;
