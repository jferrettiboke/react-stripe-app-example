import Label from "./Label";
import Input from "./Input";
import FieldError from "./FieldError";

export default ({ input, meta, label, ...rest }) => (
  <div className="my-4">
    <Label className="mb-2">{label}</Label>
    <Input {...input} {...rest} />
    {meta.touched &&
      meta.error && <FieldError className="mt-2">{meta.error}</FieldError>}
  </div>
);
