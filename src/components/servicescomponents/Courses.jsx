import React from "react";

const CourseCard = ({ title, price, description, features, highlight }) => {
  return (
    <div
      className="p-4 shadow-sm"
      style={{
        background: highlight ? "#68D53D" : "#1a1a1a",
        color: highlight ? "#000" : "#fff",
        borderRadius: "16px",
        width: "280px",
        transform: highlight ? "scale(1.05)" : "scale(1)",
        transition: "0.3s",
      }}
    >
      {/* Title */}
      <h5
        className="mb-2 fw-semibold"
        style={{ color: highlight ? "#000" : "#68D53D" }}
      >
        {title}
      </h5>

      {/* Price */}
      <h4 className="mb-3 fw-bold">{price}</h4>

      {/* Description */}
      <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>{description}</p>

      {/* Features */}
      <ul className="list-unstyled mt-3 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="mb-2">
            ✔ {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      {/* <button
        className="btn w-100"
        style={{
          background: highlight ? "#000" : "#68D53D",
          color: "#fff",
          borderRadius: "8px",
        }}
      >
        Enroll Now
      </button> */}
    </div>
  );
};

const Courses = () => {
  const coursePlans = [
    {
      title: "3 Months Program",
      price: "₹15,000 + Job (₹5k/month)",
      description: "Fast-track training with job opportunity.",
      features: [
        "Job support",
        "Monthly earning opportunity",
        "Practical projects",
      ],
      highlight: true,
    },
    {
      title: "1 Year Program",
      price: "₹2,200 / year",
      description: "For 2nd, 3rd & final year students.",
      features: [
        "Long-term learning",
        "College-friendly schedule",
        "Career guidance",
      ],
    },
    {
      title: "1 Month Basic",
      price: "₹1,000",
      description: "Excel, Word & basic computer skills.",
      features: [
        "Beginner friendly",
        "Office tools training",
        "Quick completion",
      ],
    },
    {
      title: "4–6 Months Course",
      price: "₹5,000",
      description: "Intermediate level skill development.",
      features: ["Skill-based training", "Project work", "Flexible duration"],
    },
  ];

  return (
    <div className="py-5" style={{ background: "#f5f5f5" }}>
      <h2 className="text-center mb-5">
        Our <span style={{ color: "#3a7b20" }}>Courses</span>
      </h2>

      <div className="d-flex flex-wrap justify-content-center gap-4">
        {coursePlans.map((plan, index) => (
          <CourseCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
