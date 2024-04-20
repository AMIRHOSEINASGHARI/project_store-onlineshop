import TextHeader from "@/components/reusable/TextHeader";
import AddComment from "./AddComment";

const ProductComments = ({ comments, productId }) => {
  return (
    <section>
      <TextHeader
        title="Product Comments"
        subtitle={`${comments.length} comments`}
      />
      <AddComment productId={productId} />
      {comments.length > 0 && (
        <div>
          {comments.map((comment) => (
            <div key={comment._id}>{comment.title}</div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductComments;
