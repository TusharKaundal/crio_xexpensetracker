import React from "react";
import { PiPizzaThin } from "react-icons/pi";
import { CiGift, CiRollingSuitcase } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BsPencil } from "react-icons/bs";
const IconList = {
  Food: <PiPizzaThin />,
  Entertainment: <CiGift />,
  Travel: <CiRollingSuitcase />,
};
const TransactionListItem = ({
  id,
  category,
  title,
  price,
  date,
  handleDelete,
  handleEdit,
}) => {
  let formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div id={id} className="transaction_list_item">
      <div className="transaction_item">
        <span className="transaction_category">{IconList[category]}</span>
        <div className="transaction_item_heading">
          <p>{title}</p>
          <span>{formattedDate}</span>
        </div>
      </div>
      <div className="transaction_edit_delete">
        <p>₹ {price}</p>
        <div className="edit_delete_span">
          <span id="items-delete" onClick={() => handleDelete(id)}>
            <IoIosCloseCircleOutline />
          </span>
          <span id="items-edit" onClick={() => handleEdit(id)}>
            <BsPencil />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TransactionListItem;
