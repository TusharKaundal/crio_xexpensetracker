/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useState } from "react";
const initialState = {
  walletBalance: Number(localStorage.getItem("walletBalance")) || 5000,
  expenseBalance: Number(localStorage.getItem("expenseBalance")) || 0,
  expenses: JSON.parse(localStorage.getItem("expenses")) || [],
};

const ExpenseContext = createContext();
const ContextProvider = ({ children }) => {
  const [walletBalance, setWalletBalance] = useState(
    initialState.walletBalance
  );
  const [expenseBalance, setExpenseBalance] = useState(
    initialState.expenseBalance
  );
  const [expenses, setExpenses] = useState(initialState.expenses);

  useEffect(() => {
    localStorage.setItem("walletBalance", walletBalance);
    localStorage.setItem("expenseBalance", expenseBalance);
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [walletBalance, expenseBalance, expenses]);
  return (
    <ExpenseContext.Provider
      value={{
        walletBalance,
        setWalletBalance,
        expenseBalance,
        setExpenseBalance,
        expenses,
        setExpenses,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export default ContextProvider;

export const useExpenseContext = () => useContext(ExpenseContext);
