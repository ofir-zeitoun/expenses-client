import { Expense } from "../../@types/expense";
import { formatDateAndTime } from "./date-format";

export const ExpenseItem = ({ item }: { item: Expense }) => {
  return (
    <div className="expense-item">
      <h3 className="expense-item-name">{item.name}</h3>
      <img className="expense-item-image" src="" alt={item.name} />
      <div>
        <h3 className="expense-item-cause">{item.cause}</h3>
        <h3 className="expense-item-date">{formatDateAndTime(item.date)}</h3>
      </div>
      <div className="expense-item-amount">
        <span>{item.amount}</span>
      </div>
    </div>
  );
};
