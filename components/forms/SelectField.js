import Label from "./Label";
import Select from "./Select";

export default ({ input, meta, label, ...rest }) => (
  <div className="my-4">
    <Label className="mb-2">{label}</Label>
    <Select {...input} {...rest} />
    {meta.touched &&
      meta.error && <FieldError className="mt-2">{meta.error}</FieldError>}
  </div>
);
