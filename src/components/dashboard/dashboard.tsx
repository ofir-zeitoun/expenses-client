import { OverviewSection } from "./overview-section";
import "./dashboard.css";
import { ExpenseListSection } from "./expense-list-section";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <OverviewSection />
      <ExpenseListSection />
    </div>
  );
};
