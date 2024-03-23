import React, { ReactNode } from "react";
import { UserOutlined } from "@ant-design/icons";
import "./stat-card.css";

interface StatCardProps {
  icon?: ReactNode; // Accept a ReactNode for icons
  imageSrc?: string; // Make imageSrc optional
  value: string;
  label: string;
}

export const StatCard = ({
  icon = <UserOutlined />,

  value,
  label,
}: StatCardProps) => {
  return (
    <div className="stat-card">
      <div className="stat-icon-wrapper">
        <div className="stat-icon">{icon}</div>
      </div>
      <div className="stat-content">
        <div className="stat-value">{value}</div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  );
};
