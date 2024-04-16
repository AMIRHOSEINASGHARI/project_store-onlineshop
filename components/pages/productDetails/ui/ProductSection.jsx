import Image from "next/image";
import Link from "next/link";
import { reducePrice } from "@/utils/functions";
import { Span } from "next/dist/trace";
import AddToCart from "./AddToCart";

const ProductSection = (props) => {
  const { _id, title, image, price, stock, discount, brand, category, likes } =
    props;

  return (
    <section className="flex max-lg:flex-col lg:items-center max-lg:gap-5">
      <div className="w-full lg:w-[50%] flex justify-center">
        <Image
          src={image}
          width={400}
          height={400}
          alt={title}
          priority
          className="max-md:w-[300px]"
        />
      </div>
      <div className="space-y-2">
        <h1 className="subheader">{title}</h1>
        <div className="flex items-center gap-2">
          <p>Brand:</p>
          <p className="capitalize font-medium">{brand}</p>
        </div>
        <div className="flex items-center gap-2">
          <p>Category:</p>
          <Link
            target="_blank"
            href={`/products?category=${category}`}
            className="capitalize font-medium"
          >
            {category}
          </Link>
        </div>
        <div>
          {stock > 0 ? (
            <div>
              {stock > 0 && stock <= 10 && (
                <span className="text-red-600 font-medium text-[12px]">
                  Only {stock} Remains
                </span>
              )}
              <div className="flex items-center gap-5">
                <h1 className="text-rose-500 font-bold text-[30px]">
                  $ {reducePrice(discount, price).toLocaleString()}
                </h1>
                {discount > 0 && (
                  <span className="bg-red-100 rounded-xl py-1 px-2  text-red-500">
                    %{discount}
                  </span>
                )}
              </div>
              {discount > 0 && (
                <span className="text-gray-400 line-through text-[15px] ml-[30px]">
                  {price.toLocaleString()}
                </span>
              )}
              <AddToCart />
            </div>
          ) : (
            <div className="flex justify-center bg-gray-200 rounded-xl py-2 mt-2">
              <p className="font-bold">Out of stock!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
