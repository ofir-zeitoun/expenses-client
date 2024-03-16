import { EditOutlined } from "@ant-design/icons";
import "./expense-item.css";
import { Expense } from "../../@types/expense";

export const ExpenseItem = ({ item }: { item: Expense }) => {
  return (
    <div className="expense-item">
      <img
        className="item-creator-image"
        src={item.creatorImageUrl}
        alt="Creator"
      />
      <div className="item-name">{item.name}</div>
      <div className="item-date">
        {new Date(item.date).toLocaleDateString()}
      </div>
      <div className="item-price">${item.price.toFixed(2)}</div>
      <EditOutlined className="edit-icon" />
    </div>
  );
};
