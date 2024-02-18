import React, { useState } from 'react';
import { useQueryClient } from "@tanstack/react-query";
import { formatDateAndTime } from '../utilities/date-format';
import ExpenseAlertPopup from './expense-alert-popup';
import { Expense } from '../../@types/expense';
import removeExpense from './fetch-remove-expense';

interface ExpenseItemProps {
  item: Expense;
}

export const ExpenseItem: React.FC<ExpenseItemProps> = ({ item }) => {
  const [showAlert, setShowAlert] = useState(false);
  const queryClient = useQueryClient();

  const handleConfirmDelete = () => {
    removeExpense(item._id)
      .then(() => {
        setShowAlert(false);
        queryClient.invalidateQueries({queryKey:["expenses"]});
      })
      .catch((error) => {
        console.error('Error deleting expense:', error);
      });
  };

  return (
    <div className="expense-item">
      <img className="expense-item-image" src="" alt={item.name} />
      <div>
        <h3 className="expense-item-cause">{item.cause}</h3>
        <h3 className="expense-item-date">{formatDateAndTime(item.date)}</h3>
      </div>
      <div className="expense-item-amount">
        <span>{item.amount}</span>
      </div>
      <button className="expense-item-delete-button" onClick={() => setShowAlert(true)}>Delete</button>
      {showAlert && (
        <ExpenseAlertPopup
          message={`Are you sure you want to delete the expense "${item.cause}"?`}
          onCancel={() => setShowAlert(false)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
};
