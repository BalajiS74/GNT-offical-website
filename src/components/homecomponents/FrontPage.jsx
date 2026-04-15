import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeFront from "../../assets/homeFront.png";
import GlobalBtn from "../global/GlobalBtn";
const FrontPage = () => {
  return (
    <div>
      <Container className="py-5">
        <Row className="align-items-center">
          {/* Left Content */}
          <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
            <h1 className="fw-bold" style={{ fontSize: "3rem" }}>
              Empower your <br />
              career <span style={{ color: "#c8a646" }}>growth</span> <br />
              with us
            </h1>

            <p className="text-muted mt-3 fs-4">
              Are you finding difficulty in where & when
              <br />
              to start ?
            </p>

            <GlobalBtn
              btnName={"Meet"}
              px={"5"}
              style={{ width: "300px", marginTop: "20px", fontSize: "24px" }}
            />
          </Col>

          {/* Right Image */}
          <Col md={6} className="text-center">
            <img
              src={homeFront} // 👉 replace with your image path
              alt="hero"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FrontPage;
