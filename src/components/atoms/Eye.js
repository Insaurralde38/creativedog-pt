import styles from "../../globalStyles.module.css";

const Eye = ({ type, className = "", disabled, onClick, children }) => (
  <button
    type={type}
    className={`${styles["eye"]} ${className}`}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Eye;