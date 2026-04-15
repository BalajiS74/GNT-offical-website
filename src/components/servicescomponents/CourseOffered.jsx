import React from "react";
import "./CourseOffered.css"; // create this CSS file

const CourseOffered = () => {
  const courses = [
    "Python Full Stack",
    "Java Full Stack",
    "UI/UX Designing",
    "Digital Marketing",
    "Cloud Computing",
    "Networking",
    "MERN / MEAN Stack",
    "AI / ML Course",
    "Data Analytics",
    "Data Science",
    "Flutter",
    "React Native with Expo",
  ];

  return (
    <section className="container my-5">
      {/* Heading */}
      <h2 className="text-center fw-bold mb-5" style={{ fontSize: "36px" }}>
        Courses <span style={{ color: "#68D53D" }}>Offering</span>
      </h2>

      {/* Grid of courses */}
      <div className="row g-4">
        {courses.map((course, index) => (
          <div key={index} className="col-md-4 col-sm-6">
            <div
              className="course-card p-4 text-center rounded-3 shadow-sm"
              style={{
                backgroundColor: "#f8f9fa",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              {course}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseOffered;
