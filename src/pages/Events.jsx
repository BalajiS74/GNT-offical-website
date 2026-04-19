import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaGamepad,
  FaRocket,
  FaCalendarAlt,
  FaBriefcase,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Events = () => {
  const events = [
    {
      title: "7-Day Foundation Program",
      description:
        "Kickstart your journey with a powerful 7-day structured learning program.",
      icon: <FaRocket />,
    },
    {
      title: "Weekly Events",
      description:
        "Stay consistent with engaging weekly sessions and community activities.",
      icon: <FaCalendarAlt />,
    },
    {
      title: "Sunday Business Events",
      description:
        "Explore Mehandi, Embroidery, Freelancing & business opportunities.",
      icon: <FaBriefcase />,
    },
    {
      title: "Stress Booster Games",
      description:
        "Fun and interactive games designed to refresh your mind and reduce stress.",
      icon: <FaGamepad />,
    },
  ];

  // 🔥 Animation Variants
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="events-section py-5">
      <Container>
        {/* HERO */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="fw-bold display-4">
            Discover Our <span style={{color:"#3a7b20"}}>Events</span>
          </h1>
          <p className="lead text-muted">
            Learn, grow, and explore exciting opportunities every week 🚀
          </p>
        </motion.div>

        {/* EVENTS */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row className="g-4">
            {events.map((event, index) => (
              <Col xs={12} md={6} lg={3} key={index}>
                <motion.div variants={cardVariant}>
                  <Card className="event-card h-100 border-0 text-center p-4">
                    <motion.div
                      className="icon-box mb-3"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      {event.icon}
                    </motion.div>

                    <Card.Body>
                      <Card.Title className="fw-bold fs-5 mb-2">
                        {event.title}
                      </Card.Title>

                      <Card.Text className="text-muted small">
                        {event.description}
                      </Card.Text>

                      {/* <motion.div whileHover={{ scale: 1.05 }}>
                        <Button className="mt-3 event-btn">Explore →</Button>
                      </motion.div> */}
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>

      {/* STYLES */}
      <style>
        {`
          .events-section {
            background: linear-gradient(to bottom, #f8fff5, #ffffff);
          }

          .event-card {
            border-radius: 20px;
            background: #ffffff;
            box-shadow: 0 5px 20px rgba(0,0,0,0.05);
            transition: 0.3s;
          }

          .event-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 50px rgba(58,123,32,0.2);
          }

          .icon-box {
            font-size: 28px;
            width: 60px;
            height: 60px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(58,123,32,0.1);
            color: #3a7b20;
            border-radius: 50%;
          }

          .event-btn {
            background: transparent;
            color: #3a7b20;
            border: 1px solid #3a7b20;
            border-radius: 8px;
            padding: 5px 12px;
            font-size: 14px;
            transition: 0.3s;
          }

          .event-btn:hover {
            background: #3a7b20;
            color: white;
          }
        `}
      </style>
    </section>
  );
};

export default Events;
