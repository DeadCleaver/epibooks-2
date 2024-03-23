import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "../SingleBook/SingleBook";
import CommentArea2 from "../CommentArea2/CommentArea2";

export default function AllTheBooks({ books }) {

  return (
    <>
      <Container className="mt-1">
        <Row>
        <Col xs={7}>
          <Row sm={1} md={2} lg={3} className="g-2">
            {books.map((book) => (
              <Col key={book.asin}><SingleBook bookdata={book} /></Col>
            ))}
          </Row>
        </Col>
        <Col xs={5}>
            <CommentArea2></CommentArea2>
        </Col>
        </Row>
      </Container>
    </>
  );
}
