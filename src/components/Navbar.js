import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { FaHome, FaLaptopCode, FaBuilding, FaGraduationCap   } from "react-icons/fa";
import { BiSolidUser } from "react-icons/bi";
import { IoDocumentText } from "react-icons/io5";
import { Link } from "react-scroll";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Link to="homeSection" smooth={true} duration={400} onClick={() => updateExpanded(false)} className="nav-link">
                <FaHome style={{ marginBottom: "5px" }} /> Home
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                to="aboutSection" smooth={true} duration={400}
                onClick={() => updateExpanded(false)} className="nav-link"
              >
                <BiSolidUser style={{ marginBottom: "5px" }} /> About
              </Link>
            </Nav.Item>
            
            <Nav.Item>
              <Link
                to="experienceSection" smooth={true} duration={400}
                onClick={() => updateExpanded(false)} className="nav-link"
              >
                <FaBuilding  style={{ marginBottom: "5px" }} /> Experience
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                to="projectSection" smooth={true} duration={400}
                onClick={() => updateExpanded(false)} className="nav-link"
              >
                <FaLaptopCode
                  style={{ marginBottom: "5px" }}
                />{" "}
                Projects
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                to="educationSection" smooth={true} duration={400}
                onClick={() => updateExpanded(false)} className="nav-link"
              >
                <FaGraduationCap  style={{ marginBottom: "5px" }} /> Education
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                to="resumeSection" smooth={true} duration={400}
                onClick={() => updateExpanded(false)} className="nav-link"
              >
                <IoDocumentText style={{ marginBottom: "5px" }} /> Resume
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
