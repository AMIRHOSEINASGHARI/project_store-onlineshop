"use client";

import { useState } from "react";

const PayButton = (props) => {
  const [loading, setLoading] = useState(false);

  return (
    <button className="w-full bg-green-500 text-white py-3 rounded-xl flex justify-center items-center">
      Pay Off
    </button>
  );
};

export default PayButton;
