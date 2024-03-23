import React from "react";
import { Container, Card } from "react-bootstrap";

export default function Wellcome() {
  return (
    <>
      <Container className="mt-3">
        <Card border="warning">
          <Card.Body>
            <Card.Title>Wellcome in Epibooks</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </Container>
    </>
  );
}
