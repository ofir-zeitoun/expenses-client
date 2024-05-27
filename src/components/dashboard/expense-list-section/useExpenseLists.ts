import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { apiFetch } from "../../../api";
import { ExpenseLIstType } from "../../../@types/expense-list-prop";
import { SortOrder } from "../../../@types/sortOrderTypes";

interface ExpenseListsResponse {
  data: ExpenseLIstType[];
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

  const response = await apiFetch(
    `/api/expenses-list?offset=${offset}&limit=${limit}&sortOrder=${sortOrder}`,
    init
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return data as ExpenseListsResponse;
};

export const useExpenseLists = (
  offset: number,
  limit: number,
  sortOrder: SortOrder
): UseQueryResult<ExpenseListsResponse, Error> => {
  const [token, setToken] = useState<string | null>(null);
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
  }, [getAccessTokenSilently]);

  return useQuery<ExpenseListsResponse, Error>({
    queryKey: ["expenseLists", token, offset, limit, sortOrder],
    queryFn: () => fetchExpenseLists(token!, offset, limit, sortOrder),
    enabled: !!token,
  });
};
