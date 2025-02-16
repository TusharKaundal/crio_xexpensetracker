import React from "react";
import ExpenseBarChart from "./ExpenseBarChart";
import ExpenseTransitionList from "./ExpenseTransitionList";

const ExpenseForm = () => {
  return (
    <div className="transaction_section">
      <ExpenseTransitionList />
      <ExpenseBarChart />
    </div>
  );
};

export default ExpenseForm;
