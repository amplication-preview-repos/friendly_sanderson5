import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const DashboardCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="receivedPayments"
          source="receivedPayments"
        />
        <NumberInput step={1} label="totalProjects" source="totalProjects" />
        <NumberInput label="totalEarnings" source="totalEarnings" />
        <NumberInput
          step={1}
          label="pendingPayments"
          source="pendingPayments"
        />
      </SimpleForm>
    </Create>
  );
};
