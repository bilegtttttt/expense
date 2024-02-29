import React, { useState } from "react";
import ModalAddCategory from "./ModalAddCategory";

function ModalCategory({ handleSecondModal }) {
  const [addCategoryShow, setAddCategoryShow] = useState(false);
  const handleClose = () => {
    setAddCategoryShow(!addCategoryShow);
  };
  return (
    <div
      className="flex flex-col mt-5 gap-2 absolute z-20 top-[45%]"
      // onClick={handleClose}
    >
      <div className="text-[16px] text-[#1F2937]">Category</div>
      <div
        onClick={() => setAddCategoryShow(true)}
        className="w-[348px] h-[48px] border rounded-lg text-center bg-[#D1D5DB]"
      >
        Find or choose category
        {addCategoryShow && (
          <ModalAddCategory handleSecondModal={handleSecondModal} />
        )}
      </div>
    </div>
  );
}

export default ModalCategory;
