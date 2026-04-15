import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import itcareer from "../../assets/home/itcareer.png";
import careeropp from "../../assets/home/careeropp.png";
import itstartup from "../../assets/home/itstartup.png";
import Satisfaction from "../../assets/home/satisfaction.png";
import learners from "../../assets/home/learners.png";
import besttutor from "../../assets/home/besttutor.png";

const offerings = [
  { title: "IT Career", img: itcareer },
  { title: "Career opportunities", img: careeropp },
  { title: "IT startup", img: itstartup },
];

const stats = [
  {
    title: "Satisfaction 100%",
    img: Satisfaction,
    border: "4px solid #68D53D",
    height: "100px",
  },
  {
    title: "Learners 50+",
    img: learners,
    border: "4px solid #d4a017",
    height: "100px",
  },
  {
    title: "Experts 10+",
    img: besttutor,
    border: "4px solid #000",
    height: "100px",
  },
];

const Offering = () => {
  return (
    <div className="py-5">
      <Container>
        {/* Heading */}
        <h2 className="text-center mb-5 fw-normal" style={{ fontSize: "42px" }}>
          We are <span style={{ color: "#68D53D" }}>offering 🎉</span>
        </h2>

        {/* Cards */}
        <Row className="g-4 justify-content-center">
          {offerings.map((item, index) => (
            <Col key={index} xs={12} sm={6} lg={4}>
              <Card className="text-center p-4 shadow-sm border-0 rounded-4 h-100">
                {/* Image wrapper with fixed height */}
                <div
                  style={{
                    height: "200px", // 🔥 consistent height for all images
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={item.img}
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>

                <Card.Body>
                  <Card.Title className="mt-3 fs-4">{item.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Stats Section */}
        <Row
          className="g-4 justify-content-center align-items-center"
          style={{ marginTop: "120px" }} // slightly reduced top margin
        >
          {stats.map((item, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={4}
              className="d-flex justify-content-center"
            >
              <div
                className="d-flex flex-column align-items-center justify-content-center text-center p-4 rounded-4 bg-white shadow-sm w-75"
                style={{
                  border: item.border,
                  minHeight: "200px", // taller card for balance
                  transition: "all 0.3s ease",
                }}
              >
                {/* BIG IMAGE ICON */}
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "120px", // slightly smaller for neatness
                    height: "90px",
                    objectFit: "contain",
                    marginBottom: "15px",
                  }}
                />

                <span
                  className="fw-semibold"
                  style={{ fontSize: "22px", color: "#333" }}
                >
                  {item.title}
                </span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Offering;
