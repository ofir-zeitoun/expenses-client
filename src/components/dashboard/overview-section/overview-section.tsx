import { Alert, Spin } from "antd";
import {
  UserOutlined,
  UnorderedListOutlined,
  DollarCircleOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import { useStats } from "./useStats";
import { StatCard } from "./stat-card";
import "./overview-section.css";
import { NotificationHeader } from "./notification/notification-header";
import { Notification } from "./notification";

export const OverviewSection = () => {
  const { data: stats, isLoading, error } = useStats();

  if (isLoading) {
    return <Spin size="large" />;
  }

  if (error) {
    console.log(error);
    return <Alert message={`Error: ${error?.message}`} type="error" />;
  }

  return (
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
          value={`$${stats?.totalAmount?.toFixed(2) ?? "N/A"}`}
          label="Total Price"
        />
      </div>
      <div className="notification-card">
        <NotificationHeader />
        <Notification />
      </div>
    </div>
  );
};

export default OverviewSection;
