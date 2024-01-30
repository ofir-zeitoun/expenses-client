import React, { useState } from 'react';
import './new-expense.css';
import postExpenses from './fetch-new-expense';
// import { formatDateAndTime } from "../utilities/date-format";
interface NewExpenseProps {
  onClose: () => void;
  refreshExpenses: () => void;
}

export const NewExpense: React.FC<NewExpenseProps> = ({ onClose, refreshExpenses }) => {
  const [expense, setExpense] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddClick = () => {
    const expenseData = {
      _id: "",
      name: 'unknown',
      amount: parseFloat(amount),
      cause: expense,
      date:  new Date().toISOString()
    };

    postExpenses(expenseData)
    .then(response => {
      console.log('Expense added:', response);
      refreshExpenses();
      onClose();
    })
    .catch(error => {
      console.error('Error adding expense:', error);
    });
};

return (
  <div className="newExpanse">
    <div className="overlay">
      <div className="popup">
      <div className='title'>New Expense</div>
        <div className='form-group'>
          <input
            id="expense-title"
            type="text"
            placeholder=" "
            className={`expenses-input ${expense && 'filled'}`}
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
          />
          <label htmlFor="expense-title" className="expense-label">Title</label>
        </div>
        <div className='form-group'>
          <input
            id="expense-amount"
            type="number"
            placeholder=" "
            className={`total-input ${amount && 'filled'}`}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <label htmlFor="expense-amount" className="expense-label">Amount</label>
        </div>
        <div className='right-option'>
          <button className="btn-add" onClick={handleAddClick}>Done</button>
        </div>
        <button className='btn-close' onClick={onClose}>X</button>
      </div>
    </div>
  </div>
);
};

export default NewExpense;