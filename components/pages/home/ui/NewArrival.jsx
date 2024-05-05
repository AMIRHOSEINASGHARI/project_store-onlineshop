// next
import Link from "next/link";
// actions
import { getLatestProducts } from "@/actions/product.action";
// constants
import { icons } from "@/constants";
// components
import TextHeader from "@/components/reusable/TextHeader";
import ProductCard from "../../products/ui/ProductCard";

export const dynamic = "force-dynamic";

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
          <ProductCard {...el} key={el._id} />
        ))}
      </div>
    </section>
  );
};

export default NewArrival;
