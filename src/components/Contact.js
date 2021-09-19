import React from "react";
import Container from "react-bootstrap/Container";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="page-wrapper">
      <Container>
        <ContactForm />
      </Container>
    </div>
  );
}

export default Contact;
