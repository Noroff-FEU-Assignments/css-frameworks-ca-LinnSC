import React from "react";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function Contact() {
  return (
    <div className="page-wrapper">
      <Container>
        <Row>
          <Col sm={{ span: 12, order: 2 }} md={{ span: 12, order: 1 }}>
            <div className="wrap">
              <h1>Submit your details</h1>
            </div>
          </Col>
          <Col sm={{ span: 12, order: 1 }} md={{ span: 6, order: 3 }}>
            <ContactInfo />
          </Col>
          <Col sm={{ span: 12, order: 3 }} md={{ span: 6, order: 2 }}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
