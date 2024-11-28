import styles from "../../globalStyles.module.css";
import LoginForm from "../organisms/LoginForm";

const LoginTemplate = ({ data, validationSchema, handleSubmit }) => (
  <div className="container mt-5 d-flex flex-column align-items-center">
    <h1 className={styles.title}>{data.title}</h1>
    <p className={styles.subtitle}>{data.subtitle}</p>
    <LoginForm
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      data={data}
    />
  </div>
);

export default LoginTemplate;