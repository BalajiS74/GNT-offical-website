import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import registerImg from "../assets/registration.png";
import "./register.css";
import { registerUser } from "../api/registerApi";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    program: "Internship",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // 🔹 Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // remove error when user types
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // 🔹 Validation function
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    if (!formData.course.trim()) {
      newErrors.course = "Course is required";
    }

    return newErrors;
  };

  // 🔹 Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);
      setSuccess("");

      const res = await registerUser(formData);

      console.log(res);
      setSuccess("Registration successful ✅");

      // reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        program: "Internship",
        message: "",
      });

      setErrors({});
    } catch (err) {
      setSuccess("");
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-5 register-bg">
      <Container>
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

              {/* SUCCESS MESSAGE */}
              {success && <Alert variant="success">{success}</Alert>}

              {/* FORM */}
              <Form onSubmit={handleSubmit} noValidate>
                <Row className="g-2">
                  <Col md={6}>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      placeholder="Full Name"
                      onChange={handleChange}
                      isInvalid={!!errors.name}
                      className="custom-input"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Col>

                  <Col md={6}>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      placeholder="Email"
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                      className="custom-input"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Col>

                  <Col md={6}>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      placeholder="Phone"
                      onChange={handleChange}
                      isInvalid={!!errors.phone}
                      className="custom-input"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.phone}
                    </Form.Control.Feedback>
                  </Col>

                  <Col md={6}>
                    <Form.Control
                      type="text"
                      name="course"
                      value={formData.course}
                      placeholder="Course"
                      onChange={handleChange}
                      isInvalid={!!errors.course}
                      className="custom-input"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.course}
                    </Form.Control.Feedback>
                  </Col>

                  <Col md={6}>
                    <Form.Select
                      name="program"
                      value={formData.program}
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
                      value={formData.message}
                      placeholder="Message (optional)"
                      onChange={handleChange}
                      className="custom-input"
                    />
                  </Col>
                </Row>

                {/* BUTTON */}
                <div className="text-center mt-3">
                  <Button
                    type="submit"
                    className="submit-btn"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Register"}
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
