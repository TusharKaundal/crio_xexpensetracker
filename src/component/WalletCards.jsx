import clsx from "clsx";
const WalletCards = ({ value, placeholder }) => {
  return (
    <div className="wallet_cards">
      <h1
        id={clsx("", {
          wallet_heading: placeholder === "Wallet",
          expense_heading: placeholder === "Expense",
        })}
      >
        {placeholder} Balance: <span>₹{value}</span>
      </h1>
      <button
        id={clsx("", {
          wallet_btn: placeholder === "Wallet",
          expense_btn: placeholder === "Expense",
        })}
      >
        + Add {placeholder}
      </button>
    </div>
  );
};

export default WalletCards;
