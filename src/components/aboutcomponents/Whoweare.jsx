import GlobalBtn from "../global/GlobalBtn";
import aboutImage from "../../assets/about/aboutImage.png";
import { Link } from "react-router";
import "./whoweare.css"; // 👈 add this

const Whoweare = () => {
  return (
    <section className="container my-5">
      <div className="row align-items-center">
        {/* LEFT - TEXT */}
        <div className="col-md-6 fade-left">
          <h2 className="fw-bold mb-4 display-5">
            Who We <span className="text-success">are?</span>
          </h2>

          <p className="mb-4 lead text-muted">
            We are a team of passionate individuals dedicated to empowering
            talent by creating opportunities to learn, grow, and excel. We
            nurture natural abilities while helping individuals develop new
            skills for a successful future.
          </p>

          <Link to={"/meet"}>
            <div className="btn-animate">
              <GlobalBtn
                btnName={"Meet"}
                px={"5"}
                style={{
                  width: "250px",
                  fontSize: "20px",
                }}
              />
            </div>
          </Link>
        </div>

        {/* RIGHT - IMAGE */}
        <div className="col-md-6 text-center fade-right">
          <img
            src={aboutImage}
            alt="Who we are illustration"
            className="img-fluid about-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Whoweare;
