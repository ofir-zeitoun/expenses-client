import { OverviewSection } from "./overview-section";
import { ExpenseListSection } from "./expense-list-section";
import "./dashboard.css";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <OverviewSection />
      <ExpenseListSection />
    </div>
  );
};
