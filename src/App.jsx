import { useEffect, useState } from "react";
import Expenses from "./components/Expenses/Expenses.jsx";
import NewExpense from "./components/NewExpense/NewExpense.jsx";

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
  }, []); // Empty dependency array to run the effect only once on mount

  console.log(expenses); // Logging outside useEffect for reference

  return (
    <div>
      <NewExpense />
      {Array.isArray(expenses) && expenses.length > 0 && (
        <Expenses expenses={expenses} />
      )}
    </div>
  );
};

export default App;
