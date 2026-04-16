import React from "react";

export const Gtext = ({ type = "p", children }) => {
  const Tag = type; // assign tag

  return <Tag>{children}</Tag>;
};

export const Spltext = ({ type = "p", children, className, ...style }) => {
  const Tag = type; // assign tag

  return (
    <Tag className={className} style={{ color: "#3a7b20" }}>
      {children}
    </Tag>
  );
};
