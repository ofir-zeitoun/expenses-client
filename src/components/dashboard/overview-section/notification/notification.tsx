import React from "react";
import "./notification.css";
import { NotificationItem } from "./notification-expense";

const mockNotifications = [
  {
    type: "expense",
    avatarSrc: "avatar1.jpg",
    description: "Added a new coffee expense",
    amount: 5,
    listName: "Office Expenses",
  },
  {
    type: "invitation",
    avatarSrc: "avatar2.jpg",
    description: "Invited you to join",
    listName: "Project X",
    inviteeAvatars: ["invitee1.jpg", "invitee2.jpg"],
  },
];

export const Notification = () => (
  <div className="notifications-container">
    <header className="notifications-header">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ac0a0be7517c579248cdc79bc7da6e24d295c81d58f0b05e9f5a252d7127781?apiKey=9e09a71e3ebf486197b3397eee256a32&"
        alt="Notifications icon"
        className="notifications-icon"
      />
      <h2 className="notifications-title">Notifications</h2>
    </header>
    {mockNotifications.map((notification) => (
      <NotificationItem {...notification} />
    ))}
  </div>
);
