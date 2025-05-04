import React from "react";

const Input = (props) => {
  return (
    <input
      className={props.className}
      type="text"
      value={props.value}
      onChange={props.onChange}
    ></input>
  );
};

export default Input;
