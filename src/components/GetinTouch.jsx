import React from "react";
import { Link } from "react-router";
const GetinTouch = () => {
  return (
    <section className="container my-5">
      {/* Title */}
      <h2 className="text-center fw-bold mb-4">
        get in <span style={{ color: "#3a7b20" }}>touch</span>
      </h2>

      {/* Contact Form */}
      <form className="mx-auto" style={{ maxWidth: "600px" }}>
        <div className="mb-3">
          <label className="form-label">Full name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Write your message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: "#3a7b20", color: "white", width: "100%" }}
        >
          Submit
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
