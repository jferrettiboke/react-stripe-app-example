import { Field } from "react-final-form";

import { InputField } from "../forms";

export default ({ name }) => (
  <Field
    name={`${name}.last_name`}
    label="Last name"
    component={InputField}
    placeholder="Kim"
  />
);
