import { useState } from "react";
import "./info-section.css";

export const InfoSection = () => {
  const [usersCount] = useState<number>(150);
  const [listsCount] = useState<number>(25);
  const [expensesCount] = useState<number>(75);
  const [totalExpensesAmount] = useState<number>(12000);

  return (
    <div className="info-section">
      <h3>Statistics</h3>
      <div className="info-item">Number of Users: {usersCount}</div>
      <div className="info-item">Number of Lists: {listsCount}</div>
      <div className="info-item">Number of Expenses: {expensesCount}</div>
      <div className="info-item">
        Total Expenses Amount: {totalExpensesAmount} Currency
      </div>
    </div>
  );
};

export default InfoSection;
