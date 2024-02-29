import React from "react";

function ModalPayee() {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-[16px] text-[#1F2937]">Payee</div>
      <div>
        <select className="select select-bordered w-[348px] text-[#1F2937] bg-[#D1D5DB]">
          <option disabled selected>
            Choose
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>
    </div>
  );
}

export default ModalPayee;
