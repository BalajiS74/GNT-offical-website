import React from "react";
// import ceoImage from "../assets/ceo.png"; // replace with your CEO photo
// import managerImage from "../assets/manager.png"; // replace with your Manager photo
// import leadImage from "../assets/teamlead.png"; // replace with your Team Lead photo
// import dev1Image from "../assets/dev1.png"; // replace with Developer photo
// import dev2Image from "../assets/dev2.png"; // replace with Developer photo
// import dev3Image from "../assets/dev3.png"; // replace with Developer photo
import image from "../../assets/about/image.png"
export const Teammates = () => {
  return (
    <section className="container my-5">
      {/* Title */}
      <h2 className="text-center fw-bold mb-5" style={{ fontSize: "40px" }}>
        Our <span style={{ color: "#63D13E" }}>Team</span> members
      </h2>

      {/* Team grid */}
      <div className="row g-4 justify-content-center">
        {/* Top row */}
        <div className="col-md-4">
          <div className="p-4 border rounded-3 text-center shadow-sm bg-light h-100">
            <img
              src={image}
              alt="CEO"
              className="img-fluid rounded-circle mb-3"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <h5 className="fw-bold">CEO</h5>
            <p className="text-muted">[Add CEO Name]</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-4 border rounded-3 text-center shadow-sm bg-light h-100">
            <img
              src={image}
              alt="Manager"
              className="img-fluid rounded-circle mb-3"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <h5 className="fw-bold">Manager</h5>
            <p className="text-muted">[Add Manager Name]</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-4 border rounded-3 text-center shadow-sm bg-light h-100">
            <img
              src={image}
              alt="Team Lead"
              className="img-fluid rounded-circle mb-3"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <h5 className="fw-bold">Team Lead</h5>
            <p className="text-muted">[Add Team Lead Name]</p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="col-md-4">
          <div className="p-4 border rounded-3 text-center shadow-sm bg-light h-100">
            <img
              src={image}
              alt="Developer"
              className="img-fluid rounded-circle mb-3"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <h5 className="fw-bold">Developer</h5>
            <p className="text-muted">[Add Developer Name]</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-4 border rounded-3 text-center shadow-sm bg-light h-100">
            <img
              src={image}
              alt="Developer"
              className="img-fluid rounded-circle mb-3"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <h5 className="fw-bold">Developer</h5>
            <p className="text-muted">[Add Developer Name]</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-4 border rounded-3 text-center shadow-sm bg-light h-100">
            <img
              src={image}
              alt="Developer"
              className="img-fluid rounded-circle mb-3"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <h5 className="fw-bold">Developer</h5>
            <p className="text-muted">[Add Developer Name]</p>
          </div>
        </div>
      </div>
    </section>
  );
};
