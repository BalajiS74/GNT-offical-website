import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

import itcareer from "../../assets/home/itcareer.png";
import careeropp from "../../assets/home/careeropp.png";
import itstartup from "../../assets/home/itstartup.png";
import Satisfaction from "../../assets/home/satisfaction.png";
import learners from "../../assets/home/learners.png";
import besttutor from "../../assets/home/besttutor.png";

const offerings = [
  {
    title: "IT Startup",
    img: itstartup,
    description: "Launch your dream startup with our support",
  },
  {
    title: "IT Career",
    img: itcareer,
    description: "Build your future in technology with expert guidance",
  },
  {
    title: "Career Opportunities",
    img: careeropp,
    description: "Access global job opportunities and networking",
  },
];

const stats = [
  {
    title: "Satisfaction",
    value: "100%",
    img: Satisfaction,
    gradient: "linear-gradient(135deg, #3a7b20, #4CAF50)",
  },
  {
    title: "Learners",
    value: "50+",
    img: learners,
    gradient: "linear-gradient(135deg, #d4a017, #f5c542)",
  },
  {
    title: "Experts",
    value: "10+",
    img: besttutor,
    gradient: "linear-gradient(135deg, #1a1a1a, #333)",
  },
];

const Offering = () => {
  return (
    <section className="offering-section">
      <Container>
        {/* HEADER */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-4 fw-bold">
            What We <span>Offer</span>
          </h2>
          <p className="text-muted fs-5">
            Empowering your tech journey with real impact 🚀
          </p>
        </motion.div>

        {/* OFFER CARDS */}
        <Row className="g-4 mb-5">
          {offerings.map((item, index) => (
            <Col md={4} key={index}>
              <motion.div
                className="offer-card"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <motion.img
                  src={item.img}
                  alt=""
                  className="offer-img"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                />

                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* STATS */}
        <Row className="g-4">
          {stats.map((item, index) => (
            <Col md={4} key={index}>
              <motion.div
                className="stat-card"
                style={{ background: item.gradient }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.img
                  src={item.img}
                  alt=""
                  className="stat-img"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <h1>{item.value}</h1>
                <p>{item.title}</p>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* CTA */}
        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <p className="cta-text">
            Join thousands of learners transforming their careers ✨
          </p>
        </motion.div>
      </Container>

      {/* STYLES */}
      <style>
        {`
        .offering-section {
          padding: 80px 0;
          background: linear-gradient(to bottom, #f8faf7, #ffffff);
        }

        h2 span {
          color: #3a7b20;
        }

        /* OFFER CARD */
        .offer-card {
          background: white;
          border-radius: 20px;
          padding: 30px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: 0.3s;
        }

        .offer-img {
          width: 200px;
          height: 200px;
          object-fit: contain;
          margin-bottom: 20px;
        }

        .offer-card h4 {
          font-weight: 700;
          margin-bottom: 10px;
        }

        .offer-card p {
          color: #666;
          font-size: 14px;
        }

        /* STATS */
        .stat-card {
          border-radius: 20px;
          padding: 30px;
          text-align: center;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .stat-img {
          width: 80px;
          margin-bottom: 15px;
        }

        .stat-card h1 {
          font-size: 42px;
          font-weight: bold;
        }

        .stat-card p {
          font-size: 18px;
          opacity: 0.9;
        }

        /* CTA */
        .cta-text {
          font-size: 20px;
          color: #555;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .offer-card {
            padding: 20px;
          }

          .stat-card h1 {
            font-size: 32px;
          }
        }
        `}
      </style>
    </section>
  );
};

export default Offering;
