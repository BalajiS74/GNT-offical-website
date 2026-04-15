import React from "react";
import gntgroup from "../../assets/about/gntgroup.jpg"; // 🔥 replace with your actual group photo path

export const OurTeam = () => {
  return (
    <section className="container my-5 text-center">
      {/* Heading */}
      <h2 className="fw-bold mb-4" style={{ fontSize: "40px" }}>
        Our <span style={{ color: "#63D13E" }}>Team</span>
      </h2>

      {/* Image placeholder */}
      <div className="d-flex justify-content-center">
        <img
          src={gntgroup}
          alt="Our Team"
          style={{
            width: "100%",
            maxWidth: "1200px", // 🔥 large size
            height: "500px", // 🔥 fixed height
            objectFit: "cover",
            borderRadius: "12px",
            backgroundColor: "#eaeaea", // placeholder background
          }}
        />
      </div>
    </section>
  );
};
