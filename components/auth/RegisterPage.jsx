"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { icons, images } from "@/constants";
import Loader from "../shared/Loader";

const RegisterPage = () => {
  const [loader, setLoader] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-white max-sm:p-6"
    >
      <div className="max-xl:hidden w-full">
        <Image
          src={images.authRegister}
          width={1950}
          height={1300}
          alt="auth-register"
          priority
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="flex items-center justify-center xl:w-[70%] max-xl:w-full max-xl:h-screen">
        <div className="sm:w-[400px] max-xl:w-full">
          <div className="mb-[30px]">
            <Image
              src={images.logo}
              width={40}
              height={40}
              alt="logo"
              priority
            />
          </div>
          <h1 className="font-medium text-gray-600 text-[30px] mb-[5px]">
            Adventure starts here 🚀
          </h1>
          <p className="text-gray-500 text-[13px] tracking-tight mb-[25px]">
            Welcome to OnlineShop! You must have an account to finalize your
            purchases
          </p>
          <div className="space-y-5">
            <div className="flex flex-col gap-1">
              <label className="font-normal text-sm">Username</label>
              <input
                name="username"
                type="text"
                value={form.username}
                onChange={changeHandler}
                placeholder="Username"
                className="placeholder:text-xs border border-gray-200 focus:outline focus:outline-black outline-none py-2 px-4 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-normal text-sm">Password</label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={changeHandler}
                placeholder="Password"
                className="placeholder:text-xs border border-gray-200 focus:outline focus:outline-black outline-none py-2 px-4 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-normal text-sm">Confirm Password</label>
              <input
                name="password"
                type="password"
                value={form.confirmPassword}
                onChange={changeHandler}
                placeholder="Password"
                className="placeholder:text-xs border border-gray-200 focus:outline focus:outline-black outline-none py-2 px-4 rounded-lg"
              />
            </div>
            <button
              type="submit"
              disabled={loader && true}
              className={`${
                loader ? "bg-gray-100" : "bg-black"
              } text-white rounded-lg w-full py-3 font-bold flex justify-center`}
            >
              {loader ? <Loader h={25} w={25} /> : "Submit"}
            </button>
            <div className="flex items-center justify-center gap-4 text-sm font-bold">
              <p>Already have account?</p>
              <Link
                href="/login"
                className="bg-gray-100 border text-center py-1 px-4 rounded-lg"
              >
                Login
              </Link>
            </div>
            <hr />
            <div className="flex justify-center">
              <Link
                href="/"
                className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition1 rounded-xl py-1 px-4 border text-center w-fit"
              >
                <div>{icons.home}</div>
                <p className="text-[13px] font-light">Home Page</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegisterPage;
