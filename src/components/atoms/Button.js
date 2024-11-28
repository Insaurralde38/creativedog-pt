import styles from "../../globalStyles.module.css";

const Button = ({ type, className = "", disabled, onClick, children }) => (
  <button
    type={type}
    className={`${styles["button-submit"]} ${className}`}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;