import React from "react";
import { Item1Content } from "./Item1Content.jsx";
import Link from "next/link.js";
import { Geld } from "@/components/Geld.jsx";
export function MainItems1() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Geld />
      <div className="flex flex-col">
        <div className="flex justify-center items-center">
          <div className="text-[#0F172A] text-2xl mb-3">Welcome Back</div>
        </div>
        <div className="text-[#334155]">
          Welcome back, Please enter your details
        </div>
      </div>
      <div>
        <Item1Content />
      </div>
      <div className="flex gap-4">
        <div className="text-[#0F172A]">Don't have an account?</div>

        <Link href="/Sign">
          <div className="text-[#0166FF]">Sign up</div>
        </Link>
      </div>
    </div>
  );
}
