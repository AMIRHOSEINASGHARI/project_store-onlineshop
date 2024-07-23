import BlogsPage from "@/components/pages/blogs/BlogsPage";

export const revalidate = 86400; // 1d * 24h * 60m * 60s

const Blogs = () => {
  return <BlogsPage />;
};

export default Blogs;

export const metadata = {
  title: `Blogs`,
};
