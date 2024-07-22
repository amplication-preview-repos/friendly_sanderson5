import { Dashboard as TDashboard } from "../api/dashboard/Dashboard";

export const DASHBOARD_TITLE_FIELD = "id";

export const DashboardTitle = (record: TDashboard): string => {
  return record.id?.toString() || String(record.id);
};
