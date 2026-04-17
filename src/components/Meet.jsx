import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import meet from "../assets/meet/meet.png";
import { createMeeting } from "../api/meetingApi"; // 👈 separate API file

const Meet = () => {
  const [date, setDate] = useState(new Date());

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // handle input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      date: date.toISOString(), // send selected date
    };

    try {
      const res = await createMeeting(payload);
      console.log(res);

      alert("Meeting booked successfully ✅");

      // reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
      });
    } catch (err) {
      console.error(err);
      alert("Error booking meeting ❌");
    }
  };

  return (
    <section className="py-5" style={{ background: "#f4f7f3" }}>
      <div className="container">
        <h3 className="text-center mb-4">
          Book a <span style={{ color: "#3a7b20" }}>Meeting</span>
        </h3>

        <div className="row justify-content-center align-items-center g-4">
          {/* LEFT */}
          <div className="col-lg-5">
            <div className="p-4 shadow-sm bg-white rounded-4">
              <div className="text-center mb-3">
                <img src={meet} alt="meeting" style={{ width: "140px" }} />
              </div>

              <form
                onSubmit={handleSubmit}
                className="d-flex flex-column gap-3"
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="custom-input"
                  required
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="custom-input"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="custom-input"
                  required
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

          {/* RIGHT */}
          <div className="col-lg-4">
            <div className="p-3 shadow-sm text-center bg-white rounded-4">
              <h5 className="mb-3">Select Date</h5>

              <Calendar onChange={setDate} value={date} />

              <p className="mt-3 fw-medium">{date.toDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meet;
