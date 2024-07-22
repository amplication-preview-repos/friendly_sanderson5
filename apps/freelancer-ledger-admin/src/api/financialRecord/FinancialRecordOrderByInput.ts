import { SortOrder } from "../../util/SortOrder";

export type FinancialRecordOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  status?: SortOrder;
  receivedAt?: SortOrder;
  dueAt?: SortOrder;
  projectId?: SortOrder;
};
