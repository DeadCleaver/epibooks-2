import React, { useContext } from "react";
import {
  Container,
  Nav,
  Navbar,
  InputGroup,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import { useState } from "react";
import { Theme } from "../../contex/Theme/Theme";
import { IoMdBook, IoMdCloseCircleOutline, IoIosSearch } from "react-icons/io";
import "./MyNav.css";
import { useNavigate } from "react-router-dom";

export default function MyNav({ onSearchBook, onClearSearch, onHome }) {
  const menuitems = ["Home", "About", "Browse"];
  const [searchField, setSearchField] = useState("");
  const { theme, setTheme } = useContext(Theme);

  const navigate = useNavigate();

  return (
    <>
      <Navbar
        expand="lg"
        bg={theme === "dark" ? "dark" : "warning"}
        data-bs-theme={theme === "dark" ? "dark" : "light"}
        className="shadow sticky-top"
      >
        <Container>
          <Navbar.Brand href="#home" onClick={() => navigate("/")}>
            <div className="d-flex">
              <IoMdBook />
              <h6 className="ms-2 mb-0">EPIBOOKS</h6>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-5 my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {menuitems.map((item, index) => (
                <Nav.Link key={index} href="#">
                  {item}
                </Nav.Link>
              ))}

              {/* <NavDropdown title="Options" id="navbarScrollingDropdown">
                <NavDropdown.Item
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  Change Theme
                </NavDropdown.Item>
              </NavDropdown> */}

              {/* VISUALIZZA solo un bottone quando la navbar è collapsed, o un menu con il cambio tema se è expanded */}
              <Nav.Link
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="d-lg-none"
              >
                Change Theme
              </Nav.Link>

              <NavDropdown
                title="Options"
                id="navbarScrollingDropdown"
                className="d-none d-lg-block"
              >
                <NavDropdown.Item
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  Change Theme
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/*  <Form className="d-flex"> */}

            {onHome && (
              <InputGroup>
              <Form.Label className="d-lg-none mb-0 d-flex justify-conent-center">
                <p>search area</p></Form.Label>
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
                  <IoIosSearch />
                </Button>
                <Button
                  onClick={(e) => onClearSearch()}
                  variant="outline-secondary"
                >
                  <IoMdCloseCircleOutline />
                </Button>
              </InputGroup>
              </InputGroup>
            )}
            {/*  </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* vecchia */}

      {/*  <Navbar
        bg={theme === "dark" ? "dark" : "warning"}
        data-bs-theme={theme === "dark" ? "dark" : "light"}
        className="shadow sticky-top"
      >
        <Container>
          <Navbar.Brand href="#home">
            <IoMdBook /> <div>EpiBooks</div>
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
      </Navbar> */}
    </>
  );
}
