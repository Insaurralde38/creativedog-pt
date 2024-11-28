const LoginPageData = {
  title: "Ingresar",
  subtitle: "Ingresá con tu email y contraseña",
  form: {
    email: {
      label: "Correo Electrónico",
      placeholder: "",
    },
    password: {
      label: "Contraseña",
      placeholder: "",
    },
  },
  buttons: {
    login: "Ingresar",
    signupPrompt: "¿No tenés cuenta? Ingresá acá",
    forgotPassword: "Olvidé mi contraseña",
  },
  routes: {
    home: "/HomePage",
    signup: "/SignupPage",
    forgotPassword: "/ForgotPassword",
  },
};

export default LoginPageData;