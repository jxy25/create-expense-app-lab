import React from "react";

const Button = (props) => {
  return (
    <button
      className={`btn ${props.className}`}
      type="button"
      onClick={props.onClick}
    >
      {props.className}
    </button>
  );
};

export default Button;
