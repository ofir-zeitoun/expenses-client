import React from "react";
import { ExpenseLIstType } from "../../../../@types/expense-list-prop";
import AddExpenseItem from "./add-expense-item/add-expense-item";
import { ExpenseItem } from "./expense-item";
import { ExpensesHeader } from "./expenses-header";
import { ExpenseListHeader } from "./expense-list-header";
import "./expense-list.css";



export const ExpenseList = React.memo(({ list }: { list: ExpenseLIstType }) => {
   const sortedExpenses = [...list.expenses].sort((a, b) => {
    return (a.price - b.price) ;
  });

  return (
    <div className="expenses-list">
      <ExpenseListHeader
        listName={list.name}
        expenseTotal={parseFloat(list.totalExpenses).toFixed(2)}
      />
      <ExpensesHeader />
      <div className="separated-expenses-list">
        {sortedExpenses.map((expense) => (
          <ExpenseItem key={expense._id} expense={expense} />
        ))}
      </div>
      <AddExpenseItem />
    </div>
  );
});

export default ExpenseList;
