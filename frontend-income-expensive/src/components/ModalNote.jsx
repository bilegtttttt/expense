import React from "react";

function ModalNote() {
  return (
    <div className="flex flex-col gap-1">
      <div>Note</div>
      <div>
        <textarea
          placeholder="Write here"
          className="w-[348px] h-[280px] bg-[#D1D5DB] items-start rounded-xl p-3"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </div>
  );
}

export default ModalNote;
