import { useQuery } from "@tanstack/react-query";
import fetchExpenses from "../../api/expensesApi";

const Expenses = () => {
  const { data: expenses } = useQuery({
    queryKey: ["expenses"],
    queryFn: fetchExpenses,
  });

  return (
    <div>
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
