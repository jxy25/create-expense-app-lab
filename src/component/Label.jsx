import React from "react";

const Label = (props) => {
  return <label htmlFor={props.name}> {props.name} </label>;
};

export default Label;
