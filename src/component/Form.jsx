import { useState } from "react";
import React from "react";
import Item from "./Item";
import Input from "./Input";
import Button from "./Button";

const Form = ({ expenses, setExpense, newExpense, setNewExpense }) => {
  const handleChange = (event) => {
    setNewExpense({
      ...newExpense,
      [event.target.className]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setExpense([...expenses, newExpense]);
    setNewExpense({
      item: "",
      price: "",
      date: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <>
            <label>Item </label>
            <Input
              onChange={handleChange}
              value={newExpense.item}
              className="item"
            />
            <label>Price </label>
            <Input
              onChange={handleChange}
              value={newExpense.price}
              className="price"
            />
            <label>Date </label>
            <Input
              onChange={handleChange}
              value={newExpense.date}
              className="date"
            />
          </>
          <br />
          <Button className="add" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default Form;
