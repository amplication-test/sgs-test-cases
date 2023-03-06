import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const OfekShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
      </SimpleShowLayout>
    </Show>
  );
};
