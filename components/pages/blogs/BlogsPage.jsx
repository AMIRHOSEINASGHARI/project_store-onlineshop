import { getBlogs } from "@/actions/blogs";
import BlogCard from "./ui/BlogCard";

const BlogsPage = async () => {
  const data = await getBlogs();

  if (data.code !== 200) {
    return <h1>Error!</h1>;
  }

  if (data.blogs.length === 0) {
    return <h1>No Blogs Yet!</h1>;
  }

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[15px]">
      {data.blogs.map((el) => (
        <BlogCard {...el} key={el._id} />
      ))}
    </main>
  );
};

export default BlogsPage;
