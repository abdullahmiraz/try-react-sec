import React, { useState } from "react";
import "./ExpenseFrom.css";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const ExpenseForm = () => {
  const [formValue, setFormValue] = useState({
    id: uuidv4(),
    title: "",
    amount: "",
    date: "",
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

  const handleExpenseSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`http://localhost:4000/expenses`, formValue);
      setFormValue({
        id: uuidv4(),
        title: "",
        amount: "",
        date: "",
      });
    } catch (error) {
      console.error(error);
    }
    window.location.reload();
    console.log(formValue);
  };

  return (
    <form onSubmit={handleExpenseSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formValue.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            value={formValue.amount}
            onChange={handleInputChange}
          />
        </div>
        <div className="new-expense__control">
          <input
            type="date"
            min="2019-01-01"
            max="2099-12-31"
            name="date"
            value={formValue.date}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
