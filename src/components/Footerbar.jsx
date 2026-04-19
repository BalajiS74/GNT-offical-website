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
  { Icon: FaLinkedin, link: "" },
  { Icon: FaFacebook, link: "" },
  { Icon: MdOutlineEmail, link: "mailto:growthnesttechsolution@gmail.com" },
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
            <h5 className="fw-bold mb-3">Growth Nest Tech Solution</h5>
            {[
              { name: "Home", path: "/" },
              { name: "Service", path: "/service" },
              { name: "Career", path: "/career" },
              { name: "Events", path: "/events" },
              { name: "About", path: "/about" },
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
            <p className="footer-text mb-1 text-black">📞 +91 63693 47439</p>
            <p className="footer-text text-black">
              📧 growthnesttechsolution@gmail.com
            </p>
          </div>

          {/* COLUMN 4 - GOOGLE MAP */}
          <div className="col-12 col-md-3 text-center">
            <div className="map-container rounded-4 overflow-hidden shadow footer-map">
              <iframe
                title="Growth Nest Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.48779149272636!2d77.41641077804206!3d8.710091416761001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0439003d56a7b7%3A0x2414b7237c95821!2sGrowthNest%20Tech%20Solution!5e0!3m2!1sen!2sin!4v1776495304307!5m2!1sen!2sin"
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                width="100%"
                height="160"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
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
        .map-container {
  height: 160px;
  transition: 0.3s;
}

.map-container:hover {
  transform: scale(1.05);
}
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
