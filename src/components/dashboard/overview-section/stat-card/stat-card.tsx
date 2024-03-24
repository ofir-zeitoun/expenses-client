import { UserOutlined } from "@ant-design/icons";
import { StatCardProps } from "../../../../@types/stats";
import "./stat-card.css";

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
