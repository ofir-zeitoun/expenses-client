import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { ListProps } from "../../@types/expense-list-prop";
import { apiFetch } from "../../api";

async function fetchExpense(
  token: string,
  offset: number,
  limit: number,
  sortOrder: "asc" | "desc"
): Promise<ListProps[]> {
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
    .then((data) => data as ListProps[]);
}

export const useExpenses = (
  token: string,
  offset: number,
  limit: number,
  sortOrder: "asc" | "desc"
): UseQueryResult<ListProps[], Error> => {
  return useQuery<ListProps[], Error>({
    queryKey: ["expenseLists", token, offset, limit, sortOrder],
    queryFn: () => fetchExpense(token, offset, limit, sortOrder),
  });
};
