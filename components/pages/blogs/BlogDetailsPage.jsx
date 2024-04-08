import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { icons } from "@/constants";
import { createSlug } from "@/utils/functions";
import LikeBlog from "./ui/LikeBlog";
import { getBlog } from "@/actions/blog.action";

const BlogDetailsPage = async ({ id }) => {
  const data = await getBlog(id);

  if (data.code !== 200) {
    return <h1>Error!</h1>;
  }

  const { _id, title, description, image, keywords, likes, createdAt } =
    data.blog;

  return (
    <main className="flex flex-col gap-[15px]">
      <h1 className="subheader">{title}</h1>
      <div className="flex flex-col gap-[5px]">
        <div className="flex items-center gap-[8px] mb-[10px]">
          <div className="iconSize">{icons.clock}</div>
          <p className="subtitle">{moment(createdAt).fromNow()}</p>
        </div>
        <div className="flex items-center gap-[5px]">
          <div className="iconSize">{icons.heart}</div>
          <p className="subtitle">{likes.length}</p>
        </div>
      </div>
      <div className="w-full flex justify-center cardShadow rounded-xl p-3">
        <div className="xl:w-[90%]">
          <Image
            src={image}
            width={1000}
            height={700}
            alt="blog"
            priority
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
      <p className="text-justify">{description}</p>
      <LikeBlog id={JSON.parse(JSON.stringify(_id))} />
      <div className="mt-[30px] border-t py-[10px]">
        <h1 className="mb-[6px]">Keywords:</h1>
        <div className="flex flex-wrap gap-[5px]">
          {keywords.map((el) => (
            <Link
              key={el}
              target="_blank"
              href={`/blogs/tag/${createSlug(el.toLowerCase())}`}
              className="bg-gray-100 rounded-xl py-2 px-4 text-[14px]"
            >
              {el}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogDetailsPage;
