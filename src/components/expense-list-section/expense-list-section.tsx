import { useState } from "react";
import { useExpenseLists } from "./useExpenseLists";

import { Button } from "antd";
import {
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";
import { ExpenseList } from "./expense-list";
import "./expense-list-section.css";
import ExpenseListToolbar from "./expense-list-toolbar/expense-list-toolbar";

export const ExpenseListSection = () => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const { data: section, isLoading, error } = useExpenseLists(0, 5, sortOrder);
  console.log(section);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {/* <Button
        icon={
          sortOrder === "asc" ? (
            <SortAscendingOutlined />
          ) : (
            <SortDescendingOutlined />
          )
        }
        onClick={toggleSortOrder}
      >
        Sort
      </Button> */}
      <div className="expense-list-container">
        <ExpenseListToolbar />

        {section?.data?.map((list) => (
          <ExpenseList key={list._id} list={list} />
        ))}
      </div>
    </div>
  );
};
