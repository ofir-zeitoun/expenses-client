import { IExpenses } from "../interfaces/IExpenses";

const fetchExpenses = (): Promise<IExpenses[]> =>
  fetch(`${import.meta.env.VITE_BASE_URL}/api/expanses`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => data as IExpenses[]);

    export default fetchExpenses;