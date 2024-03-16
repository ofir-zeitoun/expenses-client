import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { ExpenseList } from "../../@types/expense-list";
import { apiFetch } from "../../api";

async function fetchExpenseLists(
  offset: number,
  limit: number,
  sortOrder: "asc" | "desc"
): Promise<ExpenseList[]> {
  const token = "YOUR_TOKEN_HERE";
  const init = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return apiFetch(
    `/api/expense-list?offset=${offset}&limit=${limit}&sortOrder=${sortOrder}`,
    init
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => data as ExpenseList[]);
}

export const useExpenseLists = (
  offset: number,
  limit: number,
  sortOrder: "asc" | "desc"
): UseQueryResult<ExpenseList[], Error> => {
  return useQuery<ExpenseList[], Error>({
    queryKey: ["expenseLists", offset, limit, sortOrder],
    queryFn: () => fetchExpenseLists(offset, limit, sortOrder),
  });
};
