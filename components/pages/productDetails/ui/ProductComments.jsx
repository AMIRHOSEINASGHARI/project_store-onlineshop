// components
import TextHeader from "@/components/reusable/TextHeader";
import AddComment from "./AddComment";
import ShowComments from "./ShowComments";
import { getProductComments } from "@/actions/product.action";

const ProductComments = async ({ id }) => {
  const data = await getProductComments(id);

  return (
    <section>
      <TextHeader
        title="Product Comments"
        subtitle={`${data.comments.length} comments`}
      />
      <AddComment productId={id} />
      {data.comments.length > 0 && (
        <ShowComments comments={JSON.parse(JSON.stringify(data.comments))} />
      )}
    </section>
  );
};

export default ProductComments;
