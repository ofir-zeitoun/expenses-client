import { EditOutlined } from "@ant-design/icons";
import UserPicture from "../../../shared/user-picture/user-picture";
import { Expense } from "../../../../@types/expense";
import { formatDate, formatTime } from "../../../utilities/format-time";
import "./expense-item.css";

export const ExpenseItem = ({
  expense,
  className,
}: {
  expense: Expense;
  className?: string;
}) => {
  return (
    <div className={`expense-item ${className}`}>
      <UserPicture creatorImageUrl={expense.creatorImageUrl} />
      <div className="expense-details">
        <div className="expense-title">{expense.name}</div>
      </div>
      <div className="expense-price">${expense.price.toFixed(2)}</div>
      <div className="expense-timestamp">
        <div className="expense-date">{formatDate(expense.createdAt)}</div>
        <div className="expense-time">{formatTime(expense.createdAt)}</div>
      </div>
      <EditOutlined className="edit-icon" />
    </div>
  );
};
