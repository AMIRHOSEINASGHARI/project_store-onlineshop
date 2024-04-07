import Image from "next/image";
import Link from "next/link";
import TextHeader from "@/components/reusable/TextHeader";
import { icons } from "@/constants";

// TODO: soon, fetch data and make this dynamic
const products = [
  {
    id: "1",
    image: "/images/products/1.png",
    title: "Samsung A54 5G",
    description: "Powerful sensors, advanced",
    price: 250,
    discount: 50,
  },
  {
    id: "2",
    image: "/images/products/2.png",
    title: "Samsung S24 Ultra",
    description: "Powerful sensors, advanced",
    price: 250,
    discount: 50,
  },
  {
    id: "3",
    image: "/images/products/3.png",
    title: "Samsung A14 5G",
    description: "Powerful sensors, advanced",
    price: 250,
    discount: 50,
  },
  {
    id: "4",
    image: "/images/products/4.png",
    title: "Samsung S24 Ultra",
    description: "Powerful sensors, advanced",
    price: 250,
    discount: 50,
  },
];

const NewArrival = () => {
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
        {products.map((el) => (
          <div key={el.id} className="rounded-2xl p-4 cardShadow3">
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
                <p className="subheader">{el.title}</p>
                <span className="subtitle">{el.description}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="discountPrice">${el.price}</span>
                <p className="price">${el.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrival;
