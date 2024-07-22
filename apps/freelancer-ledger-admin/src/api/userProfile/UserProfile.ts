import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type UserProfile = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  profileImage: JsonValue;
  earnings: number | null;
  bio: string | null;
  skills?: Array<"Option1">;
  totalProjects: number | null;
  user?: User | null;
};
