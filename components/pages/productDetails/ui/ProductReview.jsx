import TextHeader from "@/components/reusable/TextHeader";
import { reducePrice } from "@/utils/functions";
import moment from "moment";

const ProductReview = (props) => {
  const {
    price,
    stock,
    discount,
    category,
    brand,
    likes,
    comments,
    orders,
    createdAt,
    description,
  } = props;

  return (
    <section>
      <TextHeader title="Product Review" />
      <ul className="ml-[20px]">
        <li className="flex items-center gap-2">
          <p className="font-semibold text-[14px]">Price: </p>
          <div className="font-light text-[14px] flex items-center gap-2">
            <p>$ {reducePrice(discount, price).toLocaleString()}</p>
            {discount > 0 && (
              <>
                <span>|</span>
                <p className="line-through text-[12px] font-light">
                  {price.toLocaleString()}
                </p>
              </>
            )}
          </div>
        </li>
        <li className="flex items-center gap-2">
          <p className="font-semibold text-[14px]">Discount: </p>
          <p className="font-light text-[14px]">% {discount}</p>
        </li>
        <li className="flex items-center gap-2">
          <p className="font-semibold text-[14px]">Stock: </p>
          <p className="font-light text-[14px]">{stock.toLocaleString()}</p>
        </li>
        <li className="flex items-center gap-2">
          <p className="font-semibold text-[14px]">Category: </p>
          <p className="font-light text-[14px] capitalize">{category}</p>
        </li>
        <li className="flex items-center gap-2">
          <p className="font-semibold text-[14px]">Brand: </p>
          <p className="font-light text-[14px] capitalize">{brand}</p>
        </li>
        <li className="flex items-center gap-2">
          <p className="font-semibold text-[14px]">Likes: </p>
          <p className="font-light text-[14px]">
            {likes.length.toLocaleString()}
          </p>
        </li>
        <li className="flex items-center gap-2">
          <p className="font-semibold text-[14px]">Comments: </p>
          <p className="font-light text-[14px]">
            {comments.length.toLocaleString()}
          </p>
        </li>
        <li className="flex items-center gap-2">
          <p className="font-semibold text-[14px]">Orders: </p>
          <p className="font-light text-[14px]">
            {orders.length.toLocaleString()}
          </p>
        </li>
        <li className="flex items-center gap-2">
          <p className="font-semibold text-[14px]">Created At: </p>
          <p className="font-light text-[14px] capitalize">
            {moment(createdAt).fromNow()}
          </p>
        </li>
        {description && (
          <li className="flex gap-2">
            <p className="font-semibold text-[14px]">Description: </p>
            <p className="font-light text-[14px]">{description}</p>
          </li>
        )}
      </ul>
    </section>
  );
};

export default ProductReview;
