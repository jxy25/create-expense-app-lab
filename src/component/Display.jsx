import { useState } from "react";
import React from "react";
import Item from "./Item";
import Button from "./Button";

const Display = (props) => {
  const deleteExpense = ({ setExpense, expenses }) => {
    setExpense(expenses.filter((el) => el.name !== expenses.item));
  };

  return (
    <ul>
      {props.expenses.map((expenses, index) => {
        return (
          <>
            <Item
              index={index}
              item={expenses.item}
              price={expenses.price}
              date={expenses.date}
            />
            <br />
            <Button className="Delete" onClick={deleteExpense} />
          </>
        );
      })}
    </ul>
  );
};

export default Display;
