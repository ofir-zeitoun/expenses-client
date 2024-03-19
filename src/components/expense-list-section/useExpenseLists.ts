import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { apiFetch } from "../../api";
import { ExpenseLIstType } from "../../@types/expense-list-prop";
import { SortOrder } from "../../@types/sortOrderTypes";

interface ExpenseListsResponse {
  data: ExpenseLIstType[];
  isLoading: boolean;
  error: Error | null;
  limit: number;
  offset: number;
  sortOrder: SortOrder;
  total: number;
}

const fetchExpenseLists = async (
  token: string,
  offset: number,
  limit: number,
  sortOrder: SortOrder
): Promise<ExpenseListsResponse> => {
  const init = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return apiFetch(
    `/mock/expense-lists?offset=${offset}&limit=${limit}&sortOrder=${sortOrder}`,
    init
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => data as ExpenseListsResponse);
};

export const useExpenseLists = (
  offset: number,
  limit: number,
  sortOrder: SortOrder
): UseQueryResult<ExpenseListsResponse, Error> => {
  const [token, setToken] = useState("");
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    (async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        setToken(accessToken);
      } catch (error) {
        console.error("Error fetching the access token", error);
      }
    })();
  }, [getAccessTokenSilently, setToken]);

  return useQuery<ExpenseListsResponse, Error>({
    enabled: !!token,
    queryKey: ["expenseLists", token, offset, limit, sortOrder],
    queryFn: () => fetchExpenseLists(token, offset, limit, sortOrder),
  });
};
