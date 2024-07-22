import { User } from "../user/User";
import { Project } from "../project/Project";

export type Notification = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  message: string | null;
  dueAt: Date | null;
  typeField?: "Option1" | null;
  user?: User | null;
  project?: Project | null;
};
