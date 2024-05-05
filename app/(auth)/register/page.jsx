// componnets
import AuthForm from "@/components/auth/AuthForm";

const Register = () => {
  return <AuthForm type="register" />;
};

export default Register;

export const metadata = {
  title: `${process.env.HEAD_BASE_TITLE} | Register`,
};
