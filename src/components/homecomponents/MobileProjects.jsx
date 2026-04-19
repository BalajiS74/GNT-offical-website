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
        <div className="row g-3 mt-5">
          {apps.map((img, idx) => (
            <div key={idx} className="col-6 col-md-6 col-lg-3">
              <div className="app-card">
                <img src={img} alt={`App ${idx + 1}`} className="app-img" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INTERNAL CSS */}
      <style>{`
        .app-card {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0, 128, 0, 0.25);
          background: #fff;
        }

        .app-img {
          width: 100%;
          height: auto; /* ✅ FULL HEIGHT */
          display: block;
        }

        /* Optional: slight hover */
        .app-card:hover {
          transform: translateY(-5px);
          transition: 0.3s;
        }
      `}</style>
    </section>
  );
};

export default MobileProjects;
