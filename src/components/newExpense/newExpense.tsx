import React, { useState } from 'react';
import './NewExpense.css';
import postExpenses from './fetch-newExpense';
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
      name: expense,
      amount: parseFloat(amount),
      cause: '',
      date: new Date().toISOString()
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
          <input
            type="text"
            placeholder="Title"
            className="expenses-input"
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
          />
          <div className='header-slider'>
            <input
              type="number"
              placeholder="0"
              className="total-input"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className='right-option'>
              <button className="btn-add" onClick={handleAddClick}>
                Done
              </button>
            </div>
          </div>
          <button className='btn-close' onClick={onClose}>X</button>
        </div>
      </div>
    </div>
  );
};

export default NewExpense;