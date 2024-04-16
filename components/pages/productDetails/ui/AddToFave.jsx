import { icons } from "@/constants";

const AddToFave = () => {
  // TODO: server action for adding product to wishlist

  return (
    <button className="absolute top-2 right-2 text-[20px] bg-red-100 text-red-500 rounded-lg p-3">
      {icons.heart}
    </button>
  );
};

export default AddToFave;
