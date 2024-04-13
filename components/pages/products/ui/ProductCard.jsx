import Link from "next/link";
import Image from "next/image";
import { reducePrice, shorterText } from "@/utils/functions";

const ProductCard = (props) => {
  const { _id, image, title, description, discount, price } = props;

  return (
    <Link
      href={`/products/${_id}`}
      target="_blank"
      key={_id}
      className="rounded-2xl p-4 cardShadow3 flex flex-col justify-between"
    >
      <div>
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
        <p className="subheader">{shorterText(title, 40)}</p>
      </div>
      <div className="flex items-end justify-between">
        <span className="subtitle">{shorterText(description, 25)}</span>
        {discount > 0 ? (
          <div className="flex flex-col items-end">
            <span className="discountPrice">${price}</span>
            <p className="price">${reducePrice(discount, price)}</p>
          </div>
        ) : (
          <div className="flex flex-col justify-end">
            <p className="price">${price}</p>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
