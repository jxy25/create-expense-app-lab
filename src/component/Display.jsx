import React from "react";
import Item from "./Item";
import Button from "./Button";

const Display = ({ setExpense, expenses }) => {
  const deleteExpense = (id) => {
    setExpense((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
    console.log(expenses);
  };

  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          <Item
            item={expense.newExpense.item}
            price={expense.newExpense.price}
            date={expense.newExpense.date}
          />
          <Button
            className="delete"
            onClick={() => deleteExpense(expense.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default Display;
