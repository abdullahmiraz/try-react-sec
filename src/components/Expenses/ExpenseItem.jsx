import "./ExpenseItem.css";
import Card from "../UI/Card.jsx";
import ExpenseDate from "./ExpenseDate.jsx";
import React, { useState } from "react";
import axios from "axios";

const ExpenseItem = ({ id, title, amount, date }) => {
  const [formValue, setFormValue] = useState({
    id,
    title,
    amount,
    date,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (value.trim().length !== 0) {
      console.log(value.length);

      setFormValue((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:4000/expenses/${id}`, formValue);
    } catch (error) {
      console.error("Error updating expense:", error);
    }
  };

  const handleDelete = async (e) => {
    try {
      await axios.delete(`http://localhost:4000/expenses/${id}`);
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  };

  return (
    <Card className="expense-item">
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Change Title</button>
      </form>
      <button onClick={handleDelete} type="">
        Delete
      </button>
    </Card>
  );
};

export default ExpenseItem;
