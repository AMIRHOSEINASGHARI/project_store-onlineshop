import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";

const AuthForm = ({ type }) => {
  return (
    <>
      {type === "register" && <RegisterPage />}
      {type === "login" && <LoginPage />}
    </>
  );
};

export default AuthForm;
