import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
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
        overflow: "hidden",
      }}
    >
      <Container>
        {/* IMAGE */}
        <motion.img
          src={errorImg}
          alt="404 error"
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            width: "100%",
            maxWidth: "450px",
            marginBottom: "20px",
          }}
        />

        {/* TEXT */}
        <motion.h2
          className="mb-3 fw-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Oops! Page Not Found
        </motion.h2>

        <motion.p
          className="text-muted mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          The page you are looking for doesn’t exist or has been moved.
        </motion.p>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button onClick={() => navigate("/")} className="error-btn">
            Go Back Home →
          </Button>
        </motion.div>
      </Container>

      {/* INTERNAL CSS */}
      <style>{`
        .error-btn {
          background: linear-gradient(135deg, #3a7b20, #4CAF50);
          border: none;
          padding: 12px 30px;
          font-size: 16px;
          border-radius: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(58,123,32,0.3);
        }

        .error-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 25px rgba(58,123,32,0.4);
        }
      `}</style>
    </div>
  );
};

export default NotFound;
