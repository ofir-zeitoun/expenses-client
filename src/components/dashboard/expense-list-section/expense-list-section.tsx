import { useState, useEffect, useCallback } from "react";
import { message } from "antd";
import { SortOrder } from "../../../@types/sortOrderTypes";
import { ExpenseListType } from "../../../@types/expense-list-prop";
import { DataLoader } from "../../shared";
import ExpenseListToolbar from "./expense-list-toolbar/expense-list-toolbar";
import { ExpenseList } from "./expense-list/expense-list";
import {
  useExpenseLists,
  useDeleteExpenseList,
  useAddExpenseList,
} from "./useExpenseLists";
import "./expense-list-section.css";

export const ExpenseListSection = () => {
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [offset, setOffset] = useState(0);
  const [lists, setLists] = useState<ExpenseListType[]>([]);
  const {
    data: section,
    isLoading,
    error,
  } = useExpenseLists(offset, 5, sortOrder);
  const { mutate: deleteList } = useDeleteExpenseList();
  const { mutate: addExpenseList } = useAddExpenseList();

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

  const handleDelete = (listId: string) => {
    deleteList(listId, {
      onSuccess: () => {
        setLists((prevLists) =>
          prevLists.filter((list) => list._id !== listId)
        );
        message.success("List deleted successfully");
      },
      onError: (error) => {
        message.error(`Failed to delete list: ${error.message}`);
      },
    });
  };

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

  const handleAddList = (name: string) => {
    addExpenseList(
      { name },
      {
        onSuccess: () => {
          message.success("List added successfully");
          setOffset(0);
          setLists([]);
        },
        onError: (error) => {
          message.error(`Failed to add list: ${error.message}`);
        },
      }
    );
  };

  return (
    <DataLoader
      isLoading={isLoading && lists.length === 0}
      error={error && lists.length === 0 ? error : null}
    >
      <div className="expense-list-section">
        <div className="expense-list-container">
          <ExpenseListToolbar
            toggleSortOrder={toggleSortOrder}
            onAddList={handleAddList}
          />
          {lists.map((list) => (
            <ExpenseList key={list._id} list={list} onDelete={handleDelete} />
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
