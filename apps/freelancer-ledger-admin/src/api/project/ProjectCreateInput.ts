import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { FinancialRecordCreateNestedManyWithoutProjectsInput } from "./FinancialRecordCreateNestedManyWithoutProjectsInput";
import { NotificationCreateNestedManyWithoutProjectsInput } from "./NotificationCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  status?: "Option1" | null;
  title?: string | null;
  budget?: number | null;
  paymentDetails?: string | null;
  description?: string | null;
  user?: UserWhereUniqueInput | null;
  financialRecords?: FinancialRecordCreateNestedManyWithoutProjectsInput;
  notifications?: NotificationCreateNestedManyWithoutProjectsInput;
};
