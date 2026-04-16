import React, { useState, useEffect, useRef } from "react";
import {
  FaMobile,
  FaServer,
  FaLaptopCode,
  FaBriefcase,
  FaGraduationCap,
  FaClock,
  FaMapMarkerAlt,
  FaRupeeSign,
  FaRegHeart,
  FaShareAlt,
  FaArrowRight,
} from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdWork, MdSchool, MdVerified } from "react-icons/md";

const CareerComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [hoveredJob, setHoveredJob] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const jobCategories = {
    flutter: {
      icon: <FaMobile size={24} />,
      name: "Flutter Developer",
      color: "#3a7b20",
      jobs: [
        {
          id: 1,
          title: "Flutter Developer Intern",
          level: "internship",
          experience: "0-6 months",
          salary: "₹15,000 - ₹25,000 / month",
          location: "Remote / Bangalore",
          type: "Internship",
          skills: ["Flutter", "Dart", "Firebase", "REST API"],
          description:
            "Looking for passionate Flutter developers to learn and work on real-world mobile applications.",
          openings: 5,
          deadline: "2024-12-31",
        },
        {
          id: 2,
          title: "Junior Flutter Developer",
          level: "fresher",
          experience: "0-1 year",
          salary: "₹3.5 - ₹5 LPA",
          location: "Bangalore",
          type: "Full-time",
          skills: ["Flutter", "Dart", "Git", "Provider/GetX"],
          description:
            "Entry-level position for freshers with Flutter knowledge. Great learning opportunity.",
          openings: 3,
          deadline: "2024-12-15",
        },
        {
          id: 3,
          title: "Senior Flutter Developer",
          level: "experience",
          experience: "3-5 years",
          salary: "₹12 - ₹18 LPA",
          location: "Bangalore / Hyderabad",
          type: "Full-time",
          skills: [
            "Flutter",
            "Dart",
            "Native iOS/Android",
            "BLoC",
            "Team Leadership",
          ],
          description:
            "Experienced Flutter developer to lead mobile app development and mentor junior developers.",
          openings: 2,
          deadline: "2024-12-20",
        },
      ],
    },
    backend: {
      icon: <FaServer size={24} />,
      name: "Backend Developer",
      color: "#3a7b20",
      jobs: [
        {
          id: 4,
          title: "Backend Developer Intern",
          level: "internship",
          experience: "0-6 months",
          salary: "₹15,000 - ₹25,000 / month",
          location: "Remote / Pune",
          type: "Internship",
          skills: ["Node.js", "Python", "MongoDB", "Express.js"],
          description:
            "Internship opportunity for backend enthusiasts to work on scalable server-side applications.",
          openings: 4,
          deadline: "2024-12-31",
        },
        {
          id: 5,
          title: "Junior Backend Developer",
          level: "fresher",
          experience: "0-1 year",
          salary: "₹4 - ₹6 LPA",
          location: "Pune",
          type: "Full-time",
          skills: ["Node.js", "Express", "PostgreSQL", "REST APIs"],
          description:
            "Fresher role for backend development with focus on API development and database management.",
          openings: 3,
          deadline: "2024-12-15",
        },
        {
          id: 6,
          title: "Senior Backend Engineer",
          level: "experience",
          experience: "4-7 years",
          salary: "₹15 - ₹25 LPA",
          location: "Bangalore / Remote",
          type: "Full-time",
          skills: ["Java/Go", "Microservices", "AWS", "Docker", "Kubernetes"],
          description:
            "Senior backend engineer to architect and build robust backend systems at scale.",
          openings: 2,
          deadline: "2024-12-20",
        },
      ],
    },
    frontend: {
      icon: <FaLaptopCode size={24} />,
      name: "Frontend Developer",
      color: "#3a7b20",
      jobs: [
        {
          id: 7,
          title: "Frontend Developer Intern",
          level: "internship",
          experience: "0-6 months",
          salary: "₹15,000 - ₹25,000 / month",
          location: "Remote / Mumbai",
          type: "Internship",
          skills: ["React", "HTML/CSS", "JavaScript", "Tailwind"],
          description:
            "Internship for frontend enthusiasts to build responsive and interactive web applications.",
          openings: 5,
          deadline: "2024-12-31",
        },
        {
          id: 8,
          title: "Junior Frontend Developer",
          level: "fresher",
          experience: "0-1 year",
          salary: "₹3.5 - ₹5.5 LPA",
          location: "Mumbai",
          type: "Full-time",
          skills: ["React", "Redux", "TypeScript", "Next.js"],
          description:
            "Entry-level frontend position for passionate developers with React knowledge.",
          openings: 4,
          deadline: "2024-12-15",
        },
        {
          id: 9,
          title: "Senior Frontend Developer",
          level: "experience",
          experience: "3-6 years",
          salary: "₹12 - ₹20 LPA",
          location: "Bangalore / Mumbai",
          type: "Full-time",
          skills: [
            "React",
            "Vue.js",
            "TypeScript",
            "Webpack",
            "Performance Optimization",
          ],
          description:
            "Senior frontend developer to lead UI development and implement best practices.",
          openings: 2,
          deadline: "2024-12-20",
        },
      ],
    },
  };

  const getFilteredJobs = () => {
    let jobs = [];
    Object.keys(jobCategories).forEach((category) => {
      if (selectedCategory === "all" || selectedCategory === category) {
        jobCategories[category].jobs.forEach((job) => {
          if (selectedLevel === "all" || selectedLevel === job.level) {
            jobs.push({ ...job, category });
          }
        });
      }
    });
    return jobs;
  };

  const getLevelBadgeStyle = (level) => {
    switch (level) {
      case "internship":
        return { bg: "#3a7b20", text: "Internship" };
      case "fresher":
        return { bg: "#2c5a18", text: "Fresher" };
      case "experience":
        return { bg: "#1a3a0f", text: "Experienced" };
      default:
        return { bg: "#666", text: level };
    }
  };

  const filteredJobs = getFilteredJobs();

  return (
    <section
      ref={sectionRef}
      className="position-relative overflow-hidden"
      style={{
        background: "#ffffff",
        padding: "80px 0",
        minHeight: "100vh",
      }}
    >
      {/* Animated Background Pattern */}
      <div
        className="position-absolute w-100 h-100"
        style={{ top: 0, left: 0, overflow: "hidden", pointerEvents: "none" }}
      >
        <div
          className="position-absolute w-100 h-100"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(58,123,32,0.05) 0%, transparent 50%)`,
          }}
        />
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="position-absolute"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              background: `rgba(58,123,32, ${Math.random() * 0.3 + 0.1})`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
              borderRadius: "50%",
            }}
          />
        ))}
      </div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Header Section */}
        <div
          className="text-center mb-5"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <span
            className="px-4 py-2 rounded-pill d-inline-block mb-3"
            style={{
              background: "#1a1a1a",
              border: "1px solid #3a7b20",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            🚀 WE'RE HIRING
          </span>

          <h1 className="display-3 fw-bold text-dark mb-3">
            Career<span style={{ color: "#3a7b20" }}> Opportunities</span>
          </h1>

          <div
            className="mx-auto mb-3"
            style={{ width: "60px", height: "3px", background: "#3a7b20" }}
          />

          <p className="text-dark-50 fs-5">
            Build your career with us. Explore exciting opportunities in
            Flutter, Backend, and Frontend development.
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="row g-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => {
              const category = jobCategories[job.category];
              const levelBadge = getLevelBadgeStyle(job.level);

              return (
                <div key={job.id} className="col-md-6 col-lg-4">
                  <div
                    className="position-relative h-100"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "translateY(0)"
                        : "translateY(50px)",
                      transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.3 + index * 0.05}s`,
                    }}
                    onMouseEnter={() => setHoveredJob(job.id)}
                    onMouseLeave={() => setHoveredJob(null)}
                  >
                    {/* Main Card */}
                    <div
                      className="card h-100 border-0 position-relative overflow-hidden"
                      style={{
                        background: "#111111",
                        borderRadius: "16px",
                        transition:
                          "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        transform:
                          hoveredJob === job.id
                            ? "translateY(-8px)"
                            : "translateY(0)",
                        boxShadow:
                          hoveredJob === job.id
                            ? "0 20px 40px rgba(0,0,0,0.5)"
                            : "0 4px 15px rgba(0,0,0,0.3)",
                        border: `1px solid ${hoveredJob === job.id ? "#3a7b20" : "#222"}`,
                        cursor: "pointer",
                      }}
                    >
                      {/* Top Border Highlight */}
                      <div
                        className="position-absolute top-0 start-0 w-100"
                        style={{
                          height: "3px",
                          background: "#3a7b20",
                          transform:
                            hoveredJob === job.id ? "scaleX(1)" : "scaleX(0)",
                          transition: "transform 0.3s ease",
                          transformOrigin: "left",
                        }}
                      />

                      <div className="card-body p-4">
                        {/* Header */}
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <div
                            className="rounded-circle d-flex align-items-center justify-content-center"
                            style={{
                              width: "50px",
                              height: "50px",
                              background: "#1a1a1a",
                              border: `2px solid #3a7b20`,
                              color: "#3a7b20",
                              transition: "transform 0.3s ease",
                              transform:
                                hoveredJob === job.id
                                  ? "scale(1.1)"
                                  : "scale(1)",
                            }}
                          >
                            {category.icon}
                          </div>
                          <span
                            className="px-3 py-1 rounded-pill"
                            style={{
                              background: levelBadge.bg,
                              color: "white",
                              fontSize: "12px",
                              fontWeight: "bold",
                            }}
                          >
                            {levelBadge.text}
                          </span>
                        </div>

                        {/* Job Title */}
                        <h5
                          className="fw-bold mb-2"
                          style={{ fontSize: "20px", color: "#ffffff" }}
                        >
                          {job.title}
                        </h5>

                        {/* Department */}
                        <p
                          className="mb-3"
                          style={{ color: "#3a7b20", fontSize: "14px" }}
                        >
                          {category.name}
                        </p>

                        {/* Details */}
                        <div className="mb-3">
                          <div className="d-flex align-items-center gap-2 mb-2">
                            <FaBriefcase
                              style={{ color: "#3a7b20", fontSize: "14px" }}
                            />
                            <span style={{ fontSize: "14px", color: "#aaa" }}>
                              {job.experience} experience
                            </span>
                          </div>
                          <div className="d-flex align-items-center gap-2 mb-2">
                            <FaRupeeSign
                              style={{ color: "#3a7b20", fontSize: "14px" }}
                            />
                            <span style={{ fontSize: "14px", color: "#aaa" }}>
                              {job.salary}
                            </span>
                          </div>
                          {/* <div className="d-flex align-items-center gap-2 mb-2">
                            <FaMapMarkerAlt
                              style={{ color: "#3a7b20", fontSize: "14px" }}
                            />
                            <span style={{ fontSize: "14px", color: "#aaa" }}>
                              {job.location}
                            </span>
                          </div> */}
                          <div className="d-flex align-items-center gap-2">
                            <FaClock
                              style={{ color: "#3a7b20", fontSize: "14px" }}
                            />
                            <span style={{ fontSize: "14px", color: "#aaa" }}>
                              Apply by: {job.deadline}
                            </span>
                          </div>
                        </div>

                        {/* Skills */}
                        <div className="mb-3">
                          <div className="d-flex flex-wrap gap-2">
                            {job.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 rounded-pill"
                                style={{
                                  background: "rgba(58,123,32,0.1)",
                                  color: "#3a7b20",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  border: "1px solid rgba(58,123,32,0.3)",
                                }}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Description */}
                        <p
                          className="mb-3"
                          style={{
                            color: "#aaa",
                            fontSize: "13px",
                            lineHeight: "1.5",
                          }}
                        >
                          {job.description}
                        </p>

                        {/* Footer */}
                        <div
                          className="d-flex justify-content-between align-items-center mt-3 pt-2"
                          style={{ borderTop: "1px solid #222" }}
                        >
                          <div className="d-flex align-items-center gap-2">
                            <MdVerified style={{ color: "#3a7b20" }} />
                            <span style={{ fontSize: "12px", color: "#aaa" }}>
                              {job.openings} openings
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center text-white py-5">
              <h3>No jobs found matching your criteria</h3>
              <p style={{ color: "#aaa" }}>Try adjusting your filters</p>
            </div>
          )}
        </div>

        {/* Benefits Section */}
        <div
          className="mt-5 pt-5"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s",
          }}
        >
          <h3 className="text-center text-dark mb-4">Why Join Us?</h3>
          <div className="row g-4">
            {[
              {
                icon: <MdWork size={30} />,
                title: "Growth Opportunities",
                desc: "Fast-paced growth and learning",
              },
              {
                icon: <FaRegHeart size={30} />,
                title: "Great Culture",
                desc: "Collaborative and inclusive environment",
              },
              {
                icon: <GiSkills size={30} />,
                title: "Learning & Development",
                desc: "Regular workshops and training",
              },
              {
                icon: <MdSchool size={30} />,
                title: "Mentorship",
                desc: "Learn from industry experts",
              },
            ].map((benefit, idx) => (
              <div key={idx} className="col-md-3 col-sm-6">
                <div
                  className="text-center p-4 rounded-4"
                  style={{
                    background: "#111111",
                    border: "1px solid #222",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.borderColor = "#3a7b20";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "#222";
                  }}
                >
                  <div style={{ color: "#3a7b20" }} className="mb-3">
                    {benefit.icon}
                  </div>
                  <h6 className="text-white fw-bold mb-2">{benefit.title}</h6>
                  <p style={{ color: "#aaa", fontSize: "13px" }}>
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="text-center mt-5 pt-4"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.7s",
          }}
        >
          <div
            className="p-4 rounded-4"
            style={{
              background: "#111111",
              border: "1px solid #222",
            }}
          >
            <p className="text-white-50 mb-3">Don't see the perfect role?</p>
            <button
              className="btn px-5 py-3 rounded-pill fw-bold"
              style={{
                background: "transparent",
                border: "2px solid #3a7b20",
                color: "#3a7b20",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#3a7b20";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#3a7b20";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Send Your Resume →
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @media (max-width: 768px) {
          .display-3 {
            font-size: 2rem;
          }
        }

        .card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `}</style>
    </section>
  );
};

export default CareerComponent;
