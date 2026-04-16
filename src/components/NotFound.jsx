import React from "react";
import { Container, Button } from "react-bootstrap";
import errorImg from "../assets/error.png";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex align-items-center justify-content-center text-center"
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        flexDirection: "column",
      }}
    >
      <Container>
        {/* Image */}
        <img
          src={errorImg}
          alt="404 error"
          style={{
            width: "100%",
            maxWidth: "500px",
            marginBottom: "20px",
          }}
        />

        {/* Text */}
        <h2 className="mb-3">Oops! Page Not Found</h2>
        <p className="text-muted mb-4">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Button
          onClick={() => navigate("/")}
          style={{
            background: "#3a7b20",
            border: "none",
            padding: "10px 25px",
            fontSize: "16px",
            borderRadius: "8px",
          }}
        >
          Go Back Home
        </Button>
      </Container>
    </div>
  );
};

export default NotFound;
