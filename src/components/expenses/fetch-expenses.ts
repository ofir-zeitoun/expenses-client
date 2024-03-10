import { Expense } from "../../@types/expense";
import { apiFetch } from "../../api";

const fetchExpenses = async (token: string): Promise<Expense[]> => {
  const init = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
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
