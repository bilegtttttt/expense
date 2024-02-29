import React from "react";
import { Item2Content } from "./Item2Content.jsx";
import Link from "next/link.js";
import { Geld } from "@/components/Geld.jsx";

export function MainItems2() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Geld />
      <div className="flex flex-col">
        <div className="flex justify-center items-center">
          <div className="text-[#0F172A] text-2xl mb-3">
            Create Geld account
          </div>
        </div>

        <div className="text-[#334155]">
          Sign up below to create your wallet account
        </div>
      </div>
      <div>
        <Item2Content />
      </div>
      <div className="flex gap-4">
        <div className="text-[#0F172A]">Already have an account?</div>
        <Link href="/" className="text-[#0166FF]">
          Login
        </Link>
      </div>
    </div>
  );
}
