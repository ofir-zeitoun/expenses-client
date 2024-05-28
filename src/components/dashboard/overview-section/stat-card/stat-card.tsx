import { UserOutlined } from "@ant-design/icons";
import { StatCardProps } from "../../../../@types/stats";
import "./stat-card.css";

export const StatCard = ({
  icon = <UserOutlined />,
  value,
  label,
  iconBackgroundColor = "var(--icon-background-primary)",
  iconColor = "var(--icon-primary)",
}: StatCardProps) => {
  return (
    <div className="stat-card">
      <div
        className="stat-icon-wrapper"
        style={{ backgroundColor: iconBackgroundColor }}
      >
        <div className="stat-icon" style={{ color: iconColor }}>
          {icon}
        </div>
      </div>
      <div className="stat-content">
        <div className="stat-value">{value}</div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  );
};
