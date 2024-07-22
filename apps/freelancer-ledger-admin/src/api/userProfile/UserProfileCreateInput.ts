import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserProfileCreateInput = {
  profileImage?: InputJsonValue;
  earnings?: number | null;
  bio?: string | null;
  skills?: Array<"Option1">;
  totalProjects?: number | null;
  user?: UserWhereUniqueInput | null;
};
