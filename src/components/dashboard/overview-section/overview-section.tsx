import React from "react";
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
import { Notification } from "./notification";

export const OverviewSection = () => {
  // Assuming useStats is a hook fetching the stats
  const { data: stats, isLoading, error } = useStats();
  // console.log(stats);
  console.log(stats);
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
          icon={<UserOutlined />}
          value={`${stats?.totalUsers ?? "N/A"}`}
          label="Total Users"
        />
        <StatCard
          icon={<UnorderedListOutlined />}
          value={`${stats?.totalLists ?? "N/A"}`}
          label="Total Lists"
        />
        <StatCard
          icon={<DollarCircleOutlined />}
          value={`$${stats?.totalAmount?.toFixed(2) ?? "N/A"}`}
          label="Total Price"
        />
        <StatCard
          icon={<CreditCardOutlined />}
          value={`${stats?.totalExpenses ?? "N/A"}`}
          label="Total Individual Expenses"
        />
      </div>
      <div className="notification">
        <Notification />
      </div>
    </div>
  );
};

export default OverviewSection;
