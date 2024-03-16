import { ExpenseListSection } from "../expense-list-section";
import { InfoSection } from "../info-section";
import "./dashboard.css";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-left">
        <InfoSection />
      </div>
      <div className="dashboard-right">
        <ExpenseListSection />
      </div>
    </div>
  );
};
