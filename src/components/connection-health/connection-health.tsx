import { useHealthCheck } from "./health-check";
import "./connection-health.css";
import { useTranslation } from "react-i18next";

export const ConnectionHealth = () => {
  const { isSuccess } = useHealthCheck();
  const {t} = useTranslation();

  return (
    <div className="connection-wrapper">
      <div
        className={`connection ${isSuccess ? "connected" : "disconnected"}`}
      />
      <span>{isSuccess ? t('server-connected') : t('server-disconnected')}</span>
    </div>
  );
};
