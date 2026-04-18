import React from "react";

const GlobalBtn = ({ btnName, px = 3, py = 2, style = {} }) => {
  return (
    <button
      className={`px-${px} py-${py} rounded`}
      style={{
        backgroundColor: "#3a7b20",
        border: "none",
        color: "white",
        textDecoration:"none",
        ...style,
      }}
    >
      {btnName}
    </button>
  );
};

export default GlobalBtn;
