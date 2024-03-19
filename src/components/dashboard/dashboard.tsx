import { ExpenseListSection } from "../expense-list-section";
import { OverviewSection } from "../overview-section";
import "./dashboard.css";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="overview-section">
        <OverviewSection />
      </div>
      <div className="expense-list-section">
        <ExpenseListSection />
      </div>
    </div>
  );
};
