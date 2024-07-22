import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const DashboardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
