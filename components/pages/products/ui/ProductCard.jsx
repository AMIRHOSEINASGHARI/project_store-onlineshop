// next
import Link from "next/link";
import Image from "next/image";
// utils
import { applyDiscount } from "@/utils/functions";

const ProductCard = (props) => {
  const {
    _id,
    images,
    title,
    discount,
    price,
    stock,
    category,
    brand,
    subDescription,
  } = props;

  return (
    <Link
      href={`/products/${_id}`}
      key={_id}
      className="rounded-2xl p-4 cardShadow w-auto h-auto flex flex-col justify-between gap-3"
    >
      <div className="space-y-3">
        <div className="rounded-lg overflow-hidden w-full h-[200px]">
          <Image
            src={images[0]}
            width={400}
            height={400}
            alt={title}
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-1.5">
          <p className="text-[15px] font-semibold line-clamp-2">{title}</p>
          <div className="flex items-center flex-wrap gap-2">
            <span className="capitalize border text-xs rounded-full px-2 py-1">
              {category}
            </span>
            <span className="capitalize border text-xs rounded-full px-2 py-1">
              {brand}
            </span>
          </div>
          <p className="text-sm line-clamp-3">{subDescription}</p>
        </div>
      </div>
      {stock > 0 ? (
        <div className="flex items-center flex-wrap gap-2 justify-between">
          <div className="space-x-2">
            <span>${applyDiscount(price, discount).toFixed(2)}</span>
            {discount > 0 && (
              <span className="line-through text-slate-400">${price}</span>
            )}
          </div>
          <div className="flex items-center justify-center w-[100px] py-2 bg-violet-500 text-white text-sm font-semibold rounded-full">
            Buy now
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full py-2 bg-red-100 border border-red-500 text-red-700 text-sm font-semibold rounded-full">
          Out of stocks
        </div>
      )}
    </Link>
  );
};

export default ProductCard;
