import { useAuth0 } from "@auth0/auth0-react";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { Expense } from "../../../@types/expense";
import { apiFetch } from "../../../api";
import { useEffect, useState } from "react";
import { SortOrder } from "../../../@types/sortOrderTypes";

async function fetchExpense(
  token: string,
  offset: number,
  limit: number,
  sortOrder: SortOrder
): Promise<Expense[]> {
  const init = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return apiFetch(
    `/api/expenses?offset=${offset}&limit=${limit}&sortOrder=${sortOrder}`,
    init
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => data as Expense[]);
}

export const useExpense = (
  offset: number,
  limit: number,
  sortOrder: SortOrder
): UseQueryResult<Expense[], Error> => {
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

  return useQuery<Expense[], Error>({
    enabled: !!token,
    queryKey: ["expenseLists", token, offset, limit, sortOrder],
    queryFn: () => fetchExpense(token, offset, limit, sortOrder),
  });
};
