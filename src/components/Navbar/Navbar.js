import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useTheme } from "../../context/themeProvider"; // Ensure this exists
import "../Navbar/Navbar.scss";
import { HashLink } from "react-router-hash-link";
function OffcanvasExample() {
  const { toggleTheme, darkMode } = useTheme(); // Assuming you're using a context provider

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar expand="lg" className="navbar mb-3 container fixed-top mt-3">
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                My Portfolio
              </Offcanvas.Title>
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
                <HashLink smooth to="/#paper-publications" className="navLink nav-link">
                  Publications
                </HashLink>
                <HashLink className="navLink nav-link" smooth to="/#contactMe">
                  Contact Me
                </HashLink>
              </Nav>

              {/* 🌙 Theme Toggle */}
              <div className="theme-toggle d-flex align-items-center mt-3 mt-lg-0 customizeToggle">
                <label className="form-check form-switch m-0">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={darkMode}
                    onChange={toggleTheme}
                  />
                </label>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
