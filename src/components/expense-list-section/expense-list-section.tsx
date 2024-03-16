import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useExpenseLists } from "./useExpenseLists";
import ExpenseList from "../expense-list/expense-list";
import { Button } from "antd";
import { SortAscendingOutlined, SortDescendingOutlined } from "@ant-design/icons";

export const ExpenseListSection = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

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

  const { data: expenseLists, isLoading, error } = useExpenseLists(token, 0, 5, sortOrder, );

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Button
        icon={sortOrder === "asc" ? <SortAscendingOutlined /> : <SortDescendingOutlined />}
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