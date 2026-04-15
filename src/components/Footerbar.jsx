import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import mapimage from "../assets/map.png";

const Footerbar = () => {
  return (
    <footer style={{ backgroundColor: "#68D53D", padding: "60px 0 20px 0" }}>
      <div className="container ">
        {/* Main Footer Content */}
        <div className="row d-flex align-items-center justify-content-between">
          {/* COLUMN 1 - GROWTHNEST */}
          <div className="col-md-3 mb-4">
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "700",
                color: "#ffffff",
                marginBottom: "20px",
              }}
            >
              GROWTHNEST
            </h3>
            <ul className="list-unstyled">
              {["Home", "About", "Service", "Course"].map((item) => (
                <li key={item} className="mb-2">
                  <a
                    href="#"
                    style={{
                      fontSize: "14px",
                      color: "#ffffff",
                      textDecoration: "none",
                      opacity: "0.85",
                      transition: "opacity 0.3s",
                    }}
                    onMouseEnter={(e) => (e.target.style.opacity = "1")}
                    onMouseLeave={(e) => (e.target.style.opacity = "0.85")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 2 - TRAINING COURSES */}
          <div className="col-md-4 mb-4">
            <h4
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#ffffff",
                marginBottom: "20px",
              }}
            >
              Training Courses
            </h4>
            <ul className="list-unstyled">
              {[
                "Python, Java Full Stack",
                "UI/UX Design",
                "Digital Marketing",
                "AI/ML Course",
                "Data Analytics",
              ].map((item) => (
                <li key={item} className="mb-2">
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#ffffff",
                      opacity: "0.85",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 - CONNECT WITH */}
          <div className="col-md-3 mb-4">
            <h4
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#ffffff",
                marginBottom: "20px",
              }}
            >
              Connect with
            </h4>

            {/* Social Icons */}
            <div className="d-flex gap-3 mb-3">
              <a
                href="#"
                style={{
                  color: "#ffffff",
                  fontSize: "28px",
                  opacity: "0.85",
                  transition: "opacity 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "1")}
                onMouseLeave={(e) => (e.target.style.opacity = "0.85")}
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                style={{
                  color: "#ffffff",
                  fontSize: "28px",
                  opacity: "0.85",
                  transition: "opacity 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "1")}
                onMouseLeave={(e) => (e.target.style.opacity = "0.85")}
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                style={{
                  color: "#ffffff",
                  fontSize: "28px",
                  opacity: "0.85",
                  transition: "opacity 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "1")}
                onMouseLeave={(e) => (e.target.style.opacity = "0.85")}
              >
                <FaFacebook />
              </a>
            </div>

            {/* Map */}

            {/* Contact Info */}
            <p
              style={{
                fontSize: "14px",
                color: "#ffffff",
                marginBottom: "8px",
                opacity: "0.85",
              }}
            >
              +91 9876543210
            </p>
            <p style={{ fontSize: "14px", color: "#ffffff", opacity: "0.85" }}>
              growthnest@gmail.com
            </p>
          </div>
          <div className="col-md-2 mb-4">
            <div
              style={{
                width: "100%",
                maxWidth: "220px",
                height: "170px",
                marginBottom: "15px",
              }}
            >
              <img
                src={mapimage}
                alt="map"
                className="img-fluid rounded"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <hr
          style={{
            backgroundColor: "#ffffff",
            opacity: "0.2",
            margin: "20px 0",
          }}
        />
        <div
          className="text-center"
          style={{ fontSize: "13px", color: "#ffffff", opacity: "0.7" }}
        >
          Growthnest@2026 All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footerbar;
