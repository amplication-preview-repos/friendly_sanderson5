import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const DashboardShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="receivedPayments" source="receivedPayments" />
        <TextField label="totalProjects" source="totalProjects" />
        <TextField label="totalEarnings" source="totalEarnings" />
        <TextField label="pendingPayments" source="pendingPayments" />
      </SimpleShowLayout>
    </Show>
  );
};
