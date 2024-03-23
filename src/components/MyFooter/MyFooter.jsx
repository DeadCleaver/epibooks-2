import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./MyFooter.css"

export default function MyFooter() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="mt-5">
        <Container className="d-flex justify-content-center align-items-center">
          <p>Epibooks by Andrea Montefiori for EPICODE</p>
        </Container>
      </Navbar>
    </>
  );
}
