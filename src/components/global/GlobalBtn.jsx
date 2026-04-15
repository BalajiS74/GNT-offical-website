import React from "react";

const GlobalBtn = ({ btnName, px = 3, py = 2, style = {} }) => {
  return (
    <button
      className={`px-${px} py-${py} rounded`}
      style={{
        backgroundColor: "#68D53D",
        border: "none",
        color: "white",
        ...style,
      }}
    >
      {btnName}
    </button>
  );
};

export default GlobalBtn;
