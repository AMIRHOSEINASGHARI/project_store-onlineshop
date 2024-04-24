import Image from "next/image";
import Link from "next/link";
import { getCart } from "@/actions/cart.action";
import { icons } from "@/constants";
import {
  calculateTotalDiscount,
  calculateTotalPrice,
  reducePrice,
} from "@/utils/functions";
import CountButtons from "./ui/CountButtons";

const CartPage = async () => {
  try {
    const data = await getCart();

    if (data.code !== 200) {
      return <p>Error!</p>;
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
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        <section className="cardShadow3 rounded-xl p-6 pt-3 max-lg:w-full lg:w-1/4 divide-y-2 divide-gray-100">
          <div className="flex items-center w-full justify-between py-3">
            <p className="subtitle">Total Products: </p>
            <p className="subtitle">{data.cart.totalProductsCount}</p>
          </div>
          <div className="flex items-center w-full justify-between py-3">
            <p className="subtitle">Total Price: </p>
            <p className="subtitle">
              $ {calculateTotalPrice(data.cart.items).toLocaleString()}
            </p>
          </div>
          <div className="flex items-center w-full justify-between py-3">
            <p className="subtitle">Discount: </p>
            <p className="subtitle">
              $ {calculateTotalDiscount(data.cart.items).toLocaleString()}
            </p>
          </div>
          <div className="flex items-center w-full justify-between py-3">
            <p className="subtitle">Total Payable: </p>
            <p className="text-blue-500 font-bold">
              $
              {(
                calculateTotalPrice(data.cart.items) -
                calculateTotalDiscount(data.cart.items)
              ).toLocaleString()}
            </p>
          </div>
          <Link
            href="/checkout/shipping"
            className="bg-blue-500 rounded-xl w-full flex justify-center py-3 mt-3 font-medium text-[15px] text-white"
          >
            Submit Order
          </Link>
        </section>
      </main>
    );
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default CartPage;
