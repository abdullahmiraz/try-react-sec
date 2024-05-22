import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.jsx";
import Card from "../UI/Card";

function Expenses({ expenses }) {
  const reversedExpenses = expenses.slice().reverse(); // Create a copy and reverse

  console.log(reversedExpenses);

  return (
    <Card className="expenses">
      {reversedExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
