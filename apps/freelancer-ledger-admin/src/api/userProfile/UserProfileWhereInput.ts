import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserProfileWhereInput = {
  id?: StringFilter;
  profileImage?: JsonFilter;
  earnings?: FloatNullableFilter;
  bio?: StringNullableFilter;
  totalProjects?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
