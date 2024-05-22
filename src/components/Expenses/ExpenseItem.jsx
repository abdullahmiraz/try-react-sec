import "./ExpenseItem.css";
import Card from "../UI/Card.jsx";
import ExpenseDate from "./ExpenseDate.jsx";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  const { id, title, amount, date } = props;
  console.log(date);

  const [formValue, setFormValue] = useState({
    id,
    title,
    amount,
    date,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(formValue);
    if (value.trim().length !== 0) {
      console.log(value.length);

      setFormValue((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <Card className="expense-item">
      <form>
        <div className="expense-item__description">
          <input
            className="my-task-name"
            type="text"
            name="title"
            value={formValue.title}
            onChange={handleInputChange}
          />
          <div>{new Date(date).toLocaleDateString("en-US")} </div>
          <div className="expense-item__price">${amount}</div>
        </div>
      </form>
      <button type="submit">Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
