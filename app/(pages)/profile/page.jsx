import { getServerSession } from "@/utils/session";
import { redirect } from "next/navigation";

const Profile = () => {
  const session = getServerSession();

  if (!session) redirect("/login");

  return <div>Profile</div>;
};

export default Profile;
