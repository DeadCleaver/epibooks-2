import React from "react";
import { Container, Card } from "react-bootstrap";
import "./NotFound.css"

export default function NotFound() {
  return (
    <div className="main-container">
    <Container className="d-flex justify-content-center">
      <Card bg="danger" className="m-5">
        <h1 className="p-5">PAGE NOT FOUND</h1>
      </Card>
    </Container>
    </div>

  );
}
