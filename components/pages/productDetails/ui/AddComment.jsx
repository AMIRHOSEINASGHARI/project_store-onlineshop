"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addProductComment } from "@/actions/product.action";
import toast from "react-hot-toast";
import Loader from "@/components/shared/Loader";

const AddComment = ({ productId, session }) => {
  const router = useRouter();
  const [loading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (!session) {
      router.push("/login");
      return;
    }
    if (!form.title || !form.description) {
      toast.error("Please fill all fields!");
      return;
    }

    setIsLoading(() => true);
    const result = await addProductComment(form, productId, session?.userId);
    setIsLoading(() => false);

    if (result.code !== 200) {
      toast.error(result.message);
    } else {
      toast.success(result.message);
      setForm({
        title: "",
        description: "",
      });
    }
  };

  return (
    <div className="my-[20px]">
      <h1 className="subheader mb-2">Add your Comment</h1>
      <form onSubmit={submitForm} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={form.title}
          onChange={changeHandler}
          className="input1"
        />
        <textarea
          rows={5}
          placeholder="Description"
          name="description"
          value={form.description}
          onChange={changeHandler}
          className="input1"
        />
        <button
          type="submit"
          className={`${
            loading ? "bg-gray-100" : "bg-black"
          } text-white rounded-lg w-[100px] h-[35px] text-[14px] flex items-center justify-center`}
        >
          {loading ? <Loader h={20} w={20} /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddComment;
