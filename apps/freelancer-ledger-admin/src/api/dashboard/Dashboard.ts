export type Dashboard = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  receivedPayments: number | null;
  totalProjects: number | null;
  totalEarnings: number | null;
  pendingPayments: number | null;
};
