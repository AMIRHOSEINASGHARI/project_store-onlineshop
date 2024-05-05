// next
import Link from "next/link";
import Image from "next/image";
// constants
import { categories } from "@/constants";

const CategoriesPage = async () => {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
      {categories.map((c) => (
        <Link
          key={c.query}
          className="w-fit p-3 cardShadow rounded-xl"
          href={`/products?category=${c.query}`}
          target="_blank"
        >
          <div>
            <Image
              src={c.image}
              width={500}
              height={500}
              alt={c.title}
              priority
              className="rounded-xl"
            />
          </div>
          <div className="px-2 pt-2">
            <h1 className="subtitle text-center">{c.title}</h1>
          </div>
        </Link>
      ))}
    </main>
  );
};

export default CategoriesPage;
