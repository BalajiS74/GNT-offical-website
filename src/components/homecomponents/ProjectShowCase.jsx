import { Container, Row, Col } from "react-bootstrap";
import project1 from "../../assets/home/project1.png";
import project2 from "../../assets/home/project2.png";
import "./showcase.css"; // 👈 add this

export const ProjectShowCase = () => {
  return (
    <section className="py-5 showcase-section">
      <Container>
        {/* Heading */}
        <h1 className="text-center mb-5 fw-bold fade-in">
          Our <span className="text-success">Showcases</span> 🚀
        </h1>

        {/* Projects */}
        <Row className="g-4 justify-content-center">
          <Col xs={12} md={6} className="fade-up">
            <div className="showcase-card">
              <img src={project1} alt="project1" />

              {/* Overlay */}
              <div className="overlay">
                <h5>Project One</h5>
                <p>Real-time application</p>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} className="fade-up">
            <div className="showcase-card">
              <img src={project2} alt="project2" />

              {/* Overlay */}
              <div className="overlay">
                <h5>Project Two</h5>
                <p>Modern UI Design</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
