"use client";

import { addToCart } from "@/actions/cart.action";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const CountButtons = ({ quantity, productId, session }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const down = async () => {};

  const up = async () => {
    if (!session) {
      router.push("/login");
      return;
    }

    setLoading(() => true);
    const result = await addToCart(productId);
    setLoading(() => false);
    router.refresh();

    if (result.code !== 200) {
      toast.error(result.message);
    } else {
      toast.success(result.message);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={down}
        className="rounded-lg text-[25px] w-[35px] h-[35px] flex justify-center items-center border hover:bg-gray-50 hover:shadow-xl hover:shadow-gray-200 transition1"
      >
        -
      </button>
      <p>{quantity}</p>
      <button
        onClick={up}
        className="text-blue-500 rounded-lg text-[25px] w-[35px] h-[35px] flex justify-center items-center border border-blue-500 hover:bg-blue-50 hover:shadow-xl hover:shadow-blue-200 transition1"
      >
        +
      </button>
    </div>
  );
};

export default CountButtons;
