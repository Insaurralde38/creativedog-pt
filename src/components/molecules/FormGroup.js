import Label from "../atoms/Label";
import Input from "../atoms/Input";
import ErrorText from "../atoms/ErrorText";

const FormGroup = ({ label, type, name, id, placeholder, error }) => (
  <div className="mb-3">
    <Label htmlFor={id} className="form-label">
      {label}
    </Label>
    <Input type={type} name={name} id={id} placeholder={placeholder} className="form-control" />
    {error && <ErrorText className="text-danger">{error}</ErrorText>}
  </div>
);

export default FormGroup;