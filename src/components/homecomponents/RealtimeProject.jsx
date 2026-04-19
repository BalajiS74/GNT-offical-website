import { Container, Row, Col, Button } from "react-bootstrap";
import handshake from "../../assets/home/handshake.png";
import { Link } from "react-router";
import { useEffect, useState } from "react";

const RealtimeProject = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    const element = document.getElementById("realtime-project-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div
      id="realtime-project-section"
      className="py-5 position-relative overflow-hidden"
      style={
        {
          // background: "linear-gradient(135deg, #f8f9fa 0%, #e8f0e5 100%)",
        }
      }
    >
      {/* Animated Background Elements */}
      <div
        className="position-absolute w-100 h-100"
        style={{ top: 0, left: 0, overflow: "hidden", pointerEvents: "none" }}
      >
        <div
          className="position-absolute rounded-circle"
          style={{
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, rgba(58,123,32,0.05) 0%, rgba(58,123,32,0) 70%)",
            top: "-150px",
            right: "-100px",
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          className="position-absolute rounded-circle"
          style={{
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(58,123,32,0.03) 0%, rgba(58,123,32,0) 70%)",
            bottom: "-200px",
            left: "-150px",
            animation: "float 10s ease-in-out infinite reverse",
          }}
        />
      </div>

      <Container>
        {/* Animated Heading */}
        <div
          className="text-center mb-5"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <p className="fw-bold mb-3" style={{ fontSize: "42px" }}>
            Want work with{" "}
            <span
              className="position-relative d-inline-block"
              style={{ color: "#3a7b20" }}
            >
              real-time projects
              <span
                className="position-absolute bottom-0 start-0 w-100"
                style={{
                  height: "4px",
                  background: "linear-gradient(90deg, #3a7b20, #8bc34a)",
                  borderRadius: "2px",
                  transform: "scaleX(0)",
                  animation: isVisible
                    ? "expandWidth 0.6s ease-out 0.3s forwards"
                    : "none",
                  transformOrigin: "left",
                }}
              />
            </span>
            <span
              style={{
                display: "inline-block",
                animation: isVisible ? "wave 1s ease-in-out 0.5s" : "none",
              }}
            >
              🚀
            </span>
          </p>
          <div
            style={{
              width: "60px",
              height: "3px",
              background: "linear-gradient(90deg, #3a7b20, #8bc34a)",
              margin: "20px auto 0",
              borderRadius: "2px",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "scaleX(1)" : "scaleX(0)",
              transition: "all 0.6s ease-out 0.2s",
              transformOrigin: "center",
            }}
          />
        </div>

        {/* Main Animated Box */}
        <div
          className="position-relative"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scale(1)" : "scale(0.95)",
            transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s",
          }}
        >
          {/* Glowing border effect */}
          <div
            className="position-absolute w-100 h-100 rounded-4"
            style={{
              background: "linear-gradient(90deg, #c3e39fbe)",
              filter: "blur(30px)",
              opacity: 0.1,
              zIndex: -1,
              animation: "pulse 3s ease-in-out infinite",
            }}
          />

          <div
            className="p-4 p-md-5 rounded-4 position-relative"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #f9fff7 100%)",
              maxWidth: "1100px",
              margin: "0 auto",
              boxShadow: "0 20px 60px rgba(58,123,32,0.15)",
              border: "1px solid rgba(58,123,32,0.1)",
              transition: "all 0.3s ease",
            }}
          >
            <Row className="align-items-center g-4">
              {/* Left Content with Animation */}
              <Col xs={12} lg={5}>
                <div
                  className="text-center text-md-start"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateX(0)"
                      : "translateX(-50px)",
                    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s",
                  }}
                  onMouseEnter={() => setHoveredSection("left")}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <div
                    className="mb-3 d-inline-block px-3 py-1 rounded-pill"
                    style={{
                      background: "linear-gradient(135deg, #3a7b20, #4CAF50)",
                      color: "white",
                      fontSize: "14px",
                      fontWeight: "bold",
                      transform:
                        hoveredSection === "left" ? "scale(1.05)" : "scale(1)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    ⚡ FEATURED PROGRAM
                  </div>
                  <h2
                    className="mb-3 fw-bold"
                    style={{
                      fontSize: "32px",
                      color: "#2c2c2c",
                      transform:
                        hoveredSection === "left"
                          ? "translateX(5px)"
                          : "translateX(0)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    On-site Training
                  </h2>
                  <p
                    className="text-muted"
                    style={{
                      lineHeight: "1.8",
                      fontSize: "18px",
                      transform:
                        hoveredSection === "left"
                          ? "translateX(5px)"
                          : "translateX(0)",
                      transition: "transform 0.3s ease 0.05s",
                    }}
                  >
                    Gain practical skills through our on-site training, where
                    students apply academic knowledge to real-world projects and
                    build the confidence needed for today's job market.
                  </p>
                  {/* Interactive bullet points */}
                  <div className="mt-3">
                    {[
                      "Hands-on experience",
                      "Industry experts",
                      "Real projects",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="d-flex align-items-center gap-2 mb-2"
                        style={{
                          opacity: hoveredSection === "left" ? 1 : 0.7,
                          transform:
                            hoveredSection === "left"
                              ? "translateX(5px)"
                              : "translateX(0)",
                          transition: `all 0.3s ease ${0.1 + idx * 0.05}s`,
                        }}
                      >
                        <div
                          style={{
                            width: "6px",
                            height: "6px",
                            background: "#3a7b20",
                            borderRadius: "50%",
                          }}
                        />
                        <span style={{ fontSize: "14px", color: "#666" }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Col>

              {/* Center Image with Animation */}
              <Col xs={12} lg={2} className="text-center">
                <div
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "scale(1) rotate(0deg)"
                      : "scale(0) rotate(-180deg)",
                    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.6s",
                    animation: isVisible
                      ? "float 3s ease-in-out infinite"
                      : "none",
                  }}
                >
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center mx-auto"
                    style={{
                      width: "160px",
                      height: "160px",
                      background:
                        "linear-gradient(135deg, rgba(58,123,32,0.1), rgba(139,195,74,0.1))",
                      border: "2px solid rgba(58,123,32,0.2)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <img
                      src={handshake}
                      alt="handshake"
                      style={{
                        width: "100%",
                        maxWidth: "120px",
                        objectFit: "contain",
                        transition: "transform 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.1)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                  </div>
                </div>
              </Col>

              {/* Right Content with Animation */}
              <Col xs={12} lg={5}>
                <div
                  className="text-center text-md-start ms-3"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(50px)",
                    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s",
                  }}
                  onMouseEnter={() => setHoveredSection("right")}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <div
                    className="mb-3 d-inline-block px-3 py-1 rounded-pill"
                    style={{
                      background: "linear-gradient(135deg, #d4a017, #f5c542)",
                      color: "white",
                      fontSize: "14px",
                      fontWeight: "bold",
                      transform:
                        hoveredSection === "right" ? "scale(1.05)" : "scale(1)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    🎓 INTERNSHIP PROGRAM
                  </div>
                  <h2
                    className="mb-3 fw-bold"
                    style={{
                      fontSize: "32px",
                      color: "#2c2c2c",
                      transform:
                        hoveredSection === "right"
                          ? "translateX(-5px)"
                          : "translateX(0)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    Internship
                  </h2>
                  <p
                    className="text-muted"
                    style={{
                      lineHeight: "1.8",
                      fontSize: "18px",
                      transform:
                        hoveredSection === "right"
                          ? "translateX(-5px)"
                          : "translateX(0)",
                      transition: "transform 0.3s ease 0.05s",
                    }}
                  >
                    Our internship program provides hands-on experience by
                    working on real-world projects alongside industry
                    professionals. It helps students build practical skills and
                    gain confidence.
                  </p>
                  {/* Interactive bullet points */}
                  <div className="mt-3">
                    {[
                      "Industry mentorship",
                      "Live projects",
                      "Certificate",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="d-flex align-items-center gap-2 mb-2 justify-content-md-start justify-content-center"
                        style={{
                          opacity: hoveredSection === "right" ? 1 : 0.7,
                          transform:
                            hoveredSection === "right"
                              ? "translateX(-5px)"
                              : "translateX(0)",
                          transition: `all 0.3s ease ${0.1 + idx * 0.05}s`,
                        }}
                      >
                        <div
                          style={{
                            width: "6px",
                            height: "6px",
                            background: "#d4a017",
                            borderRadius: "50%",
                          }}
                        />
                        <span style={{ fontSize: "14px", color: "#666" }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>

            {/* Animated Button */}
            <div className="text-center mt-5 pt-3">
              <Link to={"registerpage"}>
                <Button
                  className="position-relative overflow-hidden rounded-pill fw-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, #3a7b20 0%, #4CAF50 100%)",
                    border: "none",
                    padding: "14px 42px",
                    fontSize: "18px",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 15px rgba(58,123,32,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(58,123,32,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 15px rgba(58,123,32,0.3)";
                  }}
                >
                  <span className="position-relative" style={{ zIndex: 2 }}>
                    Register Now →
                  </span>
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      background:
                        "linear-gradient(135deg, #4CAF50 0%, #3a7b20 100%)",
                      transform: "translateX(-100%)",
                      transition: "transform 0.3s ease",
                      zIndex: 1,
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "translateX(0)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "translateX(-100%)")
                    }
                  />
                </Button>
              </Link>
            </div>

            {/* Decorative corner elements */}
            <div
              className="position-absolute"
              style={{
                top: "20px",
                left: "20px",
                width: "40px",
                height: "40px",
                borderTop: "2px solid #3a7b20",
                borderLeft: "2px solid #3a7b20",
                borderRadius: "4px 0 0 0",
                opacity: 0.3,
              }}
            />
            <div
              className="position-absolute"
              style={{
                bottom: "20px",
                right: "20px",
                width: "40px",
                height: "40px",
                borderBottom: "2px solid #3a7b20",
                borderRight: "2px solid #3a7b20",
                borderRadius: "0 0 4px 0",
                opacity: 0.3,
              }}
            />
          </div>
        </div>
      </Container>

      <style jsx>{`
        /* CENTER IMAGE */
        .handshake-wrapper {
          width: 140px;
          height: 140px;
          margin: 0 auto;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            135deg,
            rgba(58, 123, 32, 0.1),
            rgba(139, 195, 74, 0.1)
          );
          border: 2px solid rgba(58, 123, 32, 0.2);
        }

        .handshake-img {
          width: 80%;
          object-fit: contain;
        }

        /* 🔥 TABLET FIX (your problem range ~978px) */
        @media (max-width: 991px) {
          .handshake-wrapper {
            width: 120px;
            height: 120px;
            margin: 20px auto; /* spacing when stacked */
          }

          .handshake-img {
            width: 70%;
          }
        }

        /* MOBILE */
        @media (max-width: 576px) {
          .handshake-wrapper {
            width: 100px;
            height: 100px;
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes wave {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(15deg);
          }
          75% {
            transform: rotate(-15deg);
          }
        }

        @keyframes expandWidth {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }

        .btn:hover .shake-effect {
          animation: shake 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default RealtimeProject;
