import { JsonValue } from "type-fest";
import { UserProfile } from "../userProfile/UserProfile";
import { Project } from "../project/Project";
import { Notification } from "../notification/Notification";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  userProfiles?: Array<UserProfile>;
  projects?: Array<Project>;
  notifications?: Array<Notification>;
};
