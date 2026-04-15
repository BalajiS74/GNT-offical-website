import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import tcs from "../../assets/home/tcs.png";
import zoho from "../../assets/home/zoho.jpg";
import cognizant from "../../assets/home/cognizant.jpg";
import nsn from "../../assets/home/nsn.jpg";
import accenture from "../../assets/home/accenture.jpg";
import wipro from "../../assets/home/wipro.png";

const companies = [
  { img: tcs },
  { img: zoho },
  { img: cognizant },
  { img: nsn },
  { img: accenture },
  { img: wipro },
];

export const JobOffered = () => {
  return (
    <div className="py-5">
      <Container>
        {/* Heading */}
        <h2 className="text-center mb-5 fw-normal">
          Our students placed on <span style={{ color: "#68D53D" }}>5+</span>{" "}
          companies.
        </h2>

        {/* Logos */}
        <Row className="g-4 justify-content-center align-items-center text-center">
          {companies.map((company, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <div className="p-2">
                <img
                  src={company.img}
                  alt="company"
                  style={{
                    width: "100%",
                    height: "120px", // 🔥 Bigger fixed height
                    objectFit: "contain",
                    transition: "0.3s",
                  }}
                  className="company-logo"
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
