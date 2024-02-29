import React from "react";

function ModalDate() {
  return (
    <div className="flex gap-3 mb-4 mt-[100px]">
      <div className="flex flex-col gap-2">
        <div>Date</div>
        <input
          type="date"
          className="w-[168px] h-[48px] bg-[#D1D5DB] rounded-lg p-5"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div>Time</div>
        <input
          type="time"
          className="w-[168px] h-[48px] bg-[#D1D5DB] rounded-lg p-5"
        />
      </div>
    </div>
  );
}

export default ModalDate;
