import React from "react";
import ContactTitle from "../components/ContactTitle";
import ContactForm from "../components/ContactForm";
import Mapping from "../components/Mapping";

function Contact() {
  return (
    <div className="page-contact">
      <div className="page-contact-title ml-14 mb-10">
        <ContactTitle />
      </div>
      <div className="page-contact-form-map flex flex-row justify-evenly items-center">
        <ContactForm />
        <Mapping />
      </div>
    </div>
  );
}

export default Contact;
