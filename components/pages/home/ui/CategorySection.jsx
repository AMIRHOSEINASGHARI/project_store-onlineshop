// next
import Link from "next/link";
import Image from "next/image";
// constants
import { categories } from "@/constants";
// components
import TextHeader from "@/components/reusable/TextHeader";

const CategorySection = () => {
  // TODO: there is a bug in '/products?category=...' fix it later

  return (
    <section>
      <div className="textHeaderPosition2">
        <TextHeader
          title="Shop By Category"
          subtitle="There are many variations passages"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">
        {categories.map((el) => (
          <Link
            href={{
              pathname: "/products",
              query: { category: el.query },
            }}
            target="_blank"
            key={el.query}
            className="group relative overflow-hidden rounded-2xl"
          >
            <Image
              src={el.image}
              alt={el.title}
              width={1080}
              height={720}
              priority
            />
            <div className="bg-black/30 backdrop-blur-sm inset-0 z-10 absolute hidden group-hover:block">
              <p className="text-center absolute z-20 bottom-3 right-0 left-0 text-white font-bold animate-pulse">
                {el.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
