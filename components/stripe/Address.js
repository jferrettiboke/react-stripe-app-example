import { Field } from "react-final-form";

import { Section, InputField, SelectField } from "../forms";

export default ({ name }) => (
  <Section title="Address">
    <Field name={`${name}.country`} label="Country" component={SelectField}>
      <option />
      <option value="IE">Ireland</option>
      <option value="GB">United Kingdom</option>
      <option value="US">United States</option>
    </Field>

    <Field
      name={`${name}.line1`}
      label="Address line 1"
      component={InputField}
      placeholder="185 Berry St."
    />
    <Field
      name={`${name}.line2`}
      label="Address line 2"
      component={InputField}
      placeholder="Suite 550"
    />
    <Field
      name={`${name}.city`}
      label="City"
      component={InputField}
      placeholder="San Francisco"
    />
    <Field
      name={`${name}.state`}
      label="State"
      component={InputField}
      placeholder="California"
    />
    <Field
      name={`${name}.postal_code`}
      label="Postal code"
      component={InputField}
      placeholder="94107"
    />
  </Section>
);
