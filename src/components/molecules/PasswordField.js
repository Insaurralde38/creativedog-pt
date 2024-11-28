import { useState } from "react";
import Image from "next/image";
import Input from "../atoms/Input";
import Eye from "../atoms/Eye";
import Label from "../atoms/Label";
import ErrorText from "../atoms/ErrorText";

const PasswordField = ({ label, name, id, placeholder, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-3">
      <Label htmlFor={id} className="form-label">
        {label}
      </Label>
      <div className="input-group">
        <Input
          type={showPassword ? "text" : "password"}
          name={name}
          id={id}
          placeholder={placeholder}
          className="form-control"
        />
        <Eye
          type="button"
          onClick={() => setShowPassword(!showPassword)}
        >
          <Image
            src={showPassword ? "/assets/images/eye.svg" : "/assets/images/eye-slash.svg"}
            alt={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
            width={24}
            height={24}
          />
        </Eye>
      </div>
      {error && <ErrorText className="text-danger">{error}</ErrorText>}
    </div>
  );
};

export default PasswordField;