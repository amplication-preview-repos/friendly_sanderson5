import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { FinancialRecordUpdateManyWithoutProjectsInput } from "./FinancialRecordUpdateManyWithoutProjectsInput";
import { NotificationUpdateManyWithoutProjectsInput } from "./NotificationUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  status?: "Option1" | null;
  title?: string | null;
  budget?: number | null;
  paymentDetails?: string | null;
  description?: string | null;
  user?: UserWhereUniqueInput | null;
  financialRecords?: FinancialRecordUpdateManyWithoutProjectsInput;
  notifications?: NotificationUpdateManyWithoutProjectsInput;
};
