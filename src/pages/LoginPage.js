import * as Yup from "yup";
import { useRouter } from "next/router";
import LoginTemplate from "../components/templates/LoginTemplate";
import LoginPageData from "../data/LoginPageData";

const LoginPage = () => {
  const router = useRouter();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Debe ser un correo electrónico válido")
      .required("El correo es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch(
        "https://jellyfish-app-mpahs.ondigitalocean.app/api/auth/local",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            identifier: values.email,
            password: values.password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        router.push(LoginPageData.routes.home);
      } else {
        alert("Credenciales inválidas. Intente nuevamente.");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <LoginTemplate
      data={LoginPageData}
      validationSchema={validationSchema}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginPage;