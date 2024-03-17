import { useState } from "react";
import { useExpenseLists } from "./useExpenseLists";

import { Button } from "antd";
import {
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";
import { ExpenseList } from "./expense-list";

export const ExpenseListSection = () => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const {
    data: expenseLists,
    isLoading,
    error,
  } = useExpenseLists(0, 5, sortOrder);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Button
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
      </Button>
      {expenseLists?.map((list) => (
        <ExpenseList key={list._id} list={list} />
      ))}
    </div>
  );
};
