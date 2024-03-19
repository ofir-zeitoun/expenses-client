import { ExpenseListSection } from "../expense-list-section";
import { OverviewSection } from "../overview-section";
import "./dashboard.css";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-left">
        <OverviewSection />
      </div>
      <div className="dashboard-right">
        <ExpenseListSection />
      </div>
    </div>
  );
};
