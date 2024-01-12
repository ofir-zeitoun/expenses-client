import { apiFetch } from "../../api";

export const fetchHealthCheck = () => apiFetch("/health-check");
