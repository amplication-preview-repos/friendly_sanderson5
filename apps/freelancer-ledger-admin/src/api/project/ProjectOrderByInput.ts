import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  budget?: SortOrder;
  paymentDetails?: SortOrder;
  description?: SortOrder;
  userId?: SortOrder;
};
