import React from "react";

function RecTypes() {
  return (
    <div className="flex flex-col gap-5 mt-5">
      <div className="text-[#1F2937] text-[16px]">Types</div>

      <div className="flex flex-col gap-3">
        <div className="flex gap-1">
          <div>
            <input type="radio" />
          </div>
          <div className="text-[#1F2937]">All</div>
        </div>
        <div className="flex gap-1">
          <div>
            <input type="radio" />
          </div>
          <div className="text-[#1F2937]">Income</div>
        </div>
        <div className="flex gap-1">
          <div>
            <input type="radio" />
          </div>
          <div className="text-[#1F2937]">Expense</div>
        </div>
      </div>
    </div>
  );
}

export default RecTypes;
