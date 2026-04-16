import { Container, Row, Col, Card } from "react-bootstrap";
import itcareer from "../../assets/home/itcareer.png";
import careeropp from "../../assets/home/careeropp.png";
import itstartup from "../../assets/home/itstartup.png";
import Satisfaction from "../../assets/home/satisfaction.png";
import learners from "../../assets/home/learners.png";
import besttutor from "../../assets/home/besttutor.png";

const offerings = [
  {
    title: "IT Career",
    img: itcareer,
    description: "Build your future in technology with expert guidance",
  },
  {
    title: "Career opportunities",
    img: careeropp,
    description: "Access global job opportunities and networking",
  },
  {
    title: "IT startup",
    img: itstartup,
    description: "Launch your dream startup with our support",
  },
];

const stats = [
  {
    title: "Satisfaction",
    value: "100%",
    img: Satisfaction,
    gradient: "linear-gradient(135deg, #3a7b20 0%, #4CAF50 100%)",
  },
  {
    title: "Learners",
    value: "50+",
    img: learners,
    gradient: "linear-gradient(135deg, #d4a017 0%, #f5c542 100%)",
  },
  {
    title: "Experts",
    value: "10+",
    img: besttutor,
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #333333 100%)",
  },
];

const Offering = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        {/* Stylish Heading */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">
            We are <span style={{ color: "#3a7b20" }}>offer</span>
            <span className="ms-2" style={{ fontSize: "48px" }}>
              🎉
            </span>
          </h2>
          <div
            className="mx-auto rounded-pill"
            style={{
              width: "80px",
              height: "4px",
              background: "linear-gradient(90deg, #3a7b20, #8bc34a)",
              marginBottom: "20px",
            }}
          />
          <p className="text-muted fs-5">
            Empowering your tech journey with excellence
          </p>
        </div>

        {/* Cards - Reduced white space, more content */}
        <Row className="g-4 justify-content-center mb-5">
          {offerings.map((item, index) => (
            <Col key={index} xs={12} sm={6} lg={4}>
              <Card
                className="h-100 border-0 overflow-hidden"
                style={{
                  borderRadius: "20px",
                  transition:
                    "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  cursor: "pointer",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(58,123,32,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(0,0,0,0.08)";
                }}
              >
                {/* Gradient overlay on hover */}
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <div
                    style={{
                      height: "220px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        "linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)",
                      padding: "20px",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={item.img}
                      style={{
                        maxHeight: "180px",
                        maxWidth: "100%",
                        objectFit: "contain",
                        transition: "transform 0.3s ease",
                      }}
                      className="hover-scale"
                    />
                  </div>
                  {/* Decorative badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "15px",
                      right: "-30px",
                      background: "#3a7b20",
                      color: "white",
                      padding: "5px 30px",
                      transform: "rotate(45deg)",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    Popular
                  </div>
                </div>

                <Card.Body className="p-4 text-center">
                  <Card.Title
                    className="fs-3 fw-bold mb-3"
                    style={{ color: "#2c2c2c" }}
                  >
                    {item.title}
                  </Card.Title>
                  <Card.Text className="text-muted mb-4">
                    {item.description}
                  </Card.Text>
                  {/* <button
                    className="btn w-100 rounded-pill fw-semibold"
                    style={{
                      background: "linear-gradient(90deg, #3a7b20, #4CAF50)",
                      color: "white",
                      border: "none",
                      padding: "12px",
                      transition: "transform 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.02)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  >
                    Learn More →
                  </button> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Stats Section - More attractive cards with less white space */}
        <div className="mt-5 pt-4">
          <Row className="g-4 justify-content-center">
            {stats.map((item, index) => (
              <Col key={index} xs={12} sm={6} md={4}>
                <div
                  className="position-relative overflow-hidden"
                  style={{
                    borderRadius: "20px",
                    background: item.gradient,
                    padding: "30px 20px",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 25px 45px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 35px rgba(0,0,0,0.1)";
                  }}
                >
                  {/* Animated background circles */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-50%",
                      right: "-30%",
                      width: "200px",
                      height: "200px",
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: "50%",
                      pointerEvents: "none",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-50%",
                      left: "-30%",
                      width: "180px",
                      height: "180px",
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: "50%",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Content */}
                  <div
                    className="text-center position-relative"
                    style={{ zIndex: 2 }}
                  >
                    {/* Icon Circle */}
                    <div
                      style={{
                        width: "100px",
                        height: "100px",
                        margin: "0 auto 20px",
                        // background: "rgba(255,255,255,0.2)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        // backdropFilter: "blur(10px)",
                        // border: "2px solid rgba(255,255,255,0.3)",
                      }}
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        style={{
                          width: "150px",
                          height: "150px",
                          objectFit: "contain",
                          // filter: "brightness(0) invert(1)",
                        }}
                      />
                    </div>

                    {/* Value */}
                    <div
                      className="fw-bold mb-2"
                      style={{
                        fontSize: "48px",
                        color: "white",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                      }}
                    >
                      {item.value}
                    </div>

                    {/* Title */}
                    <div
                      className="fs-4 fw-semibold"
                      style={{
                        color: "rgba(255,255,255,0.95)",
                        letterSpacing: "1px",
                      }}
                    >
                      {item.title}
                    </div>

                    {/* Decorative line */}
                    <div
                      style={{
                        width: "50px",
                        height: "3px",
                        background: "rgba(255,255,255,0.5)",
                        margin: "15px auto 0",
                        borderRadius: "2px",
                      }}
                    />
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* Optional CTA Section */}
        <div className="text-center mt-5 pt-4">
          <p className="text-muted fs-4">
            Join thousands of successful tech professionals who started their
            journey with us
          </p>
        </div>
      </Container>

      <style jsx>{`
        @keyframes fadeInUp {
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
          animation: fadeInUp 0.6s ease-out;
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default Offering;
