import React from "react";
import { MdCancel } from "react-icons/md";

function AddRecord() {
  return (
    <div className="flex w-[792px] h-[68px] justify-between p-5 border-b">
      <div className="text-[#0F172A] text-[20px]">Add Record</div>
      <div>
        <MdCancel className="w-[25px] h-[25px]" />
      </div>
    </div>
  );
}

export default AddRecord;
