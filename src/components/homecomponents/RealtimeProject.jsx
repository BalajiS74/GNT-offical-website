import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import handshake from "../../assets/home/handshake.png"; // 👈 add your center image

const RealtimeProject = () => {
  return (
    <div className="py-5">
      <Container>
        {/* Heading */}
        <p className="text-center mb-5 fw-normal" style={{ fontSize: "38px" }}>
          want work with{" "}
          <span style={{ color: "#68D53D" }}>real-time projects</span>
        </p>

        {/* Main Box */}
        <div
          className="p-4 p-md-5 rounded-4"
          style={{
            background: "#c8d8c0",
            maxWidth: "950px", // reduce overall width
            margin: "0 auto", // center the box
            minHeight: "420px", // increase height
          }}
        >
          <Row className="align-items-center text-center text-md-start">
            {/* Left Content */}
            <Col md={5}>
              <h2 className="mb-3">On-site Training</h2>
              <p
                className="text-muted"
                style={{ lineHeight: "1.8", fontSize: "22px" }}
              >
                Gain practical skills through our on-site training, where
                students apply academic knowledge to real-world projects and
                build the confidence needed for today’s job market.
              </p>
            </Col>

            {/* Center Image */}
            <Col md={2} className="my-4 my-md-0 text-center">
              <img
                src={handshake}
                alt="handshake"
                style={{
                  width: "100%",
                  maxWidth: "160px", // reduced image width
                  objectFit: "contain",
                }}
              />
            </Col>

            {/* Right Content */}
            <Col md={5}>
              <h2 className="mb-3">Internship</h2>
              <p
                className="text-muted"
                style={{ lineHeight: "1.8", fontSize: "22px" }}
              >
                Our internship program provides hands-on experience by working
                on real-world projects alongside industry professionals. It
                helps students build practical skills and gain confidence.
              </p>
            </Col>
          </Row>

          {/* Button */}
          <div className="text-center mt-4">
            <Button
              style={{
                background: "#68D53D",
                border: "none",
                padding: "10px 26px", // slightly smaller button
                fontSize: "16px",
                borderRadius: "10px",
              }}
            >
              Register Now
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RealtimeProject;
