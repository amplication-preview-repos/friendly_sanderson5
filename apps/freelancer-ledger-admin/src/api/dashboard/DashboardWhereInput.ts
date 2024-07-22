import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type DashboardWhereInput = {
  id?: StringFilter;
  receivedPayments?: IntNullableFilter;
  totalProjects?: IntNullableFilter;
  totalEarnings?: FloatNullableFilter;
  pendingPayments?: IntNullableFilter;
};
