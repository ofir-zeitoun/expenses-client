import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface IExpenses {
  _id: string;
  name: string;
  amount: number;
  cause: string;
  date: string;
}

const fetchExpenses  = (): Promise<IExpenses[]>  => axios.get("/api/expanses").then((response) => response.data);

const Expenses = () => {
 
 const {data: expenses } = useQuery({
   queryKey: ["expenses"] ,
   queryFn: fetchExpenses ,
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
