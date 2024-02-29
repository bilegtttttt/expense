import React from "react";

function Currencies() {
  return (
    <div>
      <div className="mb-8 gap-5">
        <div className="flex flex-col justify-center items-center gap-[16px]">
          <img className="w-[48px] h-[48px]" src="Frame.png" alt="" />
          <div className="text-[24px] text-[#0F172A]">Select base currency</div>
        </div>
        <div className="flex flex-col gap-4 ml-[40px]">
          <select className="select bg-[#D1D5DB] text-[#1F2937] w-full max-w-xs">
            <option disabled selected>
              MNT - Mongolian Tugrik
            </option>
            <option>USD - Dollar</option>
          </select>
          <div className="w-[334px] h-[32px] text-[12px] text-[#475569]">
            Your base currency should be the one you use most often. All
            transaction in other currencies will be calculated based on this one
          </div>
        </div>
      </div>
    </div>
  );
}

export default Currencies;
