import React from "react";
import { Navbar as BSNavbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import SafeZone from "./global/SafeZone";
import GlobalBtn from "./global/GlobalBtn";
import { Spltext } from "./global/Gtext";
import "./navbar.css"; // 👈 add this

const Navitem = ({ name, path }) => {
  return (
    <Nav.Link
      as={NavLink}
      to={path}
      end={path === "/"}
      className="nav-item-custom fs-5"
    >
      {name}
    </Nav.Link>
  );
};

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <SafeZone>
        <BSNavbar expand="lg" className="custom-navbar">
          <Container fluid>
            {/* Logo */}
            <BSNavbar.Brand as={NavLink} to="/" className="logo-anim">
              <Spltext type="h4" className="fw-bold fs-3">
                GrowthNest 
              </Spltext>
              <h3>Tech  Solution</h3>
            </BSNavbar.Brand>

            {/* Toggle */}
            <BSNavbar.Toggle aria-controls="main-navbar" />

            <BSNavbar.Collapse id="main-navbar">
              {/* Center Nav */}
              <Nav className="mx-auto text-center gap-lg-5">
                <Navitem path="/" name="Home" />
                <Navitem path="/service" name="Services" />
                <Navitem path="/career" name="Career" />
                <Navitem path="/events" name="Events" />
                <Navitem path="/about" name="About" />
              </Nav>

              {/* Button */}
              <div className="d-flex justify-content-center mt-3 mt-lg-0">
                <Link to="/getintouch" className="btn-hover">
                  <GlobalBtn btnName="Contact" px={5} py={2} />
                </Link>
              </div>
            </BSNavbar.Collapse>
          </Container>
        </BSNavbar>
      </SafeZone>
    </div>
  );
};

export default Navbar;
