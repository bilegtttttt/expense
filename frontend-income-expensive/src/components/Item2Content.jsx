import Link from "next/link";
import React from "react";
import { useState } from "react";
import { BiSolidHide } from "react-icons/bi";
import axios from "axios";
import { useRouter } from "next/navigation";

export function Item2Content() {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [rePassword, SetRePassword] = useState("");

  const router = useRouter();

  const handleClick = async () => {
    if (password !== rePassword) return alert("Aldaatai password baina.");

    const res = await axios.post("http://localhost:8000/create", {
      username: name,
      email: email,
      password: password,
    });
    console.log(res.data);

    router.push("/stepper");
  };

  return (
    <div className="mt-10 mb-10">
      <div className="flex flex-col gap-5">
        <div>
          <input
            onChange={(event) => SetName(event.target.value)}
            type="text"
            placeholder="Name"
            className="w-[384px] h-[48px] border-slate-900 rounded-xl bg-[#D1D5DB] p-[16px] text-black"
          />
        </div>

        <div>
          <input
            onChange={(event) => SetEmail(event.target.value)}
            type="text"
            placeholder="Email"
            className="w-[384px] h-[48px] border-slate-900 rounded-xl bg-[#D1D5DB] p-[16px] text-black"
          />
        </div>
        <div>
          <input
            onChange={(event) => SetPassword(event.target.value)}
            type="Password"
            placeholder="Password"
            className="w-[384px] h-[48px] border-slate-900 rounded-xl bg-[#D1D5DB] p-[16px] text-black"
          />
        </div>
        <div>
          <input
            onChange={(event) => SetRePassword(event.target.value)}
            type="Password"
            placeholder="Re-assword"
            className="w-[384px] h-[48px] border-slate-900 rounded-xl bg-[#D1D5DB] p-[16px] text-black"
          />
        </div>
        <button
          onClick={handleClick}
          className="w-[384px] h-[48px] rounded-xl flex justify-center items-center bg-[#0166FF] text-white"
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
