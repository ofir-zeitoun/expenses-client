import {
  UserOutlined,
  UnorderedListOutlined,
  DollarCircleOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import { NotificationHeader } from "./notification/notification-header";
import { useStats } from "./useStats";
import { StatCard } from "./stat-card";
import { Notification } from "./notification";
import "./overview-section.css";
import { DataLoader } from "../../shared";

export const OverviewSection = () => {
  const { data: stats, isLoading, error } = useStats();

  return (
    <DataLoader isLoading={isLoading} error={error}>
      <DataLoader.Loading> </DataLoader.Loading>
      <DataLoader.Error> </DataLoader.Error>
      <div className="overview-section">
        <div className="stats-cards">
          <StatCard
            icon={<CreditCardOutlined />}
            value={`${stats?.totalExpenses ?? "N/A"}`}
            label="Total Expenses"
          />

          <StatCard
            icon={<UnorderedListOutlined />}
            value={`${stats?.totalLists ?? "N/A"}`}
            label="Lists"
          />
          <StatCard
            icon={<UserOutlined />}
            value={`${stats?.totalUsers ?? "N/A"}`}
            label="Users"
          />
          <StatCard
            icon={<DollarCircleOutlined />}
            value={`$${stats?.totalPrice?.toFixed(2) ?? "N/A"}`}
            label="Total Price"
          />
        </div>
        <div className="notification-card">
          <NotificationHeader />
          <Notification />
        </div>
      </div>
    </DataLoader>
  );
};

export default OverviewSection;
