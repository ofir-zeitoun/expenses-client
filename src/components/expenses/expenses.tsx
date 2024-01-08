import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface IExpenses {
  name: string;
  amount: number;
  cause: string;
  date: string;
}

const Expenses = () => {

 const fetchExpenses  = (): Promise<IExpenses[]>  => axios.get("/api/expanses").then((response) => response.data)
 
 const {data: expenses } = useQuery({
   queryKey: ["expenses"] ,
   queryFn: fetchExpenses ,
  });
  
  return (
    <div>
      expenses
      {expenses?.map((item, i) => (
        <div key={i}>
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
