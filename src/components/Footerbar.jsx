import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router";
import mapimage from "../assets/map.png";

const icons = [
  {
    Icon: FaInstagram,
    link: "https://www.instagram.com/growth_nest_tech_solution/",
  },
  { Icon: FaLinkedin, link: "https://linkedin.com/in/yourprofile" },
  { Icon: FaFacebook, link: "https://facebook.com/yourprofile" },
  { Icon: MdOutlineEmail, link: "mailto:prabhassurya601@gmail.com" },
];

const Footerbar = () => {
  return (
    <footer
      className="pt-5 pb-3"
      style={{
        background: "linear-gradient(135deg, #3a7b20, #63D13E)",
        color: "#fff",
      }}
    >
      <div className="container">
        <div className="row g-4 text-center text-md-start">
          {/* COLUMN 1 */}
          <div className="col-12 col-md-3">
            <h4 className="fw-bold mb-3">GROWTHNEST</h4>
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Service", path: "/service" },
            ].map((item) => (
              <p key={item.name} className="mb-2">
                <Link to={item.path} className="footer-link">
                  {item.name}
                </Link>
              </p>
            ))}
          </div>

          {/* COLUMN 2 */}
          <div className="col-12 col-md-3">
            <h5 className="fw-semibold mb-3">Courses</h5>
            {[
              "Python / Java Full Stack",
              "UI/UX Design",
              "Digital Marketing",
              "AI / ML",
              "Data Analytics",
            ].map((item) => (
              <p key={item} className="mb-2 footer-text">
                {item}
              </p>
            ))}
          </div>

          {/* COLUMN 3 */}
          <div className="col-12 col-md-3">
            <h5 className="fw-semibold mb-3">Connect</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mb-3 flex-wrap">
              {icons.map(({ Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target={link.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
            <p className="footer-text mb-1">📞 +91 63693 47439</p>
            <p className="footer-text">📧 growthnest@gmail.com</p>
          </div>

          {/* COLUMN 4 - MAP */}
          <div className="col-12 col-md-3 text-center">
            <img
              src={mapimage}
              alt="map"
              className="img-fluid rounded-4 shadow footer-map"
            />
          </div>
        </div>

        {/* Bottom */}
        <hr className="my-4" style={{ opacity: "0.2" }} />
        <p className="text-center mb-0 small" style={{ opacity: "0.8" }}>
          © 2026 GrowthNest. All rights reserved.
        </p>
      </div>

      {/* 🔥 CSS */}
      <style>
        {`
        .footer-link {
          text-decoration: none;
          color: #fff;
          opacity: 0.8;
          transition: 0.3s;
        }
        .footer-link:hover {
          opacity: 1;
          transform: translateX(5px);
        }
        .footer-text {
          opacity: 0.85;
          font-size: 14px;
        }
        .social-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.15);
          border-radius: 50%;
          transition: 0.3s;
          color: #fff;
        }
        .social-icon:hover {
          background: #fff;
          color: #3a7b20;
          transform: scale(1.15) rotate(5deg);
        }
        .footer-map {
          max-height: 160px;
          object-fit: cover;
          transition: 0.3s;
        }
        .footer-map:hover {
          transform: scale(1.05);
        }
        `}
      </style>
    </footer>
  );
};

export default Footerbar;
