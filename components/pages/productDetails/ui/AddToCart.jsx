"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addToCart } from "@/actions/product.action";
import toast from "react-hot-toast";
import Loader from "@/components/shared/Loader";

const AddToCart = ({ productId, session }) => {
  const router = useRouter();
  const [loading, setIsLoading] = useState(false);

  const addHandler = async () => {
    if (!session) {
      router.push("/login");
      return;
    }

    setIsLoading(() => true);
    const result = await addToCart(productId);
    setIsLoading(() => false);

    if (result.code !== 200) {
      toast.error(result.message);
    } else {
      toast.success(result.message);
    }
  };

  return (
    <div className="mt-[20px]">
      <button
        type="button"
        className={`text-white font-semibold w-full py-3 rounded-lg flex justify-center ${
          loading ? "bg-gray-100" : "bg-black"
        }`}
        onClick={addHandler}
      >
        {loading ? <Loader h={20} w={20} /> : "Add To Cart"}
      </button>
    </div>
  );
};

export default AddToCart;
