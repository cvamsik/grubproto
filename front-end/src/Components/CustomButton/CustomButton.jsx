import React from "react";
import "./CustomButton-style.css";

const CustomButton = ({ children, ...otherProps }) => (
  <div className="CustomButton">
    <button {...otherProps}>{children}</button>
  </div>
);

export default CustomButton;
