import React from "react";
import { MainItems1 } from "./MainItems1.jsx";

export function Login() {
  return (
    <div>
      <div className="flex h-screen">
        <div className="bg-white h-screens flex-1 items-center justify-center flex gap-10">
          <MainItems1 />
        </div>
        <div className="bg-[#0166FF] h-screens flex-1"></div>
      </div>
    </div>
  );
}
