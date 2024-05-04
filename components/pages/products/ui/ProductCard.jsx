// next
import Link from "next/link";
import Image from "next/image";
// utils
import { reducePrice, shorterText } from "@/utils/functions";

const ProductCard = (props) => {
  const { _id, image, title, discount, price, stock } = props;

  return (
    <Link
      href={`/products/${_id}`}
      key={_id}
      className="rounded-2xl p-4 cardShadow3 flex flex-col justify-between"
    >
      <div className="mb-[15px]">
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
      <div>
        {stock === 0 ? (
          <div className="flex justify-center bg-gray-200 rounded-xl py-2 mt-2">
            <p className="font-bold">Out of stock!</p>
          </div>
        ) : (
          <div>
            <div className="flex justify-between">
              <p className="font-bold text-[20px]">
                $ {reducePrice(discount, price).toLocaleString()}
              </p>
              {discount > 0 && (
                <span className="bg-red-100 rounded-xl py-1 px-2 text-red-500">
                  %{discount}
                </span>
              )}
            </div>
            {discount > 0 && (
              <span className="text-gray-400 line-through text-[12px] ml-[20px]">
                {price.toLocaleString()}
              </span>
            )}
          </div>
        )}
      </div>
      {stock <= 10 && stock > 0 && (
        <span className="text-red-600 font-medium text-[12px] mt-[15px] block">
          Only {stock} Remains
        </span>
      )}
    </Link>
  );
};

export default ProductCard;
