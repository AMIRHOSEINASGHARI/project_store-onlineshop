import Link from "next/link";
import TextHeader from "@/components/reusable/TextHeader";
import { icons } from "@/constants";

// TODO: soon, fetch data and make this dynamic
const blogs = [
  {
    createdAt: "07 April, 2024",
    title: "GameStop Will Provide Up to $1 Billion in",
    _id: "1",
  },
  {
    createdAt: "07 April, 2024",
    title: "GameStop Will Provide Up to $1 Billion in",
    _id: "2",
  },
  {
    createdAt: "07 April, 2024",
    title: "GameStop Will Provide Up to $1 Billion in",
    _id: "3",
  },
  {
    createdAt: "07 April, 2024",
    title: "GameStop Will Provide Up to $1 Billion in",
    _id: "4",
  },
];

const LatestBlogs = () => {
  return (
    <section>
      <div className="textHeaderPosition">
        <TextHeader title="Latest Blogs" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {blogs.map((el) => (
          <Link
            key={el._id}
            href={`/blogs/${el._id}`}
            target="_blank"
            className="rounded-xl py-4 px-6 cardShadow3 hover:shadow-inner transition1 group"
          >
            <p className="subtitle">{el.createdAt}</p>
            <h1 className="subheader mt-3 mb-8">{el.title}</h1>
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
