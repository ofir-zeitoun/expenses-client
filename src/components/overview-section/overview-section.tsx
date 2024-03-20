import { useState } from "react";
import "./overview-section.css";

export const OverviewSection = () => {
  const [usersCount] = useState<number>(150);
  const [listsCount] = useState<number>(25);
  const [expensesCount] = useState<number>(75);
  const [totalExpensesAmount] = useState<number>(12000);

  return (
    <div className="overview-section">
      <h3>Statistics</h3>
      <div className="overview-item">Number of Users: {usersCount}</div>
      <div className="overview-item">Number of Lists: {listsCount}</div>
      <div className="overview-item">Number of Expenses: {expensesCount}</div>
      <div className="overview-item">
        Total Expenses Amount: {totalExpensesAmount} Currency
      </div>
    </div>
  );
};

export default OverviewSection;
