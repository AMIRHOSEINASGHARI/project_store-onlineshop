import { getServerSession } from "@/utils/session";
import { redirect } from "next/navigation";

const AuthLayout = ({ children }) => {
  const session = getServerSession();

  if (session) redirect("/profile/personal-info");

  return <main>{children}</main>;
};

export default AuthLayout;
