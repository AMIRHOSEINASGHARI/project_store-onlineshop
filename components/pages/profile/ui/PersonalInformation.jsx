"use client";

import moment from "moment";
import { useState } from "react";

const PersonalInformation = (props) => {
  const {
    _id,
    username,
    displayName,
    avatar,
    phoneNumber,
    address,
    createdAt,
  } = props;

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

  const submitForm = (e) => {
    e.preventDefault();

    // TODO: submit form
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
        <button
          type="submit"
          className="bg-black text-white text-[12px] rounded-lg w-fit py-2 px-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PersonalInformation;
