import React from "react";

const VisionMission = () => {
  return (
    <section className="container my-5">
      {/* Title */}
      <h2 className="text-center fw-bold mb-5">
        More <span style={{ color: "#68D53D" }}>about</span> us 🌍
      </h2>

      {/* Vision & Mission boxes */}
      <div className="row g-4">
        {/* Vision */}
        <div className="col-md-6">
          <div className="p-4 rounded-4 shadow-sm bg-light h-100">
            <h3 className="mb-3" style={{ textAlign: "center" }}>
              🌟 Vision
            </h3>
            <p style={{ fontSize: "22px", lineHeight:"70px" }}>
              To build a dynamic IT ecosystem where innovative startups thrive
              and aspiring professionals grow into skilled technology leaders,
              driving digital transformation globally.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="col-md-6">
          <div className="p-4 rounded-4 shadow-sm bg-light h-100">
            <h3 className="mb-3" style={{ textAlign: "center" }}>
              🚀 Mission
            </h3>
            <p style={{ fontSize: "22px", lineHeight:"70px" }}>
              To empower businesses by delivering cutting‑edge IT solutions
              while nurturing talent through career‑focused training, real‑world
              project experience, and continuous learning — bridging the gap
              between innovation and employability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
