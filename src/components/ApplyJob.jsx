import React, { useState } from "react";
import application from "../assets/servicesimages/application.png";
import "./applyjob.css"; // 👈 add this

const ApplyJob = () => {
  const [step, setStep] = useState(1);

  return (
    <section className="apply-bg py-5">
      <div className="container">
        {/* Heading */}
        <h2 className="text-center mb-5 fade-in">
          Job <span className="text-success">Apply</span> 🕴️
        </h2>

        <div className="row align-items-center justify-content-center">
          {/* LEFT IMAGE */}
          <div className="col-lg-6 text-center mb-4 mb-lg-0">
            <img
              src={application}
              alt="application"
              className="img-fluid floating-img"
              style={{ maxWidth: "95%" }}
            />
          </div>

          {/* RIGHT FORM */}
          <div className="col-lg-6">
            <div className="form-card fade-up">
              {/* Step Indicator */}
              <div className="text-center mb-4">
                <small>Step {step} of 3</small>

                <div className="progress mt-2" style={{ height: "8px" }}>
                  <div
                    className="progress-bar progress-anim"
                    style={{
                      width: `${(step / 3) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* FORM CONTENT */}
              <div key={step} className="step-anim">
                {/* STEP 1 */}
                {step === 1 && (
                  <>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="form-control mb-3 custom-input"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control mb-3 custom-input"
                    />
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="form-control mb-3 custom-input"
                    />
                  </>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <>
                    <select className="form-select mb-3 custom-input">
                      <option>Select Position</option>
                      <option>Frontend Developer</option>
                      <option>Backend Developer</option>
                      <option>Full Stack Developer</option>
                      <option>UI/UX Designer</option>
                    </select>

                    <input
                      type="file"
                      className="form-control mb-3 custom-input"
                    />
                  </>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <textarea
                    rows="5"
                    placeholder="Cover Letter..."
                    className="form-control mb-3 custom-input"
                  ></textarea>
                )}
              </div>

              {/* BUTTONS */}
              <div className="d-flex justify-content-between mt-4">
                {step > 1 && (
                  <button
                    className="btn btn-outline-secondary px-4"
                    onClick={() => setStep(step - 1)}
                  >
                    Back
                  </button>
                )}

                {step < 3 ? (
                  <button
                    className="btn next-btn px-4"
                    onClick={() => setStep(step + 1)}
                  >
                    Next →
                  </button>
                ) : (
                  <button className="btn submit-btn w-100">Submit ✔</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyJob;
