import React from "react";
import Button from "./Button";

const Item = (props) => {
  return (
    <>
      <label>Id: {props.index}</label>
      <br />
      <label>Item: {props.item}</label>
      <br />
      <label>Price: {props.price}</label>
      <br />
      <label>Date: {props.date}</label>
    </>
  );
};

export default Item;
