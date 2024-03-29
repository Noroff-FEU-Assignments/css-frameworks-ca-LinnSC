import React from "react";

import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";

function AccordionContent() {
  return (
    <div className="wrap">
      <Accordion defaultActiveKey="0" className="d-md-none">
        <Accordion.Item eventKey="0">
          <Accordion.Header>First</Accordion.Header>
          <Accordion.Body>
            <p>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.
            </p>
            <Image src="images/tab-images/tab-1.jpg" alt="Old tv" fluid />
            <div>
              <i class="share">share</i>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Second</Accordion.Header>
          <Accordion.Body>
            <p>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.
            </p>
            <Image
              src="images/tab-images/tab-2.jpg"
              alt="Old framed pictures"
              fluid
            />
            <div>
              <i class="share">share</i>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Third</Accordion.Header>
          <Accordion.Body>
            <p>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.
            </p>
            <Image
              src="images/tab-images/tab-3.jpg"
              alt="An old broken window"
              fluid
            />
            <div>
              <i class="share">share</i>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionContent;
