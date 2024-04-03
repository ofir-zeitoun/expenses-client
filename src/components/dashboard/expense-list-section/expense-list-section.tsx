import { useState } from "react";
import { SortOrder } from "../../../@types/sortOrderTypes";
import ExpenseListToolbar from "./expense-list-toolbar/expense-list-toolbar";
import { ExpenseList } from "./expense-list";
import { useExpenseLists } from "./useExpenseLists";
import { SuspenseComponent } from "../../shared";
import "./expense-list-section.css";

export const ExpenseListSection = () => {
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const { data: section, isLoading, error } = useExpenseLists(0, 5, sortOrder);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <SuspenseComponent isLoading={isLoading} error={error}>
      <div className="expense-list-section">
        <div className="expense-list-container">
          <ExpenseListToolbar toggleSortOrder={toggleSortOrder} />
          {section?.data?.map((list) => (
            <ExpenseList key={list._id} list={list} />
          ))}
        </div>
      </div>
    </SuspenseComponent>
  );
};
