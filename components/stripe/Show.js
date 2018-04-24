import { FormSpy } from "react-final-form";
import has from "lodash/has";

export default ({ when, children }) => (
  <FormSpy subscription={{ values: true }}>
    {({ values }) => (has(values, when) ? children : null)}
  </FormSpy>
);
