import { useState } from "react";
import Form from "./component/Form";
import Display from "./component/Display";

const App = () => {
  const [expenses, setExpense] = useState([]);

  const [newExpense, setNewExpense] = useState({
    item: "",
    price: "",
    date: "",
  });

  return (
    <>
      <h1>React Expense Cart</h1>
      <Form
        expenses={expenses}
        setExpense={setExpense}
        newExpense={newExpense}
        setNewExpense={setNewExpense}
      />
      <ul>
        <h3>Display here</h3>
        <Display expenses={expenses} setExpense={setExpense} />
      </ul>
    </>
  );
};

export default App;
