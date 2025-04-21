import { useState } from "react";
import React from "react";
import Item from "./Item";
import Button from "./Button";

const Display = ({ setExpense, expenses }) => {
  const deleteExpense = (event) => {
    setExpense(expenses.filter((el) => el.item !== expenses[event]));
    console.log(expenses);
  };

  return (
    <ul>
      {expenses.map((expenses, index) => {
        return (
          <>
            <Item
              key={index}
              item={expenses.item}
              price={expenses.price}
              date={expenses.date}
            />
            <br />
            <Button className="Delete" onClick={deleteExpense} />
            <br />
          </>
        );
      })}
    </ul>
  );
};

export default Display;
