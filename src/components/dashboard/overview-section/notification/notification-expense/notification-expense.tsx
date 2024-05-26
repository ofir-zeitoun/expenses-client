import { NotificationExpenseProps } from "../../../../../@types/notification";
import { UserPicture } from "../../../../shared";
import "./notification-expense.css";

export const NotificationExpense = ({
  avatarSrc,
  expenseDescription,
  listName,
  price,
}: NotificationExpenseProps) => {
  return (
    <div className="notification-expense">
      <UserPicture creatorImageUrl={avatarSrc} />
      <div className="notification-content">
        <p className="notification-description">
          Added a new <strong>{expenseDescription}</strong> to{" "}
          <strong>{listName}</strong>
        </p>
        <div className="notification-price">${price}</div>
      </div>
    </div>
  );
};
