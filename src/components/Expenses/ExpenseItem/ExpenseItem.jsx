import "./ExpenseItem.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../UI/Card";

const ExpenseItem = ({ id, title, amount, date, filterDate }) => {
  const [formValue, setFormValue] = useState({
    id,
    title,
    amount,
    date,
  });
  const [filteredView, setFilteredView] = useState(true); // Initially set to true to show all tasks

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (value.trim().length !== 0) {
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

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/expenses/${id}`);
      window.location.reload(); // Reload to reflect changes
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  useEffect(() => {
    const taskDate = new Date(date).toISOString().split('T')[0];
    if (!filterDate || taskDate <= filterDate) {
      setFilteredView(true);
    } else {
      setFilteredView(false);
    }
  }, [date, filterDate]);

  return (
    filteredView && (
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
            <div>
              {new Date(date).toLocaleDateString("en-US")}
            </div>
            <div className="expense-item__price">${amount}</div>
          </div>
          <button type="submit">Change Title</button>
        </form>
        <button onClick={handleDelete}>Delete</button>
      </Card>
    )
  );
};

export default ExpenseItem;
