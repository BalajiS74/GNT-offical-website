import React, { useEffect, useState, useRef } from "react";
import servicesImage from "../../assets/servicesimages/services.png";
import { FaGlobe, FaMobileAlt, FaProductHunt } from "react-icons/fa";
import {
  MdArrowForward,
  MdDesignServices,
  MdSpeed,
  MdSecurity,
} from "react-icons/md";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
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

  const services = [
    {
      id: 1,
      title: "Website Development",
      icon: <FaGlobe size={50} />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "CMS Integration",
      ],
      description:
        "We specialize in professional website development, creating responsive, user-friendly, and visually engaging websites that help businesses build a strong online presence.",
      color: "#667eea",
    },
    {
      id: 2,
      title: "Mobile Apps",
      icon: <FaMobileAlt size={50} />,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      features: [
        "iOS & Android",
        "Native Performance",
        "User Friendly",
        "App Store Ready",
      ],
      description:
        "Our mobile app development focuses on delivering high-performance, intuitive, and scalable applications for both Android and iOS platforms, ensuring seamless user experiences.",
      color: "#f5576c",
    },
    {
      id: 3,
      title: "Own Products",
      icon: <FaProductHunt size={50} />,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      features: [
        "Innovative Solutions",
        "Cutting-edge Tech",
        "Value Driven",
        "Scalable",
      ],
      description:
        "We also design and develop our own innovative products, combining creativity and advanced technology to solve real-world problems and deliver value-driven solutions.",
      color: "#4facfe",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="position-relative overflow-hidden"
      style={{
        padding: "80px 0",
        minHeight: "100vh",
      }}
    >
      {/* Animated Background Elements */}
      <div
        className="position-absolute w-100 h-100"
        style={{ top: 0, left: 0, overflow: "hidden", pointerEvents: "none" }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="position-absolute rounded-circle"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              background: `radial-gradient(circle, rgba(58,123,32,${Math.random() * 0.05 + 0.02}) 0%, rgba(58,123,32,0) 70%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Header Section with Animation */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-50px)",
                transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div className="position-relative d-inline-block mb-3">
                <span
                  className="px-3 py-1 rounded-pill fw-semibold"
                  style={{
                    background: "linear-gradient(135deg, #3a7b20, #4CAF50)",
                    color: "white",
                    fontSize: "14px",
                    letterSpacing: "1px",
                  }}
                >
                  WHAT WE OFFER
                </span>
              </div>

              <h2
                className="display-4 fw-bold mb-4"
                style={{ color: "#2c2c2c" }}
              >
                Our{" "}
                <span
                  className="position-relative d-inline-block"
                  style={{ color: "#3a7b20" }}
                >
                  Services
                  <span
                    className="position-absolute bottom-0 start-0 w-100"
                    style={{
                      height: "4px",
                      background: "linear-gradient(90deg, #3a7b20, #8bc34a)",
                      borderRadius: "2px",
                      transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                      transition: "transform 0.6s ease-out 0.3s",
                      transformOrigin: "left",
                    }}
                  />
                </span>
              </h2>

              <p
                className="lead mb-4"
                style={{ color: "#6c757d", lineHeight: "1.8" }}
              >
                We are an innovative IT startup specializing in website
                development, mobile applications, and our own cutting‑edge
                digital products. Our focus is on delivering scalable,
                user‑friendly, and high‑performance solutions that help
                businesses grow.
              </p>

              {/* Stats Section */}
              <div className="row g-3 mt-4">
                {[
                  { number: "150+", label: "Projects Completed", icon: "🚀" },
                  { number: "50+", label: "Happy Clients", icon: "😊" },
                  { number: "24/7", label: "Support", icon: "💪" },
                ].map((stat, idx) => (
                  <div key={idx} className="col-4">
                    <div
                      className="text-center p-3 rounded-3 bg-white shadow-sm"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateY(0)"
                          : "translateY(30px)",
                        transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.4 + idx * 0.1}s`,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          "0 10px 30px rgba(0,0,0,0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 1px 3px rgba(0,0,0,0.1)";
                      }}
                    >
                      <div className="fs-2 mb-2">{stat.icon}</div>
                      <div
                        className="fs-3 fw-bold"
                        style={{ color: "#3a7b20" }}
                      >
                        {stat.number}
                      </div>
                      <div className="small text-muted">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(50px)",
                transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s",
              }}
            >
              <div className="position-relative">
                <div
                  className="position-absolute rounded-circle"
                  style={{
                    width: "300px",
                    height: "300px",
                    background:
                      "radial-gradient(circle, rgba(58,123,32,0.1) 0%, rgba(58,123,32,0) 70%)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    animation: "pulse 3s ease-in-out infinite",
                  }}
                />
                <img
                  src={servicesImage}
                  alt="Startup illustration"
                  className="img-fluid position-relative"
                  style={{
                    maxHeight: "450px",
                    objectFit: "contain",
                    animation: isVisible
                      ? "float 4s ease-in-out infinite"
                      : "none",
                    filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.1))",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Services Cards Section */}
        <div className="row g-4 mt-5">
          {services.map((service, index) => (
            <div key={service.id} className="col-md-6 col-lg-4">
              <div
                className="position-relative h-100"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(50px)",
                  transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.6 + index * 0.1}s`,
                }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Glow Effect */}
                <div
                  className="position-absolute w-100 h-100 rounded-4"
                  style={{
                    background: service.gradient,
                    filter: "blur(20px)",
                    opacity: hoveredCard === service.id ? 0.3 : 0,
                    transition: "opacity 0.3s ease",
                    zIndex: 0,
                  }}
                />

                {/* Card Content */}
                <div
                  className="card h-100 border-0 position-relative overflow-hidden"
                  style={{
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "24px",
                    transition:
                      "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    transform:
                      hoveredCard === service.id
                        ? "translateY(-10px)"
                        : "translateY(0)",
                    boxShadow:
                      hoveredCard === service.id
                        ? "0 20px 40px rgba(0,0,0,0.15)"
                        : "0 10px 30px rgba(0,0,0,0.08)",
                  }}
                >
                  {/* Gradient Top Bar */}
                  <div
                    className="position-absolute top-0 start-0 w-100"
                    style={{
                      height: "5px",
                      background: service.gradient,
                      transform:
                        hoveredCard === service.id ? "scaleX(1)" : "scaleX(0)",
                      transition: "transform 0.3s ease",
                      transformOrigin: "left",
                    }}
                  />

                  <div className="card-body p-4">
                    {/* Icon Circle */}
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                      style={{
                        width: "90px",
                        height: "90px",
                        background: service.gradient,
                        color: "white",
                        transition: "all 0.3s ease",
                        transform:
                          hoveredCard === service.id
                            ? "scale(1.1) rotate(5deg)"
                            : "scale(1)",
                        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                      }}
                    >
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h3
                      className="text-center fw-bold mb-3"
                      style={{
                        fontSize: "24px",
                        color: "#2c2c2c",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-center text-muted mb-4"
                      style={{
                        fontSize: "15px",
                        lineHeight: "1.6",
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="mb-4">
                      <div className="row g-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="col-6">
                            <div
                              className="d-flex align-items-center gap-2 p-2 rounded"
                              style={{
                                background:
                                  hoveredCard === service.id
                                    ? "rgba(58,123,32,0.05)"
                                    : "transparent",
                                transition: "background 0.3s ease",
                              }}
                            >
                              <MdDesignServices
                                size={14}
                                color={service.color}
                              />
                              <span style={{ fontSize: "13px", color: "#666" }}>
                                {feature}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
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

        @keyframes pulse {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @media (max-width: 768px) {
          .display-4 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
