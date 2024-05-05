// componnets
import AuthForm from "@/components/auth/AuthForm";

const Login = () => {
  return <AuthForm type="login" />;
};

export default Login;

export const metadata = {
  title: `${process.env.HEAD_BASE_TITLE} | Login`,
};
