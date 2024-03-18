import React, { useState } from "react";
import { Button } from "antd";
import {
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";

import { ExpenseItem } from "./expense-item";
import { ListProps } from "../../../@types/expense-list-prop";
import { ExpensesHeader } from "./expenses-header";
import { ExpenseListHeader } from "./expense-list-header";
import "./expense-list.css";

export const ExpenseList: React.FC<{ list: ListProps }> = ({ list }) => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [currentPage, setCurrentPage] = useState(1);

  // const {
  //   data: expenses,
  //   isLoading,
  //   error,
  // } = useExpenses(token, (currentPage - 1) * 10, 10, sortOrder);

  // const toggleSortOrder = () => {
  //   setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  // };

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="expenses-list">
      <ExpenseListHeader />
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
      <ExpensesHeader />
      <div className="sperated-expenses-list" />
      {list.expenses?.map((item, index) => (
        <ExpenseItem
          key={item._id}
          item={item}
          className={index % 2 === 0 ? "expense-item even" : "expense-item odd"}
        />
      ))}
      <div>
        {/* <Button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button onClick={() => setCurrentPage((p) => p + 1)}>Next</Button> */}
      </div>
    </div>
  );
};
