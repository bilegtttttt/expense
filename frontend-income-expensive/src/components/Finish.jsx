import React from "react";
import { Geld } from "./Geld";
export const Finish = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex flex-col justify-center items-center gap-3">
        <div>
          <img src="Frame11.png" alt="" />
        </div>
        <div>Good Job!</div>
      </div>
      <div className="flex items-center justify-center w-[354px] h-4 text-[#475569]">
        Your very first account has been created. Now continue to dashboard and
        start tracking.
      </div>
    </div>
  );
};
