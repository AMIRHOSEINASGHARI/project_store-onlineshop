import Image from "next/image";
import Link from "next/link";
import TextHeader from "@/components/reusable/TextHeader";
import { icons } from "@/constants";
import { getLatestProducts } from "@/actions/product.action";
import { reducePrice, shorterText } from "@/utils/functions";

const NewArrival = async () => {
  const data = await getLatestProducts();

  if (data.code !== 200) {
    return <h1>Error!</h1>;
  }

  if (data.products.length === 0) {
    return <h1>No Products Yet!</h1>;
  }

  return (
    <section>
      <div className="textHeaderPosition2">
        <TextHeader
          title="New Arrival Products"
          subtitle="There are many variations passages"
        />
      </div>
      <div className="w-full flex justify-end mb-3">
        <Link
          href="/products"
          className="flex items-center gap-3 hover:bg-gray-200 bg-gray-100 font-semibold text-[14px] rounded-xl py-2 px-4 w-fit group-hover:text-violet-500  transition1"
        >
          See all {icons.rightArrow}
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {data.products.map((el) => (
          <Link
            href={`/products/${el._id}`}
            target="_blank"
            key={el.id}
            className="rounded-2xl p-4 cardShadow3"
          >
            <div className="w-full flex justify-center mx-3 my-10">
              <Image
                src={el.image}
                width={400}
                height={400}
                alt={el.title}
                priority
                className="w-[200px] h-[200px]"
              />
            </div>
            <div className="flex w-full justify-between">
              <div>
                <p className="subheader">{shorterText(el.title, 15)}</p>
                <span className="subtitle">
                  {shorterText(el.description, 25)}
                </span>
              </div>
              {el.discount > 0 ? (
                <div className="flex flex-col items-end">
                  <span className="discountPrice">
                    ${el.price.toLocaleString()}
                  </span>
                  <p className="price">
                    ${reducePrice(el.discount, el.price).toLocaleString()}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col justify-end">
                  <p className="price">${el.price.toLocaleString()}</p>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NewArrival;
