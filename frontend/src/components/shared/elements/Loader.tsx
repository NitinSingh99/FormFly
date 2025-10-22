import React from "react";
import "../../../assets/loader.css";

const Loader: React.FC = () => {
  return (
    <div className="three-body">
      <div className="three-body__dot" />
      <div className="three-body__dot" />
      <div className="three-body__dot" />
    </div>
  );
};

export default Loader;
