import { lazy } from "react";
import ExpensePieChart from "./ExpensePieChart";
const WalletCards = lazy(() => import("./WalletCards"));

const WalletBlance = () => {
  const walletValue = localStorage.getItem("wallet");
  const expenseValue = localStorage.getItem("expense");
  return (
    <div>
      <h1>Expense Tracker</h1>
      <div className={`wallet_main`}>
        <div className="wallet_section">
          <WalletCards value={walletValue} placeholder={"Wallet"} />
          <WalletCards value={expenseValue} placeholder={"Expense"} />
        </div>
        <ExpensePieChart />
      </div>
    </div>
  );
};

export default WalletBlance;
