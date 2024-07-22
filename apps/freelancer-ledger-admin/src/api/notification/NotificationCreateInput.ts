import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type NotificationCreateInput = {
  message?: string | null;
  dueAt?: Date | null;
  typeField?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
  project?: ProjectWhereUniqueInput | null;
};
