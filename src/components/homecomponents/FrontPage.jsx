import { Container, Row, Col } from "react-bootstrap";
import homeFront from "../../assets/homeFront.png";
import GlobalBtn from "../global/GlobalBtn";
import { Link } from "react-router";

const FrontPage = () => {
  return (
    <div className="hero-section">
      <Container className="py-2">
        <Row className="align-items-center justify-content-between">
          {/* LEFT CONTENT */}
          <Col
            xs={12}
            md={5}
            className="text-center text-md-start mb-4 mb-md-0 hero-text"
          >
            <h1 className="fw-bold hero-title">
              Empower your <br />
              career <span className="highlight">growth</span> <br />
              with us
            </h1>

            {/* Increased text size */}
            <p className="text-muted mt-3 fs-4 fs-md-3 hero-subtext">
              Are you finding difficulty in where & when
              <br />
              to start ?
            </p>

            <Link to={"Meet"}>
              <div className="hero-btn d-flex justify-content-center justify-content-md-start">
                <GlobalBtn
                  btnName={"Meet"}
                  px={"5"}
                  style={{
                    width: "280px",
                    fontSize: "22px",
                  }}
                />
              </div>
            </Link>
          </Col>

          {/* RIGHT IMAGE */}
          <Col xs={12} md={7} className="text-center">
            <img
              src={homeFront}
              alt="hero"
              className="img-fluid hero-img mb-4 mb-md-0"
              style={{
                maxWidth: "100%",
                width: "90%", // larger image size
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FrontPage;
