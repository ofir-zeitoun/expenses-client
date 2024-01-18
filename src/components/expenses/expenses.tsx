import { useQuery } from "@tanstack/react-query";
import fetchExpenses from "./fetch-expenses";
import { ExpenseItem } from "./expense-item";
import "./expenses.css";

const Expenses = () => {
  const { data: expenses } = useQuery({
    queryKey: ["expenses"],
    queryFn: fetchExpenses,
  });

  return (
    <div>
      {expenses?.map((item) => (
        <ExpenseItem key={item._id} item={item} />
      ))}
    </div>
  );
};

export default Expenses;
