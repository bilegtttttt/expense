import React from "react";
import Image from "next/image";
function AddCategory({ showSecondModalHandler }) {
  return (
    <div className="flex mt-3 gap-3" onClick={showSecondModalHandler}>
      <div className="mt-1">
        <img src="plus.png" alt="" />
      </div>
      <div className="text-[16px] text-[#1F2937]">Add Category</div>
    </div>
  );
}

export default AddCategory;
