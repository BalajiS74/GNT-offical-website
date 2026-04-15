import React, { useState } from "react";

const ServiceCardsDark = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const styles = {
    section: {
      padding: "80px 0",
      background: "#000000",
    },
    heading: {
      fontSize: "42px",
      fontWeight: "700",
      color: "#ffffff",
      letterSpacing: "-0.5px",
    },
    highlight: {
      color: "#68D53D",
    },
    subheading: {
      fontSize: "16px",
      color: "#888888",
      maxWidth: "550px",
      margin: "0 auto",
    },
    card: (isHovered) => ({
      background: "#111111",
      border: isHovered ? `1px solid ${"#68D53D"}` : "1px solid #222222",
      borderRadius: "12px",
      padding: "40px",
      transition: "all 0.3s ease",
      cursor: "pointer",
    }),
    iconWrapper: {
      width: "64px",
      height: "64px",
      marginBottom: "24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#1a1a1a",
      borderRadius: "12px",
    },
    icon: {
      fontSize: "32px",
    },
    cardTitle: {
      fontSize: "24px",
      fontWeight: "600",
      color: "#ffffff",
      marginBottom: "16px",
    },
    divider: {
      width: "40px",
      height: "2px",
      background: "#68D53D",
      margin: "0 0 24px 0",
    },
    description: {
      fontSize: "15px",
      lineHeight: "1.6",
      color: "#888888",
      marginBottom: "24px",
    },
    featureItem: {
      fontSize: "14px",
      color: "#999999",
      marginBottom: "12px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    button: {
      background: "transparent",
      border: "1px solid #333333",
      padding: "10px 24px",
      borderRadius: "6px",
      color: "#ffffff",
      fontWeight: "500",
      fontSize: "14px",
      transition: "all 0.3s ease",
      marginTop: "24px",
      cursor: "pointer",
    },
    buttonHover: {
      background: "#68D53D",
      border: "1px solid #68D53D",
      color: "#000000",
    },
  };

  return (
    <section style={styles.section}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 style={styles.heading}>
            Our <span style={styles.highlight}>Services</span>
          </h2>
          <p style={styles.subheading}>
            Premium IT solutions for modern businesses
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-lg-6">
            <div
              style={styles.card(hoveredCard === "hardware")}
              onMouseEnter={() => setHoveredCard("hardware")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.iconWrapper}>
                <span style={styles.icon}>🖥️</span>
              </div>
              <h3 style={styles.cardTitle}>Hardware</h3>
              <div style={styles.divider}></div>
              <p style={styles.description}>
                Enterprise-grade hardware solutions including servers,
                networking devices, and high-performance workstations.
              </p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={styles.featureItem}>
                  <span style={{ color: "#68D53D" }}>⟶</span> Enterprise Servers
                </li>
                <li style={styles.featureItem}>
                  <span style={{ color: "#68D53D" }}>⟶</span> Networking
                  Solutions
                </li>
                <li style={styles.featureItem}>
                  <span style={{ color: "#68D53D" }}>⟶</span> 24/7 Support
                </li>
              </ul>
              <button
                style={{
                  ...styles.button,
                  ...(hoveredCard === "hardware" ? styles.buttonHover : {}),
                }}
              >
                Learn More →
              </button>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              style={styles.card(hoveredCard === "software")}
              onMouseEnter={() => setHoveredCard("software")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.iconWrapper}>
                <span style={styles.icon}>⚡</span>
              </div>
              <h3 style={styles.cardTitle}>Software</h3>
              <div style={styles.divider}></div>
              <p style={styles.description}>
                Custom software development, cloud solutions, and AI/ML
                integration for digital transformation.
              </p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={styles.featureItem}>
                  <span style={{ color: "#68D53D" }}>⟶</span> Custom Development
                </li>
                <li style={styles.featureItem}>
                  <span style={{ color: "#68D53D" }}>⟶</span> Cloud Solutions
                </li>
                <li style={styles.featureItem}>
                  <span style={{ color: "#68D53D" }}>⟶</span> AI/ML Integration
                </li>
              </ul>
              <button
                style={{
                  ...styles.button,
                  ...(hoveredCard === "software" ? styles.buttonHover : {}),
                }}
              >
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCardsDark;
