import React, { useState } from "react";
import { Link } from "react-router";
import { sendMessage } from "../api/contactApi";
import { motion } from "framer-motion";
import GlobalBtn from "./global/GlobalBtn";
const GetinTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // handle change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // validation
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Invalid email";

    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.length < 10)
      newErrors.message = "Minimum 10 characters required";

    return newErrors;
  };

  // submit
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

      await sendMessage(formData);

      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (err) {
      setErrors({ api: "Failed to send message" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        {/* HEADER */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="fw-bold">
            Get in <span>Touch</span>
          </h2>
          <p className="text-muted">We'd love to hear from you</p>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          className="contact-form mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* SUCCESS */}
          {success && (
            <motion.div
              className="alert alert-success"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {success}
            </motion.div>
          )}

          {/* API ERROR */}
          {errors.api && <div className="alert alert-danger">{errors.api}</div>}

          {/* NAME */}
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`form-control custom-input ${
                errors.name ? "is-invalid" : ""
              }`}
              placeholder="Enter your name"
            />
            <div className="invalid-feedback">{errors.name}</div>
          </div>

          {/* EMAIL */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-control custom-input ${
                errors.email ? "is-invalid" : ""
              }`}
              placeholder="Enter your email"
            />
            <div className="invalid-feedback">{errors.email}</div>
          </div>

          {/* MESSAGE */}
          <div className="mb-3">
            <label className="form-label">Message</label>
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={`form-control custom-input ${
                errors.message ? "is-invalid" : ""
              }`}
              placeholder="Write your message"
            ></motion.textarea>
            <div className="invalid-feedback">{errors.message}</div>
          </div>

          {/* BUTTON */}
          <GlobalBtn btnName="Submit" px="5" style={{ width: "100%" }} />
        </motion.form>

        {/* CTA */}
        <motion.div
          className="cta-box mt-5 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h4 className="fw-bold">Wanna Join Our Team?</h4>
          <p>Have a Happy Learning Journey</p>

          <Link to="/appljob">
            <GlobalBtn btnName="Apply" px="5" />
          </Link>
        </motion.div>
      </div>

      {/* STYLES */}
      <style>
        {`
        .contact-section {
          padding: 70px 0;
          background: #f7f9f6;
        }

        h2 span {
          color: #3a7b20;
        }

        .contact-form {
          max-width: 600px;
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
        }

        .custom-input {
          border-radius: 8px;
          border: 1px solid #ddd;
          padding: 10px;
        }

        .custom-input:focus {
          border-color: #3a7b20;
          box-shadow: none;
        }

        .submit-btn {
          background: #3a7b20;
          color: white;
          border-radius: 8px;
          padding: 10px;
          font-weight: 600;
        }

        .submit-btn:hover {
          background: #2f6419;
        }

        .cta-box {
          background: #ffffff;
          padding: 25px;
          border-radius: 12px;
          border: 1px solid #eee;
        }
        `}
      </style>
    </section>
  );
};

export default GetinTouch;
