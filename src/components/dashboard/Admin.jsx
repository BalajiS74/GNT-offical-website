import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion, AnimatePresence } from "framer-motion";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("register");
  const [data, setData] = useState({
    register: [],
    contact: [],
    job: [],
    meeting: [],
  });
  const [loading, setLoading] = useState(true);

  // 🔥 FETCH ALL APIs AT ONCE
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [register, contact, job, meeting] = await Promise.all([
          fetch("https://gnt-official-website-backend.onrender.com/api/register").then((res) => res.json()),
          fetch("https://gnt-official-website-backend.onrender.com/api/contact").then((res) => res.json()),
          fetch("https://gnt-official-website-backend.onrender.com/api/apply-job").then((res) =>
            res.json(),
          ),
          fetch("https://gnt-official-website-backend.onrender.com/api/meetings").then((res) => res.json()),
        ]);

        setData({
          register: register.data || [],
          contact: contact.data || [],
          job: job.data || [],
          meeting: meeting.data || [],
        });

        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 🔥 DELETE FUNCTION
  const handleDelete = async (type, id) => {
    try {
      await fetch(`https://gnt-official-website-backend.onrender.com/api/${type}/${id}`, {
        method: "DELETE",
      });

      setData((prev) => ({
        ...prev,
        [type]: prev[type].filter((item) => item.id !== id),
      }));
    } catch (err) {
      console.error(err);
    }
  };

  // 🔥 CARD RENDER
  const renderCards = () => {
    const current = data[activeTab];

    if (loading) return <p className="text-muted">Loading...</p>;
    if (!current.length) return <p className="text-muted">No data found</p>;

    return (
      <div className="row g-4">
        <AnimatePresence>
          {current.map((item) => (
            <motion.div
              key={item.id}
              className="col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="card shadow-lg border-0 h-100"
              >
                <div className="card-body">
                  {Object.entries(item).map(
                    ([key, value]) =>
                      key !== "id" && (
                        <p key={key} className="mb-2">
                          <strong className="text-capitalize">{key}:</strong>{" "}
                          {key === "resume" ? (
                            <span className="text-success">{value}</span>
                          ) : (
                            value
                          )}
                        </p>
                      ),
                  )}
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="btn btn-danger mt-3 w-100"
                    onClick={() => handleDelete(activeTab, item.id)}
                  >
                    Delete
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="d-flex admin-container">
      {/* SIDEBAR */}
      <motion.div
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="sidebar p-3"
      >
        <h4 className="text-white mb-4 fw-bold">Admin Dashboard</h4>
        {["register", "contact", "job", "meeting"].map((tab) => (
          <motion.button
            key={tab}
            whileHover={{ scale: 1.05 }}
            className={`btn w-100 mb-2 ${
              activeTab === tab ? "btn-light" : "btn-outline-light"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </motion.button>
        ))}
      </motion.div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="content p-4 w-100"
      >
        <h3 className="mb-4 text-capitalize fw-bold">{activeTab} Data</h3>
        {renderCards()}
      </motion.div>

      {/* INTERNAL CSS */}
      <style>{`
        .admin-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f0f4f7, #e9ecef);
        }

        .sidebar {
          width: 240px;
          background: linear-gradient(180deg, #2e7d32, #1b5e20);
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
          box-shadow: 4px 0 10px rgba(0,0,0,0.1);
        }

        .content {
          background: #ffffff;
          border-radius: 20px;
          box-shadow: inset 0 0 10px rgba(0,0,0,0.05);
        }

        .card {
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
          .admin-container {
            flex-direction: column;
          }

          .sidebar {
            width: 100%;
            display: flex;
            gap: 10px;
            overflow-x: auto;
            border-radius: 0;
          }

          .sidebar button {
            flex: 1;
            white-space: nowrap;
          }
        }
      `}</style>
    </div>
  );
};

export default Admin;
