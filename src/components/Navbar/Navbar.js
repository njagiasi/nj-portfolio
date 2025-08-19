import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useTheme } from "../../context/themeProvider";
import "../Navbar/Navbar.scss";
import { HashLink } from "react-router-hash-link";
import { FaMoon, FaSun } from "react-icons/fa";

function OffcanvasExample() {
  const { toggleTheme, darkMode } = useTheme();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg" className="navbar mb-3 container fixed-top mt-2">
      <Container fluid>
        {/* Toggle button */}
        <Navbar.Toggle
          aria-controls="offcanvasNavbar-expand-lg"
          onClick={handleShow}
          className={darkMode ? "toggle-dark" : "toggle-light"}
        />

        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
          show={show}             // controlled show state
          onHide={handleClose}    // closes on default close button
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Naina</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <h5 className="customNavItem">Naina</h5>

              {/* Links */}
              <HashLink smooth to="/#about-me" className="navLink nav-link" onClick={handleClose}>
                About
              </HashLink>
              <HashLink smooth to="/#experience" className="navLink nav-link" onClick={handleClose}>
                Experience
              </HashLink>
              <HashLink smooth to="/#education" className="navLink nav-link" onClick={handleClose}>
                Education
              </HashLink>
              <HashLink smooth to="/#skills" className="navLink nav-link" onClick={handleClose}>
                Skills
              </HashLink>
              <HashLink smooth to="/#projects" className="navLink nav-link" onClick={handleClose}>
                Projects
              </HashLink>
              <HashLink smooth to="/#contactMe" className="navLink nav-link" onClick={handleClose}>
                Contact Me
              </HashLink>

              {/* Theme Toggle */}
              <div className="theme-toggle d-flex align-items-center mt-3 mt-lg-0 customizeToggle">
                {darkMode ? (
                  <FaSun
                    size={24}
                    onClick={toggleTheme}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <FaMoon
                    size={24}
                    onClick={toggleTheme}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </div>
              
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default OffcanvasExample;
