import React from "react";

import Carousel from "react-bootstrap/Carousel";

function CarouselContent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/carousel-images/carousel-1.jpg"
          alt="Shelf with old TV's"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/carousel-images/carousel-2.jpg"
          alt="An old camera"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/carousel-images/carousel-3.jpg"
          alt="Broken TV with no screen"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselContent;
