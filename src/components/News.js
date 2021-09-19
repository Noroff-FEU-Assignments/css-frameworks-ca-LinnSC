import React from "react";
import Container from "react-bootstrap/Container";
import PaginationContent from "./PaginationContent";

import CardsContent from "./CardsContent";

function News() {
  return (
    <div className="page-wrapper">
      <Container>
        <div className="wrap">
          <h1>News</h1>
        </div>
      </Container>
      <Container>
        <PaginationContent />
      </Container>
      <Container>
        <CardsContent />
      </Container>
      <Container>
        <PaginationContent />
      </Container>
    </div>
  );
}

export default News;
