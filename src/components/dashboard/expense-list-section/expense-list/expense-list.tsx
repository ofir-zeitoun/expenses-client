import React from "react";
import { ExpenseListType } from "../../../../@types/expense-list-prop";
import AddExpenseItem from "./add-expense-item/add-expense-item";
import { ExpenseItem } from "./expense-item";
import { ExpensesHeader } from "./expenses-header";
import { ExpenseListHeader } from "./expense-list-header";
import "./expense-list.css";

interface ExpenseListProps {
  list: ExpenseListType;
  onDelete: (id: string) => void;
}

export const ExpenseList: React.FC<ExpenseListProps> = React.memo(
  ({ list, onDelete }) => {
    return (
      <div className="expenses-list">
        <ExpenseListHeader
          listId={list._id}
          listName={list.name}
          expenseTotal={list.totalExpenses.toFixed(2)}
          onDelete={onDelete}
        />
        <ExpensesHeader />
        <div className="separated-expenses-list">
          {list.expenses.map((expense) => (
            <ExpenseItem key={expense._id} expense={expense} />
          ))}
        </div>
        <AddExpenseItem />
      </div>
    );
  }
);

export default ExpenseList;
