import React, { useState } from "react";
import application from "../assets/servicesimages/application.png";

const ApplyJob = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
    coverLetter: "",
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const validateStep = () => {
    switch (step) {
      case 1:
        if (!formData.fullName || !formData.email || !formData.phone) {
          alert("Please fill all fields");
          return false;
        }
        if (!formData.email.includes("@")) {
          alert("Please enter a valid email");
          return false;
        }
        return true;
      case 2:
        if (!formData.position) {
          alert("Please select a position");
          return false;
        }
        if (!formData.resume) {
          alert("Please upload your resume");
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.coverLetter) {
      console.log("Form submitted:", formData);
      alert("Application submitted successfully!");
    } else {
      alert("Please fill in your cover letter");
    }
  };

  return (
    <section className="bg-light py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">
            Job <span className="text-success">Application</span>
          </h2>
          <p className="text-muted">Start your journey with us today</p>
        </div>

        <div className="row align-items-center">
          {/* Right Form */}
          <div className="col-lg-8 mx-auto">
            <div className="card shadow-sm border-0 rounded-3 p-3">
              {/* Progress Indicator */}
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-2">
                  <small className="text-muted">Step {step} of 3</small>
                  <small className="text-success fw-bold">
                    {Math.round((step / 3) * 100)}% Complete
                  </small>
                </div>
                <div className="progress" style={{ height: "5px" }}>
                  <div
                    className="progress-bar bg-success"
                    style={{ width: `${(step / 3) * 100}%` }}
                    role="progressbar"
                  ></div>
                </div>
              </div>

              {/* Step Indicators */}
              <div className="d-flex justify-content-between mb-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="text-center flex-grow-1">
                    <div
                      className={`rounded-circle bg-${step >= i ? "success" : "secondary"} 
              bg-opacity-${step >= i ? "100" : "25"} 
              text-${step >= i ? "white" : "secondary"} 
              d-inline-flex align-items-center justify-content-center mb-2`}
                      style={{
                        width: "30px",
                        height: "30px",
                        fontSize: "14px",
                        cursor: step > i ? "pointer" : "default",
                      }}
                      onClick={() => step > i && setStep(i)}
                    >
                      {step > i ? "✓" : i}
                    </div>
                    <small className="text-muted d-none d-md-block">
                      {i === 1 && "Personal"}
                      {i === 2 && "Professional"}
                      {i === 3 && "Final"}
                    </small>
                  </div>
                ))}
              </div>

              {/* Form Fields */}
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="animate__animated animate__fadeIn">
                    <div className="mb-2">
                      <label className="form-label fw-semibold">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        className="form-control custom-input"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-2">
                      <label className="form-label fw-semibold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control custom-input"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-2">
                      <label className="form-label fw-semibold">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-control custom-input"
                        placeholder="+1 234 567 8900"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                )}

                {/* Buttons */}
                <div className="d-flex gap-2 mt-3">
                  {step > 1 && (
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-sm px-3"
                      onClick={() => setStep(step - 1)}
                    >
                      ← Back
                    </button>
                  )}

                  <div className="flex-grow-1">
                    {step < 3 ? (
                      <button
                        type="button"
                        className="btn btn-success btn-sm w-100"
                        onClick={handleNext}
                      >
                        Next Step →
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-success btn-sm w-100"
                      >
                        Submit Application ✓
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyJob;
