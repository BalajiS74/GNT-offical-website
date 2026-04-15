import React from "react";
import { Navbar as BSNavbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import SafeZone from "./global/SafeZone";
import GlobalBtn from "./global/GlobalBtn";
import { Spltext } from "./global/Gtext";

const Navitem = ({ name, path }) => {
  return (
    <Nav.Link
      as={NavLink}
      to={path}
      end={path === "/"}
      className="fs-5"
      style={({ isActive }) => ({
        color: isActive ? "#68D53D" : "#000000",
      })}
    >
      {name}
    </Nav.Link>
  );
};

const Navbar = () => {
  return (
    <div className="bg-white">
      <SafeZone>
        <BSNavbar
          expand="lg"
          className="px-4 py-3 shadow-sm border-2 border-secondary rounded-4"
        >
          <Container fluid>
            {/* Logo */}
            <BSNavbar.Brand as={NavLink} to="/">
              <Spltext type="h4" className="fw-bold fs-3">
                GrowthNest
              </Spltext>
            </BSNavbar.Brand>

            {/* Toggle button (mobile) */}
            <BSNavbar.Toggle aria-controls="main-navbar" />

            {/* Collapsible content */}
            <BSNavbar.Collapse id="main-navbar">
              {/* Center Nav */}
              <Nav className="mx-auto text-center d-flex gap-5">
                <Navitem path="/" name="Home" />
                <Navitem path="/about" name="About" />
                <Navitem path="/service" name="Services" />
                {/* <Navitem path="/course" name="Course" /> */}
              </Nav>

              {/* Right Button */}
              <div className="d-flex justify-content-center mt-3 mt-lg-0">
                <Link to="/GetinTouch">
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
