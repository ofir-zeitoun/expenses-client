import { ExpenseLIstType } from "../../../../@types/expense-list-prop";
import { ExpenseItem } from "./expense-item";
import { ExpensesHeader } from "./expenses-header";
import { ExpenseListHeader } from "./expense-list-header";
import "./expense-list.css";

export const ExpenseList = ({ list }: { list: ExpenseLIstType }) => {
  return (
    <div className="expenses-list">
      <ExpenseListHeader
        listName={list.name}
        expenseTotal={list.expenseTotal.toFixed(2)}
      />
      <ExpensesHeader />
      <div className="sperated-expenses-list" />
      {list.expenses?.map((expense) => (
        <ExpenseItem key={expense._id} expense={expense} />
      ))}
      <div></div>
    </div>
  );
};
