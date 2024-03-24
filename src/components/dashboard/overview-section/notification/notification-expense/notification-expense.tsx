import { NotificationExpenseProps } from "../../../../../@types/notification";
import { UserPicture } from "../../../../shared/user-picture";
import "./notification-expense.css";

export const NotificationExpense = ({
  avatarSrc,
  expenseDescription,
  listName,
  amount,
}: NotificationExpenseProps) => {
  return (
    <div className="notification-expense">
      <UserPicture creatorImageUrl={avatarSrc} />
      <div className="notification-content">
        <p className="notification-description">
          Added a new <strong>{expenseDescription}</strong> to{" "}
          <strong>{listName}</strong>
        </p>
        <div className="notification-amount">${amount}</div>
      </div>
    </div>
  );
};
