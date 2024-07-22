import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { FinancialRecordListRelationFilter } from "../financialRecord/FinancialRecordListRelationFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";

export type ProjectWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  title?: StringNullableFilter;
  budget?: FloatNullableFilter;
  paymentDetails?: StringNullableFilter;
  description?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  financialRecords?: FinancialRecordListRelationFilter;
  notifications?: NotificationListRelationFilter;
};
