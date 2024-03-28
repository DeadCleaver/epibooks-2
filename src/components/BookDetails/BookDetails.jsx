import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CommentList from "../CommentArea/CommentList/CommentList";
import { useState, useEffect } from "react";
import CommentArea from "../CommentArea/CommentArea";
import MyNav from "../MyNav/MyNav";
import MyFooter from "../MyFooter/MyFooter";

export default function BookDetails({ books }) {
  // Ottenere l'ID del libro dai parametri dell'URL
  const { asin } = useParams();

  // Trova il libro corrente nella lista di libri in base all'ID
  const currentBook = books.find((book) => book.asin === asin);

  // Destrutturo l'oggetto che identifico
  const { title, img, price } = currentBook;

  return (
    <>
    <MyNav onHome={false}/>
    <Container>
      <Row className="mt-5">
        <Col xs={6}>
          <Card>
            <Card.Body>
              <Card.Title><h2>{title}</h2></Card.Title>
              <Card.Text><h6><strong>Price: </strong>{price}</h6></Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src={img} />
          </Card>
        </Col>
        <Col xs={6}>
          <CommentArea latestRelease={asin}/>
        </Col>
      </Row>
    </Container>
    <MyFooter/>
    </>
  );
}
