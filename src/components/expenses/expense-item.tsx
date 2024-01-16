import { Expense } from "../../@types/expense";

const formatDateAndTime = (dateString: string | number | Date) => {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDate = `${day}.${month}.${year}`;

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  return `${formattedDate} ${formattedTime}`;
};

const ExpenseItem = ({ item }: { item: Expense }) => {
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

export default ExpenseItem;
