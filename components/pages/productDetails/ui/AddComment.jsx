"use client";

// react
import { useState } from "react";
// next
import { useRouter } from "next/navigation";
// actions
import { addProductComment } from "@/actions/product.action";
// hooks
import useSession from "@/hooks/session";
import useServerAction from "@/hooks/callServerAction";
// components
import Loader from "@/components/shared/Loader";
import toast from "react-hot-toast";

const AddComment = ({ productId }) => {
  const { data: session, isLoading, isError } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const { loading, fn } = useServerAction(
    addProductComment,
    {
      form,
      productId,
      userId: session?.session?.userId,
    },
    () =>
      setForm({
        title: "",
        description: "",
      })
  );

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (session?.status !== "authorized") {
      router.push("/login");
      return;
    }
    if (!form.title || !form.description) {
      toast.error("Please fill all fields!");
      return;
    }

    fn();
  };

  if (isLoading) {
    return (
      <div className="w-full my-3 flex justify-center items-center">
        <Loader h={15} w={15} />
      </div>
    );
  }

  if (isError) {
    return "error";
  }

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
