import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import meet from "../assets/meet/meet.png";
import { createMeeting } from "../api/meetingApi";
import { motion } from "framer-motion";

const Meet = () => {
  const [date, setDate] = useState(new Date());

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({ loading: true, success: "", error: "" });

    const payload = {
      ...formData,
      date: date.toISOString(),
    };

    try {
      await createMeeting(payload);

      setStatus({
        loading: false,
        success: "Meeting booked successfully!",
        error: "",
      });

      setFormData({ name: "", email: "", phone: "" });
    } catch (err) {
      setStatus({
        loading: false,
        success: "",
        error: "Failed to book meeting. Try again.",
      });
    }
  };

  return (
    <section className="meet-section">
      <div className="container">
        {/* HEADER */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="fw-bold">
            Book a <span>Meeting</span>
          </h2>
          <p className="text-muted">Schedule a session with our team easily</p>
        </motion.div>

        <div className="row g-4 align-items-stretch">
          {/* LEFT FORM */}
          <div className="col-lg-6">
            <motion.div
              className="form-card"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="text-center mb-3">
                <img src={meet} alt="" className="meet-img" />
              </div>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control custom-input mb-3"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control custom-input mb-3"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control custom-input mb-3"
                  required
                />

                {/* STATUS MESSAGE */}
                {status.success && (
                  <div className="alert alert-success py-2">
                    {status.success}
                  </div>
                )}
                {status.error && (
                  <div className="alert alert-danger py-2">{status.error}</div>
                )}

                <button
                  type="submit"
                  className="btn submit-btn w-100"
                  disabled={status.loading}
                >
                  {status.loading ? "Booking..." : "Book Meeting"}
                </button>
              </form>
            </motion.div>
          </div>

          {/* RIGHT CALENDAR */}
          <div className="col-lg-4">
            <motion.div
              className="calendar-card"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h5 className="mb-3 text-center">Select Date</h5>

              <Calendar onChange={setDate} value={date} />

              <div className="selected-date text-center mt-3">
                {date.toDateString()}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style>
        {`
        .meet-section {
          background: #f6f8f5;
          padding: 80px 0;
        }

        h2 span {
          color: #3a7b20;
        }

        /* FORM CARD */
        .form-card {
          background: white;
          padding: 30px;
          border-radius: 14px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
          height: 100%;
        }

        .meet-img {
          width: 120px;
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

        /* CALENDAR CARD */
        .calendar-card {
          background: white;
          padding: 25px;
          border-radius: 14px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
          height: 100%;
        }

        .selected-date {
          font-weight: 600;
          color: #3a7b20;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .form-card,
          .calendar-card {
            padding: 20px;
          }
        }
        `}
      </style>
    </section>
  );
};

export default Meet;
