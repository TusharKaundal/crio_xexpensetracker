import { useState } from "react";
import TransactionListItem from "./TransactionListItem";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const controlPageination = (data, itemPerPage, index) => {
  const startIndex = (index - 1) * itemPerPage;
  return data.slice(startIndex, startIndex + itemPerPage);
};

const data = [1, 2, 3, 4, 5, 6, 7, 8];
const ExpenseTransitionList = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(data.length / 3);
  const pagedData = controlPageination(data, 3, page);
  return (
    <div className="transaction_list_section">
      <h1>Recent Transactions</h1>
      <div className="transaction_list">
        <div>
          {pagedData.map((item) => (
            <TransactionListItem key={item} />
          ))}
        </div>
        <div className="pagination">
          {page > 1 && (
            <button onClick={() => setPage((prev) => prev - 1)}>
              <IoIosArrowRoundBack />{" "}
            </button>
          )}
          <div>{page}</div>
          {page < totalPages && (
            <button onClick={() => setPage((prev) => prev + 1)}>
              <IoIosArrowRoundForward />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpenseTransitionList;
