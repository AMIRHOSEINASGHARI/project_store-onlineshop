"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateUserInfo } from "@/actions/user.action";
import Loader from "@/components/shared/Loader";
import { icons } from "@/constants";
import moment from "moment";
import toast from "react-hot-toast";

const PersonalInformation = (props) => {
  const { username, displayName, phoneNumber, address, createdAt } = props;

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    username: username || "",
    displayName: displayName || "",
    phoneNumber: phoneNumber || "",
    address: address || "",
  });

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // TODO: there is a bug in submiting form. check it out later
  const submitForm = async (e) => {
    e.preventDefault();

    if (!username) {
      toast.error("Username cannot be empty");
      return;
    }

    if (error.length !== 0) {
      setError("");
    }
    setLoading(() => true);
    const result = await updateUserInfo(form);
    setLoading(() => false);

    if (result.code !== 202) {
      toast.error(result.message);
      setError(result.message);
    } else {
      toast.success(result.message);
      router.push("/login");
    }
  };

  return (
    <div>
      <div className="mb-2 flex justify-end">
        <p className="subtitle">
          Joined At {moment(createdAt).subtract(10, "days").calendar()}
        </p>
      </div>

      <form onSubmit={submitForm}>
        <div className="space-y-5 mb-5">
          <div className="flex flex-col gap-1">
            <label className="font-light text-[12px]">Username</label>
            <input
              name="username"
              type="text"
              value={form.username}
              onChange={changeHandler}
              className="placeholder:text-xs border border-gray-200 focus:outline focus:outline-black outline-none py-2 px-4 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-light text-[12px]">Display Name</label>
            <input
              name="displayName"
              type="text"
              value={form.displayName}
              onChange={changeHandler}
              className="placeholder:text-xs border border-gray-200 focus:outline focus:outline-black outline-none py-2 px-4 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-light text-[12px]">Phone Number</label>
            <input
              name="phoneNumber"
              type="text"
              value={form.phoneNumber}
              onChange={changeHandler}
              className="placeholder:text-xs border border-gray-200 focus:outline focus:outline-black outline-none py-2 px-4 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-light text-[12px]">Address</label>
            <textarea
              name="address"
              rows={5}
              value={form.address}
              onChange={changeHandler}
              className="placeholder:text-xs border border-gray-200 focus:outline focus:outline-black outline-none py-2 px-4 rounded-lg"
            />
          </div>
        </div>
        {error && (
          <div className="bg-orange-100 rounded-md py-2 px-4 border-l-4 border-orange-500 mb-4 flex justify-between">
            <p className="text-orange-500 font-medium text-[14px] ">{error}</p>
            <button
              type="button"
              className="text-red-500 text-[14px]"
              onClick={() => setError("")}
            >
              {icons.close}
            </button>
          </div>
        )}
        <button
          type="submit"
          className={`${
            loading ? "bg-gray-100" : "bg-black text-white"
          } text-[12px] rounded-lg h-[35px] w-[100px] flex justify-center items-center`}
        >
          {loading ? <Loader h={20} w={20} /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default PersonalInformation;
