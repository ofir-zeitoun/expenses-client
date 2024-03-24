import "./notification-header.css";

export const NotificationHeader = () => {
  return (
    <header className="notifications-header">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ac0a0be7517c579248cdc79bc7da6e24d295c81d58f0b05e9f5a252d7127781?apiKey=9e09a71e3ebf486197b3397eee256a32&"
        alt="Notifications icon"
        className="notifications-icon"
      />
      <h2 className="notifications-title">Notifications</h2>
    </header>
  );
};
