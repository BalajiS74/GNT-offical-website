import React from "react";
import ceoImage from "../../assets/about/ceoImage.jpeg";
import managerImage from "../../assets/about/managerImage.jpeg";
import appdev1 from "../../assets/about/appdev1.png";
import websitedev from "../../assets/about/websitedev.png";
import "bootstrap/dist/css/bootstrap.min.css";
import uiuxdesigner from "../../assets/about/uiuxdesigner.png";
export const Teammates = () => {
  const team = [
    { name: "Suriya Prabha S", role: "President, CEO", photo: ceoImage },
    { name: "Sathish", role: "HR Manager", photo: managerImage },
    { name: "Berlin ", role: "website Developer", photo: websitedev },
    { name: "Balaji S", role: "App Developer", photo: appdev1 },
    { name: "shiyamala", role: "UI/UX Developer", photo: uiuxdesigner },
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
                  height: "280px",
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
