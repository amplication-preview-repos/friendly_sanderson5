import { SortOrder } from "../../util/SortOrder";

export type UserProfileOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  profileImage?: SortOrder;
  earnings?: SortOrder;
  bio?: SortOrder;
  skills?: SortOrder;
  totalProjects?: SortOrder;
  userId?: SortOrder;
};
