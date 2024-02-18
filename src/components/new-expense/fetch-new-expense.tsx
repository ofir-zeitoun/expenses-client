import { Expense } from "../../@types/expense";
import { apiFetch } from "../../api";

const postExpenses = (expenseData: Expense): Promise<Expense> =>
  apiFetch("/api/expanses", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(expenseData),
    baseUrl: import.meta.env.VITE_BASE_URL 
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  });

export default postExpenses;