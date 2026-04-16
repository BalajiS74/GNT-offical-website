import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import registerImg from "../assets/registration.png";
import "./register.css"; // 👈 add this

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    program: "Internship",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Registration Submitted!");
  };

  return (
    <div className="py-5 register-bg">
      <Container>

        {/* Heading */}
        <h3 className="text-center mb-4 fade-in">
          Register for{" "}
          <span className="text-success">Internship / Training</span>
        </h3>

        <Row className="justify-content-center">
          <Col lg={8}>

            <div className="register-card fade-up">

              {/* IMAGE */}
              <div className="text-center floating-img">
                <img
                  src={registerImg}
                  alt="register"
                  className="img-fluid"
                  style={{ maxWidth: "180px" }}
                />
              </div>

              {/* FORM */}
              <Form onSubmit={handleSubmit} className="w-100">
                <Row className="g-2">

                  <Col md={6}>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      onChange={handleChange}
                      className="custom-input"
                      required
                    />
                  </Col>

                  <Col md={6}>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                      className="custom-input"
                      required
                    />
                  </Col>

                  <Col md={6}>
                    <Form.Control
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      onChange={handleChange}
                      className="custom-input"
                      required
                    />
                  </Col>

                  <Col md={6}>
                    <Form.Control
                      type="text"
                      name="course"
                      placeholder="Course"
                      onChange={handleChange}
                      className="custom-input"
                      required
                    />
                  </Col>

                  <Col md={6}>
                    <Form.Select
                      name="program"
                      onChange={handleChange}
                      className="custom-input"
                    >
                      <option>Internship</option>
                      <option>On-site Training</option>
                    </Form.Select>
                  </Col>

                  <Col md={12}>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      name="message"
                      placeholder="Message (optional)"
                      onChange={handleChange}
                      className="custom-input"
                    />
                  </Col>

                </Row>

                {/* BUTTON */}
                <div className="text-center mt-3">
                  <Button className="submit-btn">
                    Register
                  </Button>
                </div>

              </Form>

            </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterPage;