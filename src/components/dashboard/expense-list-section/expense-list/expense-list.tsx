import React, { useState } from "react";
import { ExpenseLIstType } from "../../../../@types/expense-list-prop";
import { ExpenseItem } from "./expense-item";
import { ExpensesHeader } from "./expenses-header";
import { ExpenseListHeader } from "./expense-list-header";

import "./expense-list.css";
import AddExpenseItem from "./add-expense-item/add-expense-item";

export const ExpenseList = React.memo(({ list }: { list: ExpenseLIstType }) => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortedExpenses = [...list.expenses].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return (
    <div className="expenses-list">
      <ExpenseListHeader
        listName={list.name}
        expenseTotal={parseFloat(list.totalExpenses).toFixed(2)}
        toggleSortOrder={toggleSortOrder}
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
