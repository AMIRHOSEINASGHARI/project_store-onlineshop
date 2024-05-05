// components
import TextHeader from "@/components/reusable/TextHeader";
import AddComment from "./AddComment";
import ShowComments from "./ShowComments";

const ProductComments = ({ comments, productId, session }) => {
  return (
    <section>
      <TextHeader
        title="Product Comments"
        subtitle={`${comments.length} comments`}
      />
      <AddComment productId={productId} session={session} />
      {comments.length > 0 && (
        <ShowComments comments={JSON.parse(JSON.stringify(comments))} />
      )}
    </section>
  );
};

export default ProductComments;
