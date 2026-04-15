import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Import your images
import project1 from "../../assets/home/project1.png";
import project2 from "../../assets/home/project2.png";
import project3 from "../../assets/home/project3.png";

export const ProjectShowCase = () => {
  return (
    <div className="py-5">
      <Container>
        {/* Heading */}
        <h1 className="text-center mb-5 fw-normal">
          Our <span style={{ color: "#68D53D" }}>Showcases</span>
        </h1>

        {/* Top Row (2 items) */}
        <Row className="g-4 justify-content-center mb-4">
          <Col xs={12} md={6} className="text-center">
            <img
              src={project1}
              alt="project1"
              className="img-fluid rounded-4 shadow-sm showcase-img"
            />
          </Col>

          <Col xs={12} md={6} className="text-center">
            <img
              src={project2}
              alt="project2"
              className="img-fluid rounded-4 shadow-sm showcase-img"
            />
          </Col>
        </Row>

        {/* Bottom Center Image */}
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4} className="text-center">
            <img
              src={project3}
              alt="project3"
              className="img-fluid rounded-4 shadow-sm showcase-img"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
