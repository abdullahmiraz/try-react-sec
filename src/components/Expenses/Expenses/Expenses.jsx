import "./Expenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../UI/Card";

function Expenses({ expenses, filterDate }) {
  const reversedExpenses = expenses.slice().reverse(); // Create a copy and reverse
  console.log(filterDate);

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
          filterDate={filterDate}
        />
      ))}
    </Card>
  );
}

export default Expenses;
