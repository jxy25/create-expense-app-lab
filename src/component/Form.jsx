import React from "react";
import Input from "./Input";
import Button from "./Button";
import Label from "./Label";

const Form = ({
  expenses,
  setExpense,
  newExpense,
  setNewExpense,
  item,
  price,
  date,
}) => {
  const handleChange = (event) => {
    setNewExpense({
      ...newExpense,
      [event.target.className]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const id = { newExpense, id: expenses.length };
    setExpense([...expenses, id]);
    setNewExpense({
      id: "",
      item: "",
      price: "",
      date: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <>
          <Label name={item} />
          <Input
            onChange={handleChange}
            value={newExpense.item}
            className="item"
          />
          <Label name={price} />
          <Input
            onChange={handleChange}
            value={newExpense.price}
            className="price"
          />
          <Label name={date} />
          <Input
            onChange={handleChange}
            value={newExpense.date}
            className="date"
          />
        </>
        <br />
        <Button className="add" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Form;
