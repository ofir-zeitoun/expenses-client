import { useEffect, useState } from 'react';
import fetchExpenses from './api/api.js';
import mernLogo from "./assets/oz-mern.png";
import ozLogo from "/oz.png";
import "./App.css";

function App() {
  type Expense = {
    _id: string;
    name: string;
    amount: number;
    cause: string;
  };
  
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchExpenses();
        console.log(data);
        setExpenses(data);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <>
      <div>
        <img src={ozLogo} className="logo" alt="Ofir Zeitoun" />
        <img src={mernLogo} className="logo react" alt="MERN" />
        
        {/* for debug only, TODO: ExpensesList component */}
        {expenses.map((expense) => (
        <div key={expense._id}>
          <p>Name: {expense.name}</p>
          <p>Amount: {expense.amount}</p>
          <p>Cause: {expense.cause}</p>
          <hr />
        </div>
        ))}
      </div>
    </>
  );
}

export default App;
