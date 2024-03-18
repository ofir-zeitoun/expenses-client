import { EditOutlined, UserOutlined } from "@ant-design/icons";
import "./expense-item.css";
import { Expense } from "../../../../@types/expense";

export const ExpenseItem = ({
  item,
  className,
}: {
  item: Expense;
  className?: string;
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className={`expense-item ${className}`}>
      {item.creatorImageUrl ? (
        <img
          className="expense-icon"
          src={item.creatorImageUrl}
          alt="Creator"
        />
      ) : (
        <div className="user-icon-wrapper">
          <UserOutlined className="user-icon" />
        </div>
      )}
      <div className="expense-details">
        <div className="expense-title">{item.name}</div>
      </div>
      <div className="expense-price">${item.price.toFixed(2)}</div>
      <div className="expense-timestamp">
        <div className="expense-date">{formatDate(item.createdAt)}</div>
        <div className="expense-time">{formatTime(item.createdAt)}</div>
      </div>
      <EditOutlined className="edit-icon" />
    </div>
  );
};
