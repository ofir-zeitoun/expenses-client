// fetch-expenses.tsx
import { Expense } from "../../@types/expense";
import { apiFetch, RequestInitWithBaseUrl } from "../../api";

const fetchExpenses = async (token: string): Promise<Expense[]> => {
  const init: RequestInitWithBaseUrl = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    baseUrl: import.meta.env.VITE_BASE_URL, 
  };

  return apiFetch("/api/expenses", init)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => data as Expense[]);
};

export default fetchExpenses;
