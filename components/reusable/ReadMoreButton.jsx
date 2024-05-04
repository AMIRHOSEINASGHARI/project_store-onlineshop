// next
import Link from "next/link";
// constants
import { icons } from "@/constants";

const ReadMoreButton = ({ href, icon, title, wrapperClassName }) => {
  return (
    <Link
      href={href || "/"}
      className={`group w-fit ${wrapperClassName || ""}`}
    >
      <div className="flex items-center gap-3 hover:bg-gray-100 rounded-xl py-2 px-4 w-fit group-hover:text-violet-500 group-hover:translate-x-1 transition1">
        <span className="font-semibold text-[14px]">
          {title || "Read More"}
        </span>
        {icon || icons.rightArrow}
      </div>
    </Link>
  );
};

export default ReadMoreButton;
