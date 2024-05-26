import React, { useState, useEffect, useCallback } from "react";
import { SortOrder } from "../../../@types/sortOrderTypes";

import { ExpenseLIstType } from "../../../@types/expense-list-prop";
import { DataLoader } from "../../shared";
import ExpenseListToolbar from "./expense-list-toolbar/expense-list-toolbar";
import { ExpenseList } from "./expense-list/expense-list";
import { useExpenseLists } from "./useExpenseLists";
import "./expense-list-section.css";

export const ExpenseListSection = () => {
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [offset, setOffset] = useState(0);
  const [lists, setLists] = useState<ExpenseLIstType[]>([]);
  const {
    data: section,
    isLoading,
    error,
  } = useExpenseLists(offset, 5, sortOrder);

  const updateLists = useCallback(() => {
    if (section?.data) {
      if (offset === 0) {
        setLists(section.data);
      } else {
        setLists((prevLists) => [...prevLists, ...section.data]);
      }
    }
  }, [section, offset]);

  useEffect(() => {
    updateLists();
  }, [updateLists]);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setOffset(0);
    setLists([]);
  };

  const loadMore = () => {
    const totalLoaded = lists.length;
    const totalAvailable = section?.total || 0;

    if (totalLoaded < totalAvailable) {
      setOffset((prevOffset) => prevOffset + 5);
    }
  };

  return (
    <DataLoader
      isLoading={isLoading && lists.length === 0}
      error={error && lists.length === 0 ? error : null}
    >
      <div className="expense-list-section">
        <div className="expense-list-container">
          <ExpenseListToolbar toggleSortOrder={toggleSortOrder} />
          {lists.map((list) => (
            <ExpenseList key={list._id} list={list} />
          ))}
          {lists.length < (section?.total || 0) && (
            <button onClick={loadMore} className="load-more-button">
              Load More
            </button>
          )}
        </div>
      </div>
    </DataLoader>
  );
};

export default ExpenseListSection;
