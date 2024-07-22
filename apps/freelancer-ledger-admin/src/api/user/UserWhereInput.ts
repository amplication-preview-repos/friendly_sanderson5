import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserProfileListRelationFilter } from "../userProfile/UserProfileListRelationFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  userProfiles?: UserProfileListRelationFilter;
  projects?: ProjectListRelationFilter;
  notifications?: NotificationListRelationFilter;
};
