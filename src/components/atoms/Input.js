import styles from "../../globalStyles.module.css";

const Input = ({ type, name, id, placeholder, className = "", ...props }) => (
  <input
    type={type}
    name={name}
    id={id}
    placeholder={placeholder}
    className={`${styles.input} ${className}`}
    {...props}
  />
);

export default Input;