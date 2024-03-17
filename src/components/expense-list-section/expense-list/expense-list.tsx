import React, { useState, useEffect } from "react";
import { Button } from "antd";
import {
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { useExpenses } from "./useExpenses";
import { ExpenseItem } from "./expense-item";
import { ListProps } from "../../@types/expense-list-prop";

export const ExpenseList: React.FC<{ list: ListProps }> = ({ list }) => {
  const { getAccessTokenSilently } = useAuth0();
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [token, setToken] = useState("");

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        setToken(accessToken);
      } catch (error) {
        console.error("Error fetching the access token", error);
      }
    };
    fetchToken();
  }, [getAccessTokenSilently]);

  const {
    data: expenses,
    isLoading,
    error,
  } = useExpenses(token, (currentPage - 1) * 10, 10, sortOrder);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h2>{list.name}</h2>
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
      {expenses?.map((item, index) => (
        <ExpenseItem key={item._id} item={item.expenses[index]} />
      ))}
      <div>
        <Button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button onClick={() => setCurrentPage((p) => p + 1)}>Next</Button>
      </div>
    </div>
  );
};
