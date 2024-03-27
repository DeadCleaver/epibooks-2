import React, { useContext } from "react";
import {
  Container,
  Nav,
  Navbar,
  InputGroup,
  Form,
  Button,
} from "react-bootstrap";
import { useState } from "react";
import { Theme } from "../../contex/Theme/Theme";
import { IoMdBook } from "react-icons/io";
import "./MyNav.css"

export default function MyNav({ onSearchBook, onClearSearch }) {
  const menuitems = ["Home", "About", "Browse"];
  const [searchField, setSearchField] = useState("");
  const { theme, setTheme } = useContext(Theme);

  return (
    <>
      <Navbar
        bg={theme === "dark" ? "dark" : "warning"}
        data-bs-theme={theme === "dark" ? "dark" : "light"}
        className="shadow sticky-top"
      >
        <Container>
          <Navbar.Brand href="#home">
            <IoMdBook/>
          </Navbar.Brand>
          <Nav>
            {menuitems.map((item, index) => (
              <Nav.Link key={index} href="#">
                {item}
              </Nav.Link>
            ))}
          </Nav>

          <InputGroup>
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              variant="outline-secondary"
              size="sm"
            >
              Change Theme
            </Button>
          </InputGroup>

          <InputGroup>
            <Form.Control
              placeholder="Search for a book title"
              aria-label="Search for a book title"
              aria-describedby="basic-addon2"
              value={searchField}
              onChange={(e) => setSearchField(e.target.value)}
            />
            <Button
              onClick={(e) => onSearchBook(searchField)}
              variant="outline-secondary"
            >
              Search
            </Button>
            <Button
              onClick={(e) => onClearSearch()}
              variant="outline-secondary"
            >
              Clear
            </Button>
          </InputGroup>
        </Container>
      </Navbar>
    </>
  );
}
