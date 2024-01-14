import { useHealthCheck } from "./health-check";
import "./connection-health.css";

export const ConnectionHealth = () => {
  const { isSuccess } = useHealthCheck();
  return (
    <div>
      <div
        className={`connection ${isSuccess ? "connected" : "disconnected"}`}
      />
      <span>{isSuccess ? "Connected" : "Disconnected!"}</span>
    </div>
  );
};
