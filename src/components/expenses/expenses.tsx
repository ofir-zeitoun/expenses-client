import { useQuery } from "@tanstack/react-query";

export interface IExpenses {
  _id: string;
  name: string;
  amount: number;
  cause: string;
  date: string;
}

const fetchExpenses = (): Promise<IExpenses[]> =>
  fetch(`${import.meta.env.VITE_BASE_URL}/api/expanses`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => data as IExpenses[]);

const Expenses = () => {
  const { data: expenses } = useQuery({
    queryKey: ["expenses"],
    queryFn: fetchExpenses,
  });

  return (
    <div>
      expenses
      {expenses?.map((item) => (
        <div key={item._id}>
          <h3>{item.name}</h3>
          <h3>{item.amount}</h3>
          <h3>{item.cause}</h3>
          <h3>{item.date}</h3>
        </div>
      ))}
    </div>
  );
};

export default Expenses;
