// Start your implementation with App.js Here, All the best!
import React from "react";
import ExpenseForm from "./component/ExpenseForm";
import WalletBlance from "./component/WalletBalance";
import "./App.css";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");
const App = () => {
  return (
    <main className="expense_main">
      <WalletBlance />
      <ExpenseForm />
    </main>
  );
};

export default App;
