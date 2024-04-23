import Image from "next/image";
import Link from "next/link";
import { icons, images, profilePages } from "@/constants";
import SignOut from "@/components/shared/SignOut";

const ProfileSidebar = ({ session }) => {
  return (
    <aside className="max-lg:hidden fixed z-10 bg-white flex flex-col gap-[30px]">
      <h1 className="font-black text-[20px] lg:text-[30px] mb-[30px]">
        My Profile
      </h1>
      <div className="flex items-center gap-[20px]">
        <Image
          src={session?.avatar || images.person_1}
          width={45}
          height={45}
          priority
          alt="user"
          className="rounded-full"
        />
        <p className="font-bold">{session?.username}</p>
      </div>
      {profilePages.map((el) => (
        <Link
          key={el.route}
          href={`/profile/${el.route}`}
          className="flex items-center gap-[20px] p-1"
        >
          <div className="iconSize">{el.icon}</div>
          <p>{el.name}</p>
        </Link>
      ))}
      <SignOut
        icon={icons.power}
        title="Logout"
        wrapperClassName="flex items-center gap-[20px] p-1 text-red-500"
        iconClassName="iconSize"
      />
    </aside>
  );
};

export default ProfileSidebar;
