import { Project } from "../project/Project";

export type FinancialRecord = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  status?: "Option1" | null;
  receivedAt: Date | null;
  dueAt: Date | null;
  project?: Project | null;
};
