import "../css/Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import React, { Component } from 'react';

function Header() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>

            <NavDropdown title="Courses" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                8th to 1oth State and CBSE
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                11th and 12th State
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">JEE</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">NEET</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Faculties</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          <div className="header__leftIcons">
            <FacebookIcon />
            <YouTubeIcon />
            <InstagramIcon />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
