import React from "react";
import { useState } from "react";
import { BiSolidHide } from "react-icons/bi";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export function Item1Content() {
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleClick = async () => {
    try {
      const res = await axios.post("http://localhost:8000/login", {
        password: password,
        email: inputValue,
      });

      router.push("/dashboard");
      console.log(res);

      localStorage.setItem("token", res.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-10 mb-10">
      <div className="flex flex-col gap-5">
        <div>
          <input
            onChange={(event) => setInputValue(event.target.value)}
            type="text"
            placeholder="Email"
            className="w-[384px] h-[48px] border-slate-900 rounded-xl bg-[#D1D5DB] p-[16px] text-black"
          />
        </div>
        <div className="relative">
          <input
            onChange={(event) => setPassword(event.target.value)}
            type="Password"
            placeholder="Password"
            className="w-[384px] h-[48px] border-slate-900 rounded-xl bg-[#D1D5DB] p-[16px] text-black"
          />
        </div>
        <button
          onClick={handleClick}
          className="w-[384px] h-[48px] rounded-xl flex justify-center items-center bg-[#0166FF] text-white"
        >
          Login
        </button>
      </div>
    </div>
  );
}
