import { PiPizzaThin } from "react-icons/pi";
import { CiGift, CiRollingSuitcase } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BsPencil } from "react-icons/bs";
const TransactionListItem = () => {
  return (
    <div className="transaction_list_item">
      <div className="transaction_item">
        <span className="transaction_category">
          <PiPizzaThin />
        </span>
        <p>Samosa</p>
      </div>
      <div className="transaction_edit_delete">
        <p>₹ 500</p>
        <span id="items-delete">
          <IoIosCloseCircleOutline />
        </span>
        <span id="items-edit">
          <BsPencil />
        </span>
      </div>
    </div>
  );
};

export default TransactionListItem;
