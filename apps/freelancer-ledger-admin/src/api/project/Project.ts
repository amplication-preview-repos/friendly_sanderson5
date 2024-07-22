import { User } from "../user/User";
import { FinancialRecord } from "../financialRecord/FinancialRecord";
import { Notification } from "../notification/Notification";

export type Project = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  title: string | null;
  budget: number | null;
  paymentDetails: string | null;
  description: string | null;
  user?: User | null;
  financialRecords?: Array<FinancialRecord>;
  notifications?: Array<Notification>;
};
