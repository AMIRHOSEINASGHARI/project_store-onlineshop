import { getBlogs } from "@/actions/blogs";

const BlogsPage = async () => {
  const data = await getBlogs();

  if (data.code !== 200) {
    return <h1>Error!</h1>;
  }
  return <main>BlogsPage</main>;
};

export default BlogsPage;
