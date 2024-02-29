import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function RecDays() {
  return (
    <div className="flex w-[894px] justify-between">
      <div className="flex mt-3 ">
        <div>
          <img src="leftbutton.png" alt="" />
        </div>
        <div className="text-[#000000] text-[16px]">Last 30 Days</div>
        <div>
          <img src="rightbutton.png" alt="" />
        </div>
      </div>
      <div>
        <select className="select w-full max-w-xs border">
          <option disabled selected>
            Newest First
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </div>
    </div>
  );
}

export default RecDays;
