import React from "react";
import servicesImage from "../../assets/servicesimages/services.png"; // 🔥 replace with your actual image path

const Services = () => {
  return (
    <section className="container my-5">
      <div className="row align-items-center">
        {/* Left side: Image */}
        <div className="col-lg-6 text-center mb-4 mb-lg-0">
          <img
            src={servicesImage}
            alt="Startup illustration"
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>
        <div className="col-lg-6  mb-4 mb-lg-0">
          <h2 className="fw-bold mb-3" style={{ fontSize: "32px" }}>
            Our <span style={{ color: "#68D53D" }}>Services</span>
          </h2>
          <p className="mb-4" style={{ fontSize: "24px", color: "#6D6D6D" }}>
            We are an innovative IT startup specializing in website development,
            mobile applications, and our own cutting‑edge digital products.
            <br />
            Our focus is on delivering scalable, user‑friendly, and
            high‑performance solutions that help businesses grow in a
            competitive digital world.
          </p>
        </div>

        {/* Right side: Text + Service boxes */}
        <div className="col-lg-12">
          {/* Service boxes */}
          <div className="row g-4 justify-content-center">
            {/* Website */}
            <div className="col-md-4 d-flex justify-content-center">
              <div
                className="p-4 rounded-3 shadow-sm bg-light w-100"
                style={{ maxWidth: "350px", minHeight: "280px" }} // reduced width, increased height
              >
                <h4
                  className="mb-2 text-center"
                  style={{ fontSize: "22px", fontWeight: "600" }}
                >
                   Website
                </h4>
                <p
                  style={{
                    fontSize: "22px",
                    textAlign: "justify",
                    color: "#6D6D6D",
                    lineHeight: "2.6",
                    margin: 0,
                  }}
                >
                  We specialize in professional website development, creating
                  responsive, user-friendly, and visually engaging websites that
                  help businesses build a strong online presence.
                </p>
              </div>
            </div>

            {/* Mobile apps */}
            <div className="col-md-4 d-flex justify-content-center">
              <div
                className="p-4 rounded-3 shadow-sm bg-light w-100"
                style={{ maxWidth: "350px", minHeight: "280px" }}
              >
                <h4
                  className="mb-2 text-center"
                  style={{ fontSize: "22px", fontWeight: "600" }}
                >
                   Mobile apps
                </h4>
                <p
                  style={{
                    fontSize: "22px",
                    textAlign: "justify",
                    color: "#6D6D6D",
                    lineHeight: "2.6",
                    margin: 0,
                  }}
                >
                  Our mobile app development focuses on delivering
                  high-performance, intuitive, and scalable applications for
                  both Android and iOS platforms, ensuring seamless user
                  experiences.
                </p>
              </div>
            </div>

            {/* Own product */}
            <div className="col-md-4 d-flex justify-content-center">
              <div
                className="p-4 rounded-3 shadow-sm bg-light w-100"
                style={{ maxWidth: "350px", minHeight: "280px" }}
              >
                <h4
                  className="mb-2 text-center"
                  style={{ fontSize: "22px", fontWeight: "600" }}
                >
                   Own product
                </h4>
                <p
                  style={{
                    fontSize: "22px",
                    textAlign: "justify",
                    color: "#6D6D6D",
                    lineHeight: "2.6",
                    margin: 0,
                  }}
                >
                  We also design and develop our own innovative products,
                  combining creativity and advanced technology to solve
                  real-world problems and deliver value-driven solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
