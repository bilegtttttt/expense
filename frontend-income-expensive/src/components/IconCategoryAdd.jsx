import React, { useState } from "react";
import { GiCancel } from "react-icons/gi";
import { MdHome } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { SiHomeassistant } from "react-icons/si";
import RecordsMenu from "./RecordsMenu";

function IconCategoryAdd({ handleSecondModal }) {
  return (
    <div>
      <div className="fixed bg-[#00000080] top-[50%] left-[50%] z-0 translate-x-[-50%] translate-y-[-50%] w-screen h-screen"></div>
      <div className="absolute bg-white z-50 w-100% h-100% top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="w-[494px] h-[236px] rounded-[12px] bg-white ">
          <div className="flex justify-between p-5 border-b">
            <div className="text-[18px]">Add Category</div>
            <div className="w-[15px] h-[15px]" onClick={handleSecondModal}>
              <GiCancel />
            </div>
          </div>
          <div className="flex gap-2 justify-between p-5">
            <div className="border-b-2">
              <select className="select select-ghost w-full max-w-xs placeholder:name">
                <option disabled selected>
                  <MdHome className="w-[24px] h-[24px] bg-black" />
                </option>
                <option>
                  <FaHome className="w-[24px] h-[24px] bg-black" />
                </option>
                <option>
                  <FaTachometerAlt className="w-[24px] h-[24px] bg-black" />
                </option>
                <option>
                  <FcHome className="w-[24px] h-[24px] bg-black" />
                </option>
              </select>
            </div>
            <div>
              <select className="select select-bordered w-[350px]">
                <option disabled selected>
                  Who shot first?
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IconCategoryAdd;
