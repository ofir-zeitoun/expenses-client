import React, { useState } from "react";
import { ExpenseLIstType } from "../../../../@types/expense-list-prop";
import { ExpenseItem } from "./expense-item";
import { ExpensesHeader } from "./expenses-header";
import { ExpenseListHeader } from "./expense-list-header";
import { PlusOutlined } from "@ant-design/icons";
import "./expense-list.css";

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
      <button className="add-expense-button">
        <PlusOutlined /> Add New Expense
      </button>
    </div>
  );
});
