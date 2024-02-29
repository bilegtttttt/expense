import React from "react";
import { LiaEyeSolid } from "react-icons/lia";
import { MdOutlineArrowRight } from "react-icons/md";

function RecCategory() {
  const random = [
    "Food & Drinks",
    "Shopping",
    "Housing",
    "Transportation",
    "Vehicle",
    "Life & Entertainment",
    "Communication,PC",
    "Financial expenses",
    "Investments",
    "Income",
    "Others",
  ];
  return (
    <div>
      <div className="flex w-[250px] h-8 justify-between mt-7 mb-5">
        <div className="text-[#1F2937] text-[20px]">Category</div>
        <div className="text-[#1F2937] text-[20px]">Clear</div>
      </div>
      <div className="flex flex-col gap-5">
        {random.map((el, index) => {
          return (
            <div key={index} className="flex justify-between w-[250px]">
              <div className="flex items-center gap-2">
                <LiaEyeSolid className="text-[#94A3B8]" />
                <p className="text-[#1F2937] text-[16px]">{el}</p>
              </div>
              <MdOutlineArrowRight className="text-[#1C1B1F]" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecCategory;
