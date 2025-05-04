import React from "react";

const Item = (props) => {
  return (
    <>
      <label>Item: {props.item}</label>
      <br />
      <label>Price: {props.price}</label>
      <br />
      <label>Date: {props.date}</label>
    </>
  );
};

export default Item;
