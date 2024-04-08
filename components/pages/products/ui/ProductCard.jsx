import Link from "next/link";
import Image from "next/image";
import { reducePrice, shorterText } from "@/utils/functions";

const ProductCard = (props) => {
  const { _id, image, title, description, discount, price } = props._doc;
  return (
    <Link
      href={`/products/${_id}`}
      target="_blank"
      key={_id}
      className="rounded-2xl p-4 cardShadow3"
    >
      <div className="w-full flex justify-center mx-3 my-10">
        <Image
          src={image}
          width={400}
          height={400}
          alt={title}
          priority
          className="w-[200px] h-[200px]"
        />
      </div>
      <div className="flex w-full justify-between">
        <div>
          <p className="subheader">{shorterText(title, 30)}</p>
          <span className="subtitle">{shorterText(description, 25)}</span>
        </div>
        {discount > 0 ? (
          <div className="flex flex-col items-end">
            <span className="discountPrice">${price.toLocaleString()}</span>
            <p className="price">
              ${reducePrice(discount, price).toLocaleString()}
            </p>
          </div>
        ) : (
          <div className="flex flex-col justify-end">
            <p className="price">${price.toLocaleString()}</p>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
