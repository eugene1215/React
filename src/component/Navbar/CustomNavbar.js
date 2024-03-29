import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Home from "../../pages/Home";
import AboutMe from "../../pages/AboutMe";
import Foodie from "../../pages/Foodie";

import style from "./CustomNavbar.scss";

export default function CustomNavbar(props) {
  return (
    <Navbar
      expand="lg"
      className={`"${style.nav}"
    ${"bg-body-tertiary"}
  `}
      data-bs-theme="dark"
    >
      <Container>
        {/* <Container> */}
        <Navbar.Brand href="home">Eugene Ho</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/foodie" element={<Foodie />}>
              Foodie
            </Nav.Link>
            <Nav.Link href="/aboutme" element={<AboutMe />}>
              About Me
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Container>
    </Navbar>
  );
}
