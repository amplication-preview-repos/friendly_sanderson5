import { SortOrder } from "../../util/SortOrder";

export type DashboardOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  receivedPayments?: SortOrder;
  totalProjects?: SortOrder;
  totalEarnings?: SortOrder;
  pendingPayments?: SortOrder;
};
