import { apiFetch } from "../../api";

const removeExpense = (id: string): Promise<void> =>
  apiFetch(`/api/expanses/${id}`, {
    method: 'DELETE',
    baseUrl: import.meta.env.VITE_BASE_URL 
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    });

export default removeExpense;