/* eslint-disable react/prop-types */
import clsx from "clsx";
import React from "react";
const WalletCards = ({ value, placeholder, handleModal }) => {
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
        onClick={() => handleModal(true)}
      >
        + Add {placeholder}
      </button>
    </div>
  );
};

export default React.memo(WalletCards);
