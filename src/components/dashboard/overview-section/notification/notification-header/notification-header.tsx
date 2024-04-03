import { BellOutlined } from "@ant-design/icons";
import "./notification-header.css";

export const NotificationHeader = () => {
  return (
    <header className="notifications-header">
      <BellOutlined className="notifications-icon" />
      <h2 className="notifications-title">Notifications</h2>
    </header>
  );
};
