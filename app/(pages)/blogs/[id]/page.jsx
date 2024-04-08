import BlogDetailsPage from "@/components/pages/blogs/BlogDetailsPage";

const BlogDetails = ({ params }) => {
  return <BlogDetailsPage id={params.id} />;
};

export default BlogDetails;
