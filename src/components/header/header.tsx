// header.tsx

import React, { useState } from 'react';
import { useQuery, useQueryClient } from "@tanstack/react-query";
import fetchExpenses from "../expenses/fetch-expenses";
import NewExpense from '../new-expense';
import './Header.css';

export const Header = () => {
  const [showPopup, setShowPopup] = useState(false);
  const queryClient = useQueryClient();
  const { data: expenses } = useQuery({
    queryKey: ["expenses"],
    queryFn: fetchExpenses,
  });

  const totalExpenses = expenses?.reduce((sum, item) => sum + item.amount, 0);

  const refreshExpenses = () => {
    queryClient.invalidateQueries({ queryKey: ["expenses"] });
  };

  const handleAddClick = () => {
    setShowPopup(true);
  };

  return (
    <div className="header">
      <div className="expenses-title">Expenses</div>
      <div className='slider'>
        <div className='left-option'>
          <div className='total'>{totalExpenses}</div>
        </div>
        <div className='right-option'>
          <button className="btn-add" onClick={handleAddClick}>
            Add
          </button>
        </div>
      </div>

      {showPopup && <NewExpense onClose={() => setShowPopup(false)} refreshExpenses={refreshExpenses} />}
    </div>
  );
};

export default Header;
