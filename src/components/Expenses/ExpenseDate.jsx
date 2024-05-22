import "./ExpenseDate.css";

const ExpenseDate = ({ date }) => {
  // Create a Date object from the date string
   console.log(new Date(date).toLocaleDateString("en-US"));

  // Check if the date is valid
  if (isNaN(expenseDate.getTime())) {
    // Handle invalid date
    return <div className="expense-date">Invalid Date</div>;
  }

  // Format the date
  const options = { year: "numeric", month: "long", day: "2-digit" };
  const formattedDate = expenseDate.toLocaleDateString("en-US");

  return <div className="expense-date">{formattedDate}</div>;
};

export default ExpenseDate;
