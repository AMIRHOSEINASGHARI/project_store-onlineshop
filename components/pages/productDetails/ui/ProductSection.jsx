import Image from "next/image";
import Link from "next/link";
import { reducePrice, shorterText } from "@/utils/functions";
import AddToCart from "./AddToCart";
import AddToFave from "@/components/reusable/AddToFave";

const ProductSection = (props) => {
  const {
    _id,
    title,
    image,
    price,
    stock,
    discount,
    description,
    category,
    session,
  } = props;

  return (
    <section className="flex max-lg:flex-col gap-5">
      <div className="w-full lg:w-[50%] flex justify-center items-center bg-gray-100 rounded-lg p-4 relative">
        <Image
          src={image}
          width={400}
          height={400}
          alt={title}
          priority
          className="max-md:w-[250px] max-w-[400px] max-h-[400px] object-cover"
        />
        <AddToFave type="product" userId={session?.userId} productId={_id} />
      </div>
      <div className="space-y-2 lg:w-[50%]">
        <h1 className="font-black text-[30px]">{title}</h1>
        <div className="flex items-center gap-3">
          <Link
            target="_blank"
            href={`/products?category=${category}`}
            className="capitalize font-medium"
          >
            {category}
          </Link>
          <p className="text-gray-300">|</p>
          {stock > 0 ? (
            <p className="text-green-500">In Stock</p>
          ) : (
            <p className="text-red-500">Out of stock!</p>
          )}
          {stock > 0 && stock <= 10 && (
            <>
              <p className="text-gray-300">|</p>
              <p className="text-red-600 font-medium text-[12px]">
                Only {stock} Remains
              </p>
            </>
          )}
        </div>
        <div>
          {stock > 0 && (
            <>
              <div className="flex items-center gap-5 mb-[20px]">
                <h1 className="text-blue-500 font-bold text-[30px]">
                  $ {reducePrice(discount, price).toLocaleString()}
                </h1>
                {discount > 0 && (
                  <span className="text-gray-400 line-through text-[15px]">
                    {price.toLocaleString()}
                  </span>
                )}
              </div>
            </>
          )}
          {description && (
            <div>
              <h3 className="font-bold text-[17px]">Description</h3>
              <p>{shorterText(description, 500)}</p>
            </div>
          )}
          {stock > 0 && (
            <AddToCart
              productId={JSON.parse(JSON.stringify(_id))}
              session={session}
            />
          )}
          {stock === 0 && (
            <div className="flex justify-center bg-gray-200 rounded-xl py-3 mt-2">
              <p className="font-bold">Out of stock!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
