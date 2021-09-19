import React from "react";
import Container from "react-bootstrap/Container";
import PaginationContent from "./PaginationContent";

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
      <Container></Container>
      <Container>
        <PaginationContent />
      </Container>
    </div>
  );
}

export default News;
