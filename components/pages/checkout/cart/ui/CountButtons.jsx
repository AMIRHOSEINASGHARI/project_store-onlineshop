"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addToCart, decreaseFromCart } from "@/actions/cart.action";
import toast from "react-hot-toast";
import Loader from "@/components/shared/Loader";

const CountButtons = ({ quantity, productId, session }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const down = async () => {
    if (!session) {
      router.push("/login");
      return;
    }

    setLoading(() => true);
    const result = await decreaseFromCart(productId);
    setLoading(() => false);
    router.refresh();

    if (result.code !== 200) {
      toast.error(result.message);
    } else {
      toast.success(result.message);
    }
  };

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
        disabled={loading}
        className="rounded-lg text-[25px] w-[35px] h-[35px] flex justify-center items-center border hover:bg-gray-50 hover:shadow-xl hover:shadow-gray-200 transition1"
      >
        {loading ? <Loader h={20} w={20} /> : "-"}
      </button>
      <p>{quantity}</p>
      <button
        onClick={up}
        disabled={loading}
        className="text-blue-500 rounded-lg text-[25px] w-[35px] h-[35px] flex justify-center items-center border border-blue-500 hover:bg-blue-50 hover:shadow-xl hover:shadow-blue-200 transition1"
      >
        {loading ? <Loader h={20} w={20} /> : "+"}
      </button>
    </div>
  );
};

export default CountButtons;
