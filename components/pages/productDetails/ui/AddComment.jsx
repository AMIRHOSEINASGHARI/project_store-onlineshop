"use client";

import { useState } from "react";
import useSession from "@/hooks/session";
import { useRouter } from "next/navigation";

const AddComment = () => {
  const session = useSession();
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (session?.data?.status === "un-authorized") {
      router.push("/login");
      return;
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
          className="py-2 px-5 bg-black rounded-lg text-white w-fit text-[13px]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddComment;
