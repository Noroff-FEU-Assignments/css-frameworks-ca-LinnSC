import React from "react";

import ListGroup from "react-bootstrap/ListGroup";

function ContactInfo() {
  return (
    <>
      <ListGroup>
        <ListGroup.Item>
          <i class="fas fa-envelope"></i>
          <p>hello@yay.com</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <i class="fas fa-phone"></i> <p>123 456 7890</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <i class="fas fa-map-marker-alt"></i>
          <div>
            <p>123 Some Street</p>
            <p>Somewhere</p>
            <p>Some City</p>
            <p>10000</p>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}

export default ContactInfo;
