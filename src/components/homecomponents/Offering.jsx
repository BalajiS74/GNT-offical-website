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
    title: "User Satisfaction",
    value: "99%",
    dis: "Consistently high-rated experience",
    img: Satisfaction,
    gradient: "linear-gradient(135deg, #3a7b20, #4CAF50)",
  },
  {
    title: "Active Learners",
    value: "50+",
    dis: "Growing user base",
    img: learners,
    gradient: "linear-gradient(135deg, #d4a017, #f5c542)",
  },
  {
    title: "Certified Experts",
    value: "10+",
    dis: "Industry-qualified mentors",
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
        >
          <h2 className="display-5 fw-bold">
            What We <span className="highlight">Offer</span>
          </h2>
          <p className="text-muted">
            Empowering your tech journey with real impact 🚀
          </p>
        </motion.div>

        {/* OFFER CARDS */}
        <Row className="g-4 mb-5">
          {offerings.map((item, index) => (
            <Col xs={12} sm={4} lg={4} key={index}>
              <motion.div
                className="offer-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -8 }}
              >
                <img src={item.img} alt="" className="offer-img" />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* STATS */}
        <Row className="g-4">
          {stats.map((item, index) => (
            <Col xs={12} sm={4} lg={4} key={index}>
              <motion.div
                className="stat-card"
                style={{ background: item.gradient }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <img src={item.img} alt="" className="stat-img" />
                <h1>{item.value}</h1>
                <p className="fw-bold">{item.title}</p>
                <p>{item.dis}</p>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* CTA */}
        <div className="text-center mt-5">
          <p className="cta-text">
            Join thousands of learners transforming their careers ✨
          </p>
        </div>
      </Container>

      {/* CLEAN CSS */}
      <style>{`
        .offering-section {
          padding: 80px 0;
          background: linear-gradient(to bottom, #f8faf7, #ffffff);
        }

        .highlight {
          color: #3a7b20;
        }

        /* OFFER CARD */
        .offer-card {
          background: #fff;
          border-radius: 18px;
          padding: 25px;
          text-align: center;
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
        }

        .offer-img {
          width: 180px;
          height: 180px;
          object-fit: contain;
          margin: 0 auto 15px;
        }

        .offer-card h4 {
          font-weight: 600;
          margin-bottom: 10px;
        }

        .offer-card p {
          font-size: 14px;
          color: #666;
        }

        /* STATS */
        .stat-card {
          border-radius: 18px;
          padding: 25px;
          text-align: center;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
        }

        .stat-img {
          width: 70px;
          margin: 0 auto 10px;
        }

        .stat-card h1 {
          font-size: 38px;
          font-weight: bold;
        }

        .stat-card p {
          font-size: 16px;
          opacity: 0.9;
        }

        /* CTA */
        .cta-text {
          font-size: 18px;
          color: #555;
        }

        /* 🔥 TABLET CONTROL (≈ 978px - 991px) */
        @media (max-width: 991px) {
          .offer-img {
            width: 140px;
            height: 140px;
          }

          .offer-card h4 {
            font-size: 18px;
          }

          .offer-card p {
            font-size: 13px;
          }

          .stat-img {
            width: 55px;
          }

          .stat-card h1 {
            font-size: 28px;
          }

          .stat-card p {
            font-size: 14px;
          }
        }

        /* MOBILE */
        @media (max-width: 576px) {
          .offer-img {
            width: 120px;
            height: 120px;
          }

          .stat-card h1 {
            font-size: 24px;
          }

          .cta-text {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default Offering;
