import { useEffect, useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses/Expenses";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/expenses`);
        const data = await response.json();
        setExpenses(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [filterDate, setFilterDate] = useState("");
  console.log(new Date(filterDate).toLocaleDateString("en-US"));

  return (
    <div>
      <NewExpense />
      <div
        className="new-expense__control"
        style={{ width: "20rem", margin: "0 auto" }}
      >
        <label>Filter by date</label>
        <input
          type="date"
          name="filterDate"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />
      </div>
      {Array.isArray(expenses) && expenses.length > 0 && (
        <Expenses expenses={expenses} filterDate={filterDate} />
      )}
    </div>
  );
};

export default App;
