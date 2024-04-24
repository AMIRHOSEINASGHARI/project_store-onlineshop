"use client";

const CountButtons = ({ quantity, productId }) => {
  const down = async () => {};

  const up = async () => {};

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
