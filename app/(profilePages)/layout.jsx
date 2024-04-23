import Link from "next/link";
import { redirect } from "next/navigation";
import Navbar from "@/components/shared/Navbar";
import { icons } from "@/constants";
import { getServerSession } from "@/utils/session";
import ProfileSidebar from "@/components/pages/profile/ui/ProfileSidebar";

const ProfileLayout = ({ children }) => {
  const session = getServerSession();

  if (!session) redirect("/login");

  return (
    <div>
      <Navbar />
      <div className="mt-[90px] pb-[150px] maxWidth2 pagesPaddingX min-h-screen">
        <div>
          <ProfileSidebar session={session} />
          <main className="lg:pl-[300px] lg:pt-[115px]">{children}</main>
        </div>
      </div>
      <div className="border-t border-gray-100 bg-gray-50 w-full flex justify-center py-[15px]">
        <div className="maxWidth pagesPaddingX flex items-center gap-2">
          <span className="subtitle">Made with</span>{" "}
          <div className="animate-bounce">{icons.redHeart}</div>{" "}
          <Link
            href="https://t.me/Amirhosein_Asghari79"
            target="_blank"
            className="subtitle hover:text-violet-500"
          >
            By AMIRHOSEIN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
