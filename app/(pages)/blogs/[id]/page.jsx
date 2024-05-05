// actions
import { getBlog } from "@/actions/blog.action";
// components
import BlogDetailsPage from "@/components/pages/blogs/BlogDetailsPage";

const BlogDetails = ({ params }) => {
  return <BlogDetailsPage id={params.id} />;
};

export default BlogDetails;

export async function generateMetadata({ params }) {
  const data = await getBlog(params.id);

  if (data.code !== 200) {
    notFound();
  }

  return {
    title: {
      absolute: data.blog.title,
    },
    description: data.blog.description,
    keywords: data.blog.keywords,
  };
}
