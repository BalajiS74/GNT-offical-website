import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import img1 from "../../assets/pastworks/psn.jpeg";
import img2 from "../../assets/pastworks/tvc.jpeg";
import img3 from "../../assets/pastworks/govm.jpeg";

const Pastworks = () => {
  const works = [
    {
      title: "Analysis student project ",
      desc: "A dedicated practical module focused on bridging theoretical concepts with industry application through intensive laboratory sessions and hands-on experimentation.",
      image: img3,
    },
    {
      title: "Placement awareness Program",
      desc: "Empowering students to bridge the gap between academia and industry through expert career guidance, hands-on skill development, and direct access to professional opportunities.",
      image: img2,
    },
    {
      title: "Technical Workshop",
      desc: "Interactive sessions with young students to boost creativity and learning.",
      image: img1,
    },
  ];

  return (
    <section className="pastworks-section">
      <Container>
        {/* HEADER */}
        <div className="text-center mb-5">
          <h1 className="fw-bold display-4">
            Our <span>Past Work</span>
          </h1>
          <p className="text-muted">
            Real impact. Real students. Real growth 🚀
          </p>
        </div>

        {/* BIG GRID */}
        <Row className="g-4">
          {works.map((item, index) => (
            <Col md={12} key={index}>
              <div className={`work-card ${index % 2 !== 0 ? "reverse" : ""}`}>
                {/* IMAGE */}
                <div className="work-img">
                  <img src={item.image} alt={item.title} />
                </div>

                {/* CONTENT */}
                <div className="work-content">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* 🔥 STYLES */}
      <style>
        {`
        .pastworks-section {
          padding: 80px 0;
          background: linear-gradient(to bottom, #f8faf7, #ffffff);
        }

        .pastworks-section h1 span {
          color: #3a7b20;
        }

        /* CARD LAYOUT */
        .work-card {
          display: flex;
          align-items: center;
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: 0.3s;
        }

        .work-card:hover {
          transform: scale(1.01);
          box-shadow: 0 20px 50px rgba(58,123,32,0.2);
        }

        .work-card.reverse {
          flex-direction: row-reverse;
        }

        /* IMAGE */
        .work-img {
          flex: 1;
        }

        .work-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* CONTENT */
        .work-content {
          flex: 1;
          padding: 40px;
        }

        .work-content h2 {
          font-weight: 700;
          margin-bottom: 10px;
        }

        .work-content p {
          color: #666;
          margin-bottom: 20px;
        }

        /* TAGS */
        .tags span {
          display: inline-block;
          margin-right: 10px;
          padding: 5px 12px;
          border-radius: 20px;
          background: rgba(58,123,32,0.1);
          color: #3a7b20;
          font-size: 13px;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .work-card {
            flex-direction: column !important;
          }

          .work-content {
            padding: 20px;
          }
        }
        `}
      </style>
    </section>
  );
};

export default Pastworks;
