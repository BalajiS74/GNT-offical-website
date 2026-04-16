import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import meet from "../assets/meet/meet.png";

const Meet = () => {
  const [date, setDate] = useState(new Date());

  return (
    <section className="py-5" style={{ background: "#f4f7f3" }}>
      <div className="container">
        {/* Heading */}
        <h3 className="text-center mb-4">
          Book a <span style={{ color: "#3a7b20" }}>Meeting</span>
        </h3>

        <div className="row justify-content-center align-items-center g-4">
          {/* LEFT SIDE */}
          <div className="col-lg-5">
            <div
              className="p-4 shadow-sm"
              style={{
                background: "#fff",
                borderRadius: "16px",
              }}
            >
              {/* Image */}
              <div className="text-center mb-3">
                <img
                  src={meet}
                  alt="meeting"
                  style={{
                    width: "140px", // 🔥 reduced size
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* Form */}
              <form className="d-flex flex-column gap-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="custom-input"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="custom-input"
                />

                <input
                  type="tel"
                  placeholder="Phone"
                  className="custom-input"
                />

                <button
                  type="submit"
                  style={{
                    background: "#3a7b20",
                    color: "#fff",
                    border: "none",
                    padding: "10px",
                    borderRadius: "8px",
                    fontWeight: "600",
                  }}
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-4">
            <div
              className="p-3 shadow-sm text-center"
              style={{
                background: "#fff",
                borderRadius: "16px",
              }}
            >
              <h5 className="mb-3">Select Date</h5>

              <Calendar
                onChange={setDate}
                value={date}
                className="custom-calendar"
              />

              <p className="mt-3 fw-medium">{date.toDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meet;
