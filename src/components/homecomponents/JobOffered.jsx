import { Container, Row, Col } from "react-bootstrap";
import tcs from "../../assets/home/tcs.png";
import zoho from "../../assets/home/zoho.jpg";
import cognizant from "../../assets/home/cognizant.jpg";
import nsn from "../../assets/home/nsn.jpg";
import accenture from "../../assets/home/accenture.jpg";
import wipro from "../../assets/home/wipro.png";
import "./joboffered.css"; // 👈 add this

const companies = [
  { img: tcs },
  { img: zoho },
  { img: cognizant },
  { img: nsn },
  { img: accenture },
  { img: wipro },
];

export const JobOffered = () => {
  return (
    <section className="py-5 job-section">
      <Container>
        {/* Heading */}
        <h2 className="text-center mb-5 fw-bold fade-in">
          Our students placed in
          <span className="text-success"> top companies</span> 🚀
        </h2>

        {/* Logos */}
        <Row className="g-4 justify-content-center text-center">
          {companies.map((company, index) => (
            <Col key={index} xs={6} sm={4} md={3} className="fade-up">
              <div className="company-card">
                <img src={company.img} alt="company" className="company-logo" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
