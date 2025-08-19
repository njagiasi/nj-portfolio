// import React, { useState } from "react";
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

  return (
    <Navbar expand="lg" className="navbar mb-3 container fixed-top mt-2">
      <Container fluid>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar-expand-lg"
          // onClick={handleShow}
          className={darkMode ? "toggle-light" : "toggle-dark"}
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Naina</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <h5 className="customNavItem">Naina</h5>
              <HashLink smooth to="/#about-me" className="navLink nav-link">
                About
              </HashLink>
              <HashLink smooth to="/#experience" className="navLink nav-link">
                Experience
              </HashLink>
              <HashLink smooth to="/#education" className="navLink nav-link">
                Education
              </HashLink>
              <HashLink smooth to="/#skills" className="navLink nav-link">
                Skills
              </HashLink>
              <HashLink smooth to="/#projects" className="navLink nav-link">
                Projects
              </HashLink>
              {/* <HashLink
                smooth
                to="/#paper-publications"
                className="navLink nav-link"
              >
                Publications
              </HashLink> */}
              <HashLink smooth to="/#contactMe" className="navLink nav-link">
                Contact Me
              </HashLink>
            {/* 🌙 Theme Toggle */}
            {/* <div className="theme-toggle d-flex align-items-center mt-3 mt-lg-0 customizeToggle">
              <label className="form-check form-switch m-0">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={darkMode}
                  onChange={toggleTheme}
                />
              </label>
            </div> */}

            {/* 🌙 Theme Toggle */}
            <div className="theme-toggle d-flex align-items-center mt-3 mt-lg-0 customizeToggle">
              {darkMode ? (
                <FaMoon
                  size={24}
                  onClick={toggleTheme}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <FaSun
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
