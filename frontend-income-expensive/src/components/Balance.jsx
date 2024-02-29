import React from "react";
import { Geld } from "./Geld";
import Steps from "./Steps";

export const Balance = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex flex-col justify-center items-center gap-3">
        <div>
          <img src="Frame10.png" alt="" />
        </div>
        <div>Set up your cash Balance</div>
        <div>
          <input
            type="text"
            placeholder="Amount"
            className="w-[384px] h-[48px] border rounded-lg p-4"
          />
        </div>
      </div>
      <div className="flex items-center justify-center w-[354px] h-4 text-[#475569]">
        How much cash do you have in your wallet?
      </div>
    </div>
  );
};
