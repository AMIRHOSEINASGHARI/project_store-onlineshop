import Link from "next/link";
import { icons, profilePages } from "@/constants";
import SignOut from "@/components/shared/SignOut";

const BottomBar = () => {
  return (
    <div className="lg:hidden fixed bottom-0 backdrop-blur bg-white/85 w-full flex items-center justify-evenly border-t border-gray-100">
      {profilePages.map((el) => (
        <Link
          key={el.route}
          href={`/profile/${el.route}`}
          className="flex flex-1 flex-col items-center gap-[5px] p-3"
        >
          <div className="iconSize">{el.icon}</div>
          <p className="text-[10px]">{el.name.split(" ")[0]}</p>
        </Link>
      ))}
      <SignOut
        icon={icons.power}
        title="Logout"
        titleClassName="text-[10px]"
        wrapperClassName="flex flex-1 flex-col items-center gap-[5px] p-3 text-red-500"
        iconClassName="iconSize"
      />
    </div>
  );
};

export default BottomBar;
