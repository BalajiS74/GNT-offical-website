import React, { useState } from "react";
import { applyJob } from "../api/jobApi";
import { motion, AnimatePresence } from "framer-motion";

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

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [apiError, setApiError] = useState("");

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });

    setErrors({ ...errors, [name]: "" });
    setApiError("");
  };

  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.fullName) newErrors.fullName = "Required";
      if (!formData.email) newErrors.email = "Required";
      if (!formData.phone) newErrors.phone = "Required";
    }

    if (step === 2) {
      if (!formData.position) newErrors.position = "Required";
      if (!formData.resume) newErrors.resume = "Required";
    }

    if (step === 3) {
      if (!formData.coverLetter) newErrors.coverLetter = "Required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep(step + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    try {
      setLoading(true);
      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      await applyJob(data);

      setSuccess("Application submitted successfully!");
      setStep(1);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        resume: null,
        coverLetter: "",
      });
    } catch {
      setApiError("Submission failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="apply-section">
      <div className="container">
        {/* HEADER */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="fw-bold">
            Apply for <span>Job</span>
          </h2>
          <p className="text-muted">Complete the steps to join our team</p>
        </motion.div>

        {/* STATUS */}
        {success && <div className="alert alert-success">{success}</div>}
        {apiError && <div className="alert alert-danger">{apiError}</div>}

        {/* STEP INDICATOR */}
        <div className="stepper mb-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`step ${step >= i ? "active" : ""}`}>
              {i}
            </div>
          ))}
        </div>

        {/* FORM CARD */}
        <motion.div className="form-card" layout>
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {/* STEP 1 */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                >
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className={`form-control mb-2 ${errors.fullName && "is-invalid"}`}
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={`form-control mb-2 ${errors.email && "is-invalid"}`}
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className={`form-control ${errors.phone && "is-invalid"}`}
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </motion.div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                >
                  <select
                    name="position"
                    className={`form-control mb-2 ${errors.position && "is-invalid"}`}
                    value={formData.position}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Position</option>
                    <option>Frontend Developer</option>
                    <option>Backend Developer</option>
                    <option>UI/UX Designer</option>
                  </select>

                  <input
                    type="file"
                    name="resume"
                    className={`form-control ${errors.resume && "is-invalid"}`}
                    onChange={handleInputChange}
                  />
                </motion.div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                >
                  <textarea
                    rows="4"
                    name="coverLetter"
                    placeholder="Cover Letter"
                    className={`form-control ${errors.coverLetter && "is-invalid"}`}
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* BUTTONS */}
            <div className="d-flex gap-2 mt-3">
              {step > 1 && (
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setStep(step - 1)}
                >
                  Back
                </button>
              )}

              {step < 3 ? (
                <button
                  type="button"
                  className="btn submit-btn w-100"
                  onClick={handleNext}
                >
                  Next →
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn submit-btn w-100"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              )}
            </div>
          </form>
        </motion.div>
      </div>

      {/* STYLES */}
      <style>
        {`
        .apply-section {
          padding: 80px 0;
          background: #f7f9f6;
        }

        h2 span {
          color: #3a7b20;
        }

        .form-card {
          max-width: 600px;
          margin: auto;
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
        }

        .submit-btn {
          background: #3a7b20;
          color: white;
        }

        /* STEPPER */
        .stepper {
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        .step {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: #ddd;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step.active {
          background: #3a7b20;
          color: white;
        }
        `}
      </style>
    </section>
  );
};

export default ApplyJob;
