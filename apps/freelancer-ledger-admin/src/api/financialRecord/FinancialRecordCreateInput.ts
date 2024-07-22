import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type FinancialRecordCreateInput = {
  amount?: number | null;
  status?: "Option1" | null;
  receivedAt?: Date | null;
  dueAt?: Date | null;
  project?: ProjectWhereUniqueInput | null;
};
