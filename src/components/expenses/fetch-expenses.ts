import { Expense } from "../../@types/expense";
import { apiFetch } from "../../api";

const fetchExpenses = (): Promise<Expense[]> =>
  apiFetch("/api/expanses")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => data as Expense[]);

export default fetchExpenses;
