import { useState } from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

import "./expenses-header.css";
import { SortOrder } from "../../../../../@types/sortOrderTypes";
import { SortField } from "../../../../../@types/sortField";

export const ExpensesHeader = () => {
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [sortField, setSortField] = useState<SortField>("date");

  const handleSort = (field: SortField) => {
    if (field === sortField && sortOrder === "asc") {
      setSortOrder("desc");
    } else {
      setSortOrder("asc");
      setSortField(field);
    }

    console.log(`Sorting by ${field} in ${sortOrder} order`);
  };

  const renderSortIcon = (field: SortField) => {
    const isActive = sortField === field;
    const isAscending = isActive && sortOrder === "asc";

    return (
      <span onClick={() => handleSort(field)}>
        {isActive ? (
          isAscending ? (
            <UpOutlined style={{ color: "red" }} />
          ) : (
            <DownOutlined style={{ color: "red" }} />
          )
        ) : (
          <DownOutlined />
        )}
      </span>
    );
  };

  return (
    <div className="expenses-header">
      <div className="expenses-header-participant">
        Participant
        {renderSortIcon("participant")}
      </div>
      <div className="expenses-header-expense">
        Expense
        {renderSortIcon("expense")}
      </div>
      <div className="expenses-header-price">
        Price
        {renderSortIcon("price")}
      </div>
      <div className="expenses-header-date-time">
        Date & Time
        {renderSortIcon("date")}
      </div>
      <div className="expenses-header-icon"></div>
    </div>
  );
};
