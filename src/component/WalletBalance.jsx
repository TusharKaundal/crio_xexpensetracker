/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useExpenseContext } from "../contextApi/ContextProvider";
import { initialState, validateInput } from "../helper/helper";
import WalletCards from "./WalletCards";
import ReactModal from "react-modal";
import ExpensePieChart from "./ExpensePieChart";
import { useSnackbar } from "notistack";

const WalletBlance = () => {
  const {
    walletBalance,
    setWalletBalance,
    expenseBalance,
    setExpenseBalance,
    setExpenses,
  } = useExpenseContext();
  const [walletModal, setWalletModal] = useState(false);
  const [expenseModal, setExpenseModal] = useState(false);
  const [walletamount, setWalletAmount] = useState("");
  const [expenseData, setExpenseData] = useState(initialState);
  const { enqueueSnackbar } = useSnackbar();
  function handleWalletSubmit() {
    if (walletamount && Number(walletamount) > 0) {
      setWalletBalance((prev) => prev + Number(walletamount));
      setWalletModal(false);
      setWalletAmount("");
    } else {
      enqueueSnackbar("Please Enter Amount more than 0", {
        variant: "error",
      });
    }
  }
  function handleExpenseSubmit() {
    const { flag, message } = validateInput(expenseData);
    if (flag) {
      if (walletBalance - Number(expenseData.price) >= 0) {
        setExpenses((prev) => [...prev, expenseData]);
        setExpenseBalance((prev) => prev + Number(expenseData.price));
        setWalletBalance((prev) => prev - Number(expenseData.price));
        setExpenseData(initialState);
        setExpenseModal(false);
      } else {
        alert("Expenses are more than Wallet Balance");
      }
    } else {
      enqueueSnackbar(message, { variant: "error" });
    }
  }

  return (
    <div>
      <h1>Expense Tracker</h1>
      <div className={`wallet_main`}>
        <div className="wallet_section">
          <WalletCards
            value={walletBalance}
            placeholder={"Wallet"}
            handleModal={setWalletModal}
          />
          <WalletCards
            value={expenseBalance}
            placeholder={"Expense"}
            handleModal={setExpenseModal}
          />
        </div>
        <ExpensePieChart />
      </div>
      {walletModal && (
        <ReactModal
          isOpen={walletModal}
          className="modal wallet-padding"
          overlayClassName="overlayModal"
          ariaHideApp={false}
        >
          <p>Add Balance</p>
          <div className="wallet_modal">
            <input
              type="number"
              placeholder="Income Amount"
              value={walletamount}
              onChange={(e) => setWalletAmount(e.target.value)}
            />
            <button type="submit" onClick={handleWalletSubmit}>
              Add Balance
            </button>
            <button
              type="reset"
              onClick={() => setWalletModal(false)}
              name="cancel"
              value="wallet"
            >
              Cancel
            </button>
          </div>
        </ReactModal>
      )}
      {expenseModal && (
        <ReactModal
          className="modal"
          overlayClassName="overlayModal"
          isOpen={expenseModal}
          ariaHideApp={false}
        >
          <p>Add Expenses</p>
          <div className="expense_modal">
            <input
              type="text"
              value={expenseData.title}
              placeholder="Title"
              onChange={(e) =>
                setExpenseData((prev) => ({ ...prev, title: e.target.value }))
              }
            />
            <input
              type="number"
              value={expenseData.price}
              placeholder="Price"
              onChange={(e) =>
                setExpenseData((prev) => ({ ...prev, price: e.target.value }))
              }
            />
            <select
              id="expense_category"
              value={expenseData.category}
              onChange={(e) =>
                setExpenseData((prev) => ({
                  ...prev,
                  category: e.target.value,
                }))
              }
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="Food">Food</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Travel">Travel</option>
            </select>
            <input
              type="date"
              value={expenseData.date}
              onChange={(e) =>
                setExpenseData((prev) => ({
                  ...prev,
                  date: e.target.value,
                }))
              }
            />
            <button type="submit" onClick={handleExpenseSubmit}>
              Add Expense
            </button>
            <button
              type="reset"
              onClick={() => setExpenseModal(false)}
              name="cancel"
            >
              Cancel
            </button>
          </div>
        </ReactModal>
      )}
    </div>
  );
};

export default WalletBlance;
