import { Formik, Form } from "formik";
import FormGroup from "../molecules/FormGroup";
import PasswordField from "../molecules/PasswordField";
import Button from "../atoms/Button";
import styles from "../../globalStyles.module.css";

const LoginForm = ({ initialValues, validationSchema, onSubmit, data }) => (
  <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
    {({ errors }) => (
      <Form>
        <div className={styles["input-box"]}>
        <FormGroup
          label={data.form.email.label}
          type="email"
          name="email"
          id="email"
          placeholder={data.form.email.placeholder}
          error={errors.email}
        />
        <PasswordField
          label={data.form.password.label}
          name="password"
          id="password"
          placeholder={data.form.password.placeholder}
          error={errors.password}
        />
        </div>
        <Button type="submit" disabled={false}>
          {data.buttons.login}
        </Button>
        <div className="d-flex justify-content-between mt-3">
          <a href='#' className={styles["link-button"]}>
            {data.buttons.signupPrompt}
          </a>
          <a href='#' className={styles["link-button"]}>
            {data.buttons.forgotPassword}
          </a>
        </div>
      </Form>
    )}
  </Formik>
);

export default LoginForm;