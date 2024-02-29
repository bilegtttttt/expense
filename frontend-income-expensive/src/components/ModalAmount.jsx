import React from "react";

function ModalAmount() {
  return (
    <div className="flex flex-col w-[348px] h-[76px] rounded-lg mt-3 gap-2">
      <p className="w-[57px] h-[24px] text-[16px] text-[#171717]">Amount</p>
      <input
        placeholder="₮ 000.00"
        type="number"
        className="w-[348px] h-[75px] rounded-lg p-2 bg-[#D1D5DB]"
      ></input>
    </div>
  );
}

export default ModalAmount;
