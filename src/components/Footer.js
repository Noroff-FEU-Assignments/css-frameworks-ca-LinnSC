import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer>
      <Container>
        <Row className="d-flex">
          <Col xs={12} md={4} className="footer-item">
            <i className="fab fa-vimeo-v"></i>
            <i className="fab fa-youtube"></i>
          </Col>
          <Col className="footer-item" xs={6} md={4}>
            <p>hello@yay.com</p>
          </Col>
          <Col className="footer-item" xs={6} md={4}>
            <p>Copyright {new Date().getFullYear()}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
