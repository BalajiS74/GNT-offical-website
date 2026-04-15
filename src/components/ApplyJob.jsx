import React from "react";
import application from "../assets/servicesimages/application.png";

const ApplyJob = () => {
  return (
    <section className="container my-5">
      {/* Title */}
      <h2 className="text-center fw-bold mb-5" style={{ fontSize: "32px" }}>
        Job <span style={{ color: "#68D53D" }}>Apply</span>{" "}
        <span role="img" aria-label="suit">
          🕴️
        </span>
      </h2>

      {/* Two-column layout */}
      <div className="row align-items-center">
        {/* Left side image */}
        <div className="col-md-6 mb-4 mb-md-0 text-center">
          <img
            src={application}
            alt="Job application illustration"
            className="img-fluid rounded-4 "
          />
        </div>

        {/* Right side form */}
        <div className="col-md-6">
          <form
            className="p-3 rounded-4 shadow-lg bg-light"
            style={{ maxWidth: "90%" }}
          >
            {/* Full name */}
            <div className="mb-3">
              <label
                className="form-label fw-semibold"
                style={{ fontSize: "16px" }}
              >
                Full name
              </label>
              <input
                type="text"
                className="form-control border-success p-2"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label
                className="form-label fw-semibold"
                style={{ fontSize: "16px" }}
              >
                Email
              </label>
              <input
                type="email"
                className="form-control border-success p-2"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone number */}
            <div className="mb-3">
              <label
                className="form-label fw-semibold"
                style={{ fontSize: "16px" }}
              >
                Phone number
              </label>
              <input
                type="tel"
                className="form-control border-success p-2"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Position selection */}
            <div className="mb-3">
              <label
                className="form-label fw-semibold"
                style={{ fontSize: "16px" }}
              >
                Position applying for
              </label>
              <select className="form-select border-success p-2">
                <option value="">Select a position</option>
                <option value="frontend">Frontend Developer</option>
                <option value="backend">Backend Developer</option>
                <option value="fullstack">Full Stack Developer</option>
                <option value="uiux">UI/UX Designer</option>
                <option value="marketing">Digital Marketing</option>
              </select>
            </div>

            {/* Resume upload */}
            <div className="mb-3">
              <label
                className="form-label fw-semibold"
                style={{ fontSize: "16px" }}
              >
                Submit your resume
              </label>
              <input
                type="file"
                className="form-control border-success p-2"
                accept=".pdf,.doc,.docx"
              />
            </div>

            {/* Cover letter */}
            <div className="mb-3">
              <label
                className="form-label fw-semibold"
                style={{ fontSize: "16px" }}
              >
                Cover letter
              </label>
              <textarea
                className="form-control border-success p-2"
                rows="4"
                placeholder="Write a short cover letter..."
              ></textarea>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="btn w-100 fw-bold"
              style={{
                backgroundColor: "#63D13E",
                color: "white",
                fontSize: "18px",
                padding: "10px",
              }}
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplyJob;
