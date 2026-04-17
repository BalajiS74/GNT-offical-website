import React from "react";

function SafeZone({ children }) {
  return (
    <div className="px-3 px-sm-4 px-md-5 py-2 py-sm-3 py-md-4">{children}</div>
  );
}

export default SafeZone;
