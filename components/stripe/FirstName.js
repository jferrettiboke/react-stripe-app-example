import { Field } from "react-final-form";

import { InputField } from "../forms";

export default ({ name }) => (
  <Field
    name={`${name}.first_name`}
    label="First name"
    component={InputField}
    placeholder="Jane"
  />
);
