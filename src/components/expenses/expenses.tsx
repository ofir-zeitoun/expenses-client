import { useQuery } from "@tanstack/react-query";
import fetchExpenses from "./fetch-expenses";
import "./expenses.css";

const Expenses = () => {
  const { data: expenses } = useQuery({
    queryKey: ["expenses"],
    queryFn: fetchExpenses,
  });

  return (
    <div>
      {expenses?.map((item) => (
        <div key={item._id} className="expense-item">
          <h3 className="expense-item-name">{item.name}</h3>
          <img
            className="expense-item-image"
            src=""
            alt={item.name}
          />

          <div>
            <h3 className="expense-item-cause">{item.cause}</h3>
            <h3 className="expense-item-date">{item.date}</h3>
          </div>
          <div className="expense-item-amount">
            <span>{item.amount}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Expenses;
