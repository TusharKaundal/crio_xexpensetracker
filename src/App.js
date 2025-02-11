// Start your implementation with App.js Here, All the best!

import ExpenseForm from "./component/ExpenseForm";
import WalletBlance from "./component/WalletBalance";
import "./App.css";
import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    localStorage.setItem("wallet", 5000);
    localStorage.setItem("expense", 0);
  }, []);
  return (
    <main className="expense_main">
      <WalletBlance />
      <ExpenseForm />
    </main>
  );
};

export default App;
