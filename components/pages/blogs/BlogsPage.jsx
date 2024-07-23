// actions
import { getBlogs } from "@/actions/blog.action";
// components
import BlogCard from "./ui/BlogCard";

const BlogsPage = async () => {
  const data = await getBlogs();

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[15px]">
      {data.blogs.map((el) => (
        <BlogCard {...el} key={el._id} />
      ))}
    </main>
  );
};

export default BlogsPage;
