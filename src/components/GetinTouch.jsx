import React, { useState } from "react";
import { Link } from "react-router";
import { sendMessage } from "../api/contactApi";

const GetinTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // 🔹 Handle change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // remove error while typing
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // 🔹 Validation
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
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

      const res = await sendMessage(formData);

      console.log(res);
      setSuccess("Message sent successfully ✅");

      // reset
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setErrors({});
    } catch (err) {
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container my-5">
      {/* Title */}
      <h2 className="text-center fw-bold mb-4">
        get in <span style={{ color: "#3a7b20" }}>touch</span>
      </h2>

      {/* SUCCESS */}
      {success && (
        <div className="alert alert-success text-center">{success}</div>
      )}

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="mx-auto"
        style={{ maxWidth: "600px" }}
        noValidate
      >
        {/* NAME */}
        <div className="mb-3">
          <label className="form-label">Full name</label>
          <input
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
          <input
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
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className={`form-control custom-input ${
              errors.message ? "is-invalid" : ""
            }`}
            placeholder="Write your message"
          ></textarea>
          <div className="invalid-feedback">{errors.message}</div>
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="btn w-100"
          style={{ backgroundColor: "#3a7b20", color: "white" }}
          disabled={loading}
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>

      {/* Bottom Section */}
      <div
        className="mt-5 p-4 text-center rounded"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <h4 className="fw-bold">Wanna Join Our Team?</h4>
        <p className="mb-3">Have a Happy Learning Journey</p>
        <Link to={"/ApplyJob"}>
          <button
            className="btn"
            style={{ backgroundColor: "#3a7b20", color: "white" }}
          >
            Click here to apply job
          </button>
        </Link>
      </div>
    </section>
  );
};

export default GetinTouch;
