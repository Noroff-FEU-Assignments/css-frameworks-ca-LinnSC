import React from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function TabContent() {
  return (
    <div className="d-none d-md-block">
      <Tabs
        defaultActiveKey="first"
        id="uncontrolled-tab-example"
        className="mb-3 "
      >
        <Tab eventKey="first" title="First">
          <Row>
            <Col sm={3}>
              <Image src="images/tab-images/tab-1.jpg" alt="Old tv" fluid />
            </Col>
            <Col className="text-column" sm={9}>
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.
              </p>
              <div>
                <i class="share">Share</i>
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
              </div>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="second" title="Second">
          <Row>
            <Col sm={3}>
              <Image src="images/tab-images/tab-2.jpg" alt="Old tv" fluid />
            </Col>
            <Col className="text-column" sm={9}>
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.
              </p>
              <div>
                <i class="share">share</i>
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
              </div>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="third" title="Third">
          <Row>
            <Col sm={3}>
              <Image src="images/tab-images/tab-3.jpg" alt="Old tv" fluid />
            </Col>
            <Col className="text-column" sm={9}>
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.
              </p>
              <div>
                <i class="share">share</i>
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
              </div>
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </div>
  );
}

export default TabContent;
