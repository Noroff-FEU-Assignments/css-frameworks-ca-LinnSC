import React from "react";
import Pagination from "react-bootstrap/Pagination";

function PaginationContent() {
  return (
    <div className="wrap">
      <Pagination>
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
      </Pagination>
    </div>
  );
}

export default PaginationContent;
