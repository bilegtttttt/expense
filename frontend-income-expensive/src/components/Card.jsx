import React from "react";

function Card() {
  return (
    <div className="flex justify-center bg-white gap-6">
      <div>
        <img src="Card.png" alt="" />
      </div>
      <div className="flex bg-slate-300 p-5 flex-col w-[384px] h-[216px] rounded-[12px] gap-2">
        <div className="flex gap-2 border-b-gray-700">
          <div className="w-2 h-2 bg-[#84CC16] rounded-[50%] mt-2"></div>
          <div className="text-[16px] text-[#0F172A]">Your Income</div>
        </div>
        <hr className="flex" />
        <div className="flex flex-col gap-7">
          <div className="text-[#000000] text-[26px]">100000000₮</div>
          <div className="text-gray-500">Your Income Amount</div>
          <div className="flex gap-2">
            <div>
              <img src="Leading icon 1.png" alt="" />
            </div>
            <div className="text-[#000000]">32% from last mounth</div>
          </div>
        </div>
      </div>
      <div className="flex bg-slate-300 p-5 flex-col w-[384px] h-[216px] rounded-[12px] gap-2">
        <div className="flex gap-2 border-b-gray-700">
          <div className="w-2 h-2 bg-[#0166FF] rounded-[50%] mt-2"></div>
          <div className="text-[16px] text-[#0F172A]">Total Expenses</div>
        </div>
        <div className="flex flex-col gap-7">
          <div className="text-[#000000] text-[26px]">-100000000₮</div>
          <div className="text-gray-500">Your Income Amount</div>
          <div className="flex gap-2">
            <div>
              <img src="Vector1.png" alt="" />
            </div>
            <div className="text-[#000000]">32% from last mounth</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
