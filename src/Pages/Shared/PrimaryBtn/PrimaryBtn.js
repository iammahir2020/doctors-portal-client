import React from "react";

const PrimaryBtn = ({ children }) => {
  return (
    <button className="btn border-0 bg-gradient-to-r from-secondary to-primary text-white uppercase font-bold">
      {children}
    </button>
  );
};

export default PrimaryBtn;
