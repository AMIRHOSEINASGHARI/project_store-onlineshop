"use client";

const AddToCart = ({ productId }) => {
  return (
    <div className="mt-[20px]">
      <button
        type="button"
        className="bg-black text-white font-semibold w-full py-3 rounded-lg"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default AddToCart;
