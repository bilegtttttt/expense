import React from "react";

function RecSelect() {
  return (
    <div className="flex w-[894px] h-[48px] justify-between px-4 py-4 border-2 rounded-2xl items-center">
      <div className="flex gap-2">
        <input type="checkbox" defaultChecked className="checkbox" />
        <div className="text-[#000000] text-[16px]">Select All</div>
      </div>
      <div className="text-[#94A3B8] text-[16px]">-35,500₮</div>
    </div>
  );
}

export default RecSelect;
