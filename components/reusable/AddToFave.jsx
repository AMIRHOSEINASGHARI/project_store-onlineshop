import { icons } from "@/constants";

const AddToFave = ({ type, userId, productId, blogId }) => {
  return (
    <button className="absolute top-2 right-2 text-[20px] bg-red-100 text-red-500 rounded-lg p-3">
      {icons.heart}
    </button>
  );
};

export default AddToFave;
