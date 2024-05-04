// next
import { redirect } from "next/navigation";
// utils
import { getServerSession } from "@/utils/session";

const AuthLayout = ({ children }) => {
  const session = getServerSession();

  if (session) redirect("/profile/personal-information");

  return <main>{children}</main>;
};

export default AuthLayout;
