import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaPython,
  FaJava,
  FaPaintBrush,
  FaBullhorn,
  FaCloud,
  FaNetworkWired,
  FaReact,
  FaBrain,
  FaChartBar,
  FaDatabase,
  FaMobileAlt,
  FaShieldAlt, // ✅ Added for Cyber Security
} from "react-icons/fa";

const CourseOffered = () => {
  const courses = [
    { name: "Python Full Stack", icon: <FaPython /> },
    { name: "Java Full Stack", icon: <FaJava /> },
    { name: "UI/UX Designing", icon: <FaPaintBrush /> },
    { name: "Digital Marketing", icon: <FaBullhorn /> },
    { name: "Cloud Computing", icon: <FaCloud /> },
    { name: "Networking", icon: <FaNetworkWired /> },
    { name: "MERN / MEAN Stack", icon: <FaReact /> },
    { name: "AI / ML Course", icon: <FaBrain /> },
    { name: "Data Analytics", icon: <FaChartBar /> },
    { name: "Data Science", icon: <FaDatabase /> },
    { name: "Flutter", icon: <FaMobileAlt /> },
    { name: "React Native with Expo", icon: <FaMobileAlt /> },
    { name: "Cyber Security", icon: <FaShieldAlt /> }, // ✅ New course added
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        {/* Heading */}
        <h2 className="text-center fw-bold mb-4">
          Courses <span className="text-success">Offering</span>
        </h2>

        {/* Grid */}
        <Row className="g-3 justify-content-center">
          {courses.map((course, index) => (
            <Col key={index} xs={6} md={4} lg={3}>
              <Card className="text-center border-0 shadow-sm course-card h-100">
                <Card.Body>
                  {/* ICON */}
                  <div className="course-icon mb-2">{course.icon}</div>

                  {/* TEXT */}
                  <Card.Text className="fw-semibold small">
                    {course.name}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CourseOffered;
