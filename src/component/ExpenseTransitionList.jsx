import { useRef, useState } from "react";
import TransactionListItem from "./TransactionListItem";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useExpenseContext } from "../contextApi/ContextProvider";
import { initialState, validateInput } from "../helper/helper";
import ReactModal from "react-modal";
import { useSnackbar } from "notistack";
const controlPageination = (data, itemPerPage, index) => {
  const startIndex = (index - 1) * itemPerPage;
  const dataperPage = [];
  for (let i = startIndex; i < startIndex + itemPerPage; i++) {
    if (data[i]) dataperPage.push({ id: i, expenseitem: data[i] });
  }
  return dataperPage;
};

const ExpenseTransitionList = () => {
  const {
    expenses,
    setExpenses,
    walletBalance,
    setWalletBalance,
    setExpenseBalance,
  } = useExpenseContext();
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(expenses.length / 3);
  const pagedData = controlPageination(expenses, 3, page);
  const [expenseModal, setExpenseModal] = useState(false);
  const [expenseData, setExpenseData] = useState(initialState);
  const editID = useRef(0);
  const { enqueueSnackbar } = useSnackbar();

  function handleDelete(id) {
    const filteredExpense = expenses.filter(
      (pt) => pt.title != expenses[id].title
    );
    setExpenses(filteredExpense);
    let filterTotalPages = Math.ceil(filteredExpense.length / 3);
    if (filterTotalPages < page) {
      setPage((prev) => prev - 1);
    }
    setWalletBalance((prev) => prev + Number(expenses[id].price));
    setExpenseBalance((prev) => prev - Number(expenses[id].price));
  }

  function handleEdit(id) {
    setExpenseModal(true);
    setExpenseData(expenses[id]);
    editID.current = id;
  }

  function handleExpenseEdit(id) {
    const { flag, message } = validateInput(expenseData);
    const difference =
      parseInt(expenses[id].price) - parseInt(expenseData.price);
    if (flag) {
      if (walletBalance - difference >= 0) {
        const editedExpenseDataList = expenses.map((item, idx) => {
          if (id === idx) {
            return expenseData;
          }
          return item;
        });
        console.log(editedExpenseDataList);
        setExpenses(editedExpenseDataList);
        setExpenseBalance((prev) => prev - difference);
        setWalletBalance((prev) => prev + difference);
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
    <>
      <div className="transaction_list_section">
        <h1>Recent Transactions</h1>
        <div className="transaction_list">
          <div>
            {pagedData.length === 0 ? (
              <p>No Transactions</p>
            ) : (
              pagedData.map((item, idx) => (
                <TransactionListItem
                  key={idx}
                  {...item.expenseitem}
                  id={item.id}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              ))
            )}
          </div>
          {expenses.length > 0 && (
            <div className="pagination">
              {page > 1 && (
                <button onClick={() => setPage((prev) => prev - 1)}>
                  <IoIosArrowRoundBack />
                </button>
              )}
              <div>{page}</div>
              {page < totalPages && (
                <button onClick={() => setPage((prev) => prev + 1)}>
                  <IoIosArrowRoundForward />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      {expenseModal && (
        <ReactModal
          className="modal"
          overlayClassName="overlayModal"
          isOpen={expenseModal}
          ariaHideApp={false}
        >
          <p>Edit Expenses</p>
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
            <button
              type="submit"
              onClick={() => handleExpenseEdit(editID.current)}
            >
              Edit Expense
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
    </>
  );
};

export default ExpenseTransitionList;
