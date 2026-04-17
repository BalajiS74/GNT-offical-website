import React, { useState } from "react";
import { applyJob } from "../api/jobApi";
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

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [apiError, setApiError] = useState("");

  // 🔹 Handle Input
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });

    setErrors({ ...errors, [name]: "" });
    setApiError("");
  };

  // 🔹 Validation
  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Name is required";
      }

      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = "Invalid email";
      }

      if (!formData.phone) {
        newErrors.phone = "Phone is required";
      } else if (!/^[0-9]{10}$/.test(formData.phone)) {
        newErrors.phone = "Phone must be 10 digits";
      }
    }

    if (step === 2) {
      if (!formData.position) {
        newErrors.position = "Select a position";
      }

      if (!formData.resume) {
        newErrors.resume = "Resume is required";
      }
    }

    if (step === 3) {
      if (!formData.coverLetter.trim()) {
        newErrors.coverLetter = "Cover letter is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🔹 Next Step
  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  // 🔹 Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep()) return;

    try {
      setLoading(true);
      setSuccess("");
      setApiError("");

      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      await applyJob(data);

      setSuccess("Application submitted successfully ✅");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        resume: null,
        coverLetter: "",
      });

      setStep(1);
      setErrors({});
    } catch (err) {
      setApiError("Failed to submit application ❌");
    } finally {
      setLoading(false);
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

        {/* SUCCESS / ERROR */}
        {success && (
          <div className="alert alert-success text-center">{success}</div>
        )}
        {apiError && (
          <div className="alert alert-danger text-center">{apiError}</div>
        )}

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card shadow-sm border-0 rounded-3 p-3">
              {/* Progress */}
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-2">
                  <small>Step {step} of 3</small>
                  <small className="text-success fw-bold">
                    {Math.round((step / 3) * 100)}%
                  </small>
                </div>
                <div className="progress" style={{ height: "5px" }}>
                  <div
                    className="progress-bar bg-success"
                    style={{ width: `${(step / 3) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit}>
                {/* STEP 1 */}
                {step === 1 && (
                  <>
                    <div className="mb-2">
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={`form-control ${
                          errors.fullName && "is-invalid"
                        }`}
                      />
                      <div className="invalid-feedback">{errors.fullName}</div>
                    </div>

                    <div className="mb-2">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`form-control ${
                          errors.email && "is-invalid"
                        }`}
                      />
                      <div className="invalid-feedback">{errors.email}</div>
                    </div>

                    <div className="mb-2">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`form-control ${
                          errors.phone && "is-invalid"
                        }`}
                      />
                      <div className="invalid-feedback">{errors.phone}</div>
                    </div>
                  </>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <>
                    <div className="mb-2">
                      <select
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        className={`form-control ${
                          errors.position && "is-invalid"
                        }`}
                      >
                        <option value="">Select Position</option>
                        <option>Frontend Developer</option>
                        <option>Backend Developer</option>
                        <option>UI/UX Designer</option>
                      </select>
                      <div className="invalid-feedback">{errors.position}</div>
                    </div>

                    <div className="mb-2">
                      <input
                        type="file"
                        name="resume"
                        onChange={handleInputChange}
                        className={`form-control ${
                          errors.resume && "is-invalid"
                        }`}
                      />
                      <div className="invalid-feedback">{errors.resume}</div>
                    </div>
                  </>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <div className="mb-2">
                    <textarea
                      name="coverLetter"
                      rows="4"
                      placeholder="Cover Letter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      className={`form-control ${
                        errors.coverLetter && "is-invalid"
                      }`}
                    ></textarea>
                    <div className="invalid-feedback">{errors.coverLetter}</div>
                  </div>
                )}

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
                      className="btn btn-success w-100"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-success w-100"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Submit"}
                    </button>
                  )}
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
