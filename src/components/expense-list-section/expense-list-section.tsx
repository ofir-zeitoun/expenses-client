import { useState } from "react";
import { SortOrder } from "../../@types/sortOrderTypes";
import ExpenseListToolbar from "./expense-list-toolbar/expense-list-toolbar";
import { ExpenseList } from "./expense-list";
import { useExpenseLists } from "./useExpenseLists";
import "./expense-list-section.css";

export const ExpenseListSection = () => {
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const { data: section, isLoading, error } = useExpenseLists(0, 5, sortOrder);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="expense-list-container">
        <ExpenseListToolbar toggleSortOrder={toggleSortOrder} />
        {section?.data?.map((list) => (
          <ExpenseList key={list._id} list={list} />
        ))}
      </div>
    </div>
  );
};
