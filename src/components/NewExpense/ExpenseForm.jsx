import React, { useState } from "react";
import "./ExpenseFrom.css";

const ExpenseForm = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    amount: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
  };

  return (
    <form onSubmit={handleExpenseSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="name"
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
