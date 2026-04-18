import React from "react";
import ceoImage from "../../assets/about/ceoImage.jpeg";
import managerImage from "../../assets/about/managerImage.jpeg";
import appdev1 from "../../assets/about/appdev1.png";
import websitedev from "../../assets/about/websitedev.png";
import "bootstrap/dist/css/bootstrap.min.css";
import uiuxdesigner from "../../assets/about/uiuxdesigner.png";
import admin1 from "../../assets/about/admin1.png";
import digitalmarketing from "../../assets/about/digitalmarketing.jpeg";
import admin2 from "../../assets/about/admin2.jpeg"
export const Teammates = () => {
  const team = [
    { name: "Sathish", role: "CEO", photo: managerImage },
    { name: "Berlin ", role: "Full stack Developer", photo: websitedev },
    { name: "shiyamala", role: "Designer", photo: uiuxdesigner },
    { name: "Balaji S", role: "App Developer", photo: appdev1 },
    { name: "Jothi", role: "Admin", photo: admin1 },
    {
      name: "Suresh Kumar",
      role: "Digital Marketing",
      photo: digitalmarketing,
    },
    { name: "Surya Prabha ", role: "Growth Supporter", photo: ceoImage },
    { name: "Venkadesh", role: "Growth Supporter", photo: admin2 },
  ];

  return (
    <section className="container py-5">
      {/* Heading */}
      <h1 className="text-center fw-bold mb-5">
        Our <span style={{ color: "#3a7b20" }}>Team</span>
      </h1>

      <div className="row g-5 justify-content-center mt-5">
        {team.map((member, index) => (
          <div className="col-10 col-sm-6 col-md-4 col-lg-3" key={index}>
            <div className="card border-0 shadow-sm team-card">
              {/* Image */}
              <img
                src={member.photo}
                alt={member.name}
                className="card-img-top"
                style={{
                  height: "310px",
                  objectFit: "cover",
                  borderRadius: "12px 12px 0 0",
                }}
              />

              {/* Content */}
              <div className="card-body text-center p-2">
                <h6 className="fw-bold mb-1 small">{member.name}</h6>
                <p className="text-muted mb-0" style={{ fontSize: "0.8rem" }}>
                  {member.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
