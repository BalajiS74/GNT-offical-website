import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import app1 from "../../assets/apps/app1.jpeg";
import app2 from "../../assets/apps/app2.jpeg";
import app3 from "../../assets/apps/app3.jpeg";
import app4 from "../../assets/apps/app4.jpeg";

const apps = [app1, app2, app3, app4];

const MobileProjects = () => {
  return (
    <section style={{ padding: "40px 0", background: "#ffffff" }}>
      <div className="container">
          {/* <h1 className="text-center fw-bold mb-4">
            <span style={{ color: "#3a7b20" }}>App</span> Development
          </h1> */}
        <div className="row g-3 mt-5">
          {apps.map((img, idx) => (
            <div key={idx} className="col-md-3 col-12">
              <img
                src={img}
                alt={`App ${idx + 1}`}
                className="app-img"
                height={"400px"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .app-img {
          object-fit: cover;
          border-radius: 8px;
          display: block;
          box-shadow: 0 6px 20px rgba(0, 128, 0, 0.4); /* green shade */
        }
      `}</style>
    </section>
  );
};

export default MobileProjects;
