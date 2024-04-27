import Image from "next/image";
import Link from "next/link";
import { getCart } from "@/actions/cart.action";
import { icons } from "@/constants";
import { reducePrice } from "@/utils/functions";
import CountButtons from "./ui/CountButtons";
import { getServerSession } from "@/utils/session";
import EmptyCart from "@/components/shared/cart/EmptyCart";
import RightBar from "../shared/RightBar";

const CartPage = async () => {
  try {
    const session = getServerSession();
    const data = await getCart();

    if (data.code !== 200) {
      return <p>Error!</p>;
    }

    if (data.cart.totalProductsCount === 0) {
      return <EmptyCart />;
    }

    return (
      <main className="flex gap-[20px] max-lg:flex-col lg:items-start">
        <section className="max-lg:w-full lg:w-3/4 space-y-[20px]">
          {data.cart.items.map((el) => {
            const {
              productId: { image, title, price, discount, _id },
              quantity,
            } = el;
            return (
              <div
                key={el._id}
                className="cardShadow3 rounded-xl px-4 py-6 flex"
              >
                <div className="flex max-lg:flex-col lg:items-center gap-10 w-full">
                  <div className="p-4 flex items-center justify-center max-lg:w-full">
                    <Image
                      src={image}
                      width={200}
                      height={200}
                      alt={title}
                      priority
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <Link href={`/products/${_id}`} target="_blank">
                      {title}
                    </Link>
                    <div className="flex items-center gap-2">
                      <p className="subtitle">
                        ${reducePrice(discount, price)}
                      </p>
                      <div className="text-[8px]">{icons.close}</div>
                      <p className="subtitle">{quantity}</p>
                      <p className="text-red-500 font-light text-[14px]">
                        $ {reducePrice(discount, price) * quantity}
                      </p>
                    </div>
                    <CountButtons
                      quantity={JSON.parse(JSON.stringify(quantity))}
                      productId={JSON.parse(JSON.stringify(_id))}
                      session={JSON.parse(JSON.stringify(session))}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        <RightBar
          cart={data.cart}
          nextRoute="shipping"
          buttonTitle="Submit Orders"
        />
      </main>
    );
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default CartPage;
