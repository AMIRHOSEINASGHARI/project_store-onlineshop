// next
import Link from "next/link";
// actions
import { getLatestBlogs } from "@/actions/blog.action";
// utils
import { shorterText } from "@/utils/functions";
// constants
import { icons } from "@/constants";
// components
import TextHeader from "@/components/reusable/TextHeader";
import moment from "moment";

const LatestBlogs = async () => {
  const data = await getLatestBlogs();

  if (data.code !== 200) {
    return <h1>Error!</h1>;
  }

  if (data.blogs.length === 0) {
    return <h1>No Blogs Yet!</h1>;
  }
  return (
    <section>
      <div className="textHeaderPosition">
        <TextHeader title="Latest Blogs" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {data.blogs.map((el) => (
          <Link
            key={el._id}
            href={`/blogs/${el._id}`}
            target="_blank"
            className="rounded-xl py-4 px-6 cardShadow3 hover:shadow-inner transition1 group"
          >
            <p className="subtitle">{moment(el.createdAt).fromNow()}</p>
            <h1 className="subheader mt-3 mb-8">{shorterText(el.title, 50)}</h1>
            <div className="flex items-center gap-3 hover:bg-gray-100 rounded-xl py-2 px-4 w-fit group-hover:text-violet-500 group-hover:translate-x-1 transition1">
              <span className="font-semibold text-[14px]">Read More</span>
              {icons.rightArrow}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LatestBlogs;
