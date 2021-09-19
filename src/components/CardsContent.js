import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CardsContent() {
  return (
    <div className="wrap ">
      <Row className="cards-wrapper">
        <Col md={12} lg={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="images/news-images/news-1.jpg" />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="images/news-images/news-2.jpg" />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="images/news-images/news-3.jpg" />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="images/news-images/news-4.jpg" />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="images/news-images/news-5.jpg" />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="images/news-images/news-6.jpg" />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="images/news-images/news-7.jpg" />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="images/news-images/news-8.jpg" />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CardsContent;
