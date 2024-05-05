// next
import Image from "next/image";
import { redirect } from "next/navigation";
// utils
import { getServerSession } from "@/utils/session";
// constants
import { images } from "@/constants";
// components
import Navbar from "@/components/shared/Navbar";
import ProfileSidebar from "@/components/pages/profile/shared/ProfileSidebar";
import BottomBar from "@/components/pages/profile/shared/BottomBar";

const ProfileLayout = ({ children }) => {
  const session = getServerSession();

  if (!session) redirect("/login");

  return (
    <div>
      <Navbar />
      <div className="mt-[90px] pb-[150px] maxWidth2 pagesPaddingX min-h-screen">
        <div>
          <ProfileSidebar session={session} />
          <main className="lg:pl-[300px] lg:pt-[15px]">{children}</main>
        </div>
      </div>
      <div className="lg:hidden fixed bottom-[68.5px] backdrop-blur bg-white/85 w-full flex items-center gap-[10px] px-5 py-2 border-t border-gray-100">
        <Image
          src={session?.avatar || images.person_1}
          width={30}
          height={30}
          priority
          alt="user"
          className="rounded-full"
        />
        <p className="subtitle">{session?.username}</p>
      </div>
      <BottomBar />
    </div>
  );
};

export default ProfileLayout;

export const metadata = {
  title: {
    template: "Profile | %s",
    default: "Profile",
    absolute: "Profile",
  },
};
