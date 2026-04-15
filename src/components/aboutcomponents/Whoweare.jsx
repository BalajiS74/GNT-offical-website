// src/components/aboutcomponents/Whoweare.jsx
import React from "react";
import GlobalBtn from "../global/GlobalBtn"; // assuming you already created GlobalBtn
import aboutImage from "../../assets/about/aboutImage.png"; // replace with your uploaded illustration

const Whoweare = () => {
  return (
    <section className="container my-5">
      <div className="row align-items-center">
        {/* Left side: text */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-4" style={{ fontSize: "42px" }}>
            Who We <span style={{ color: "#68D53D" }}>are?</span>
          </h2>
          <p className="mb-4" style={{ fontSize: "26px" }}>
            We are a team of passionate individuals dedicated to empowering
            talent by creating opportunities to learn, grow, and excel. We
            nurture natural abilities while helping individuals develop new
            skills for a successful future.
          </p>
          <GlobalBtn
            btnName={"Meet"}
            px={"5"}
            style={{ width: "300px", marginTop: "20px", fontSize: "24px" }}
          />
        </div>

        {/* Right side: image */}
        <div className="col-md-6 text-center">
          <img
            src={aboutImage}
            alt="Who we are illustration"
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Whoweare;
