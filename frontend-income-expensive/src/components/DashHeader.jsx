import Link from "next/link";
import React from "react";
import { useContext } from "react";
import { AddCatiContext } from "./Provider/AddCatiProvider";

function DashHeader() {
  const { addCati, setAddCati } = useContext(AddCatiContext);
  const handleClick = () => {
    setAddCati(!addCati);
  };
  return (
    <div className=" h-[72px] justify-between py-[16px] w-[1100px] z-2 relative">
      <div className="flex justify-between bg-[#FFFFFF] z-1">
        <div className="flex gap-6">
          <div>
            <img src="Vector.png" alt="" />
          </div>
          <Link href={"/dashboard"} className="text-[16px] text-[#0F172A]">
            Dashboard
          </Link>
          <Link href={"/records"} className="text-[16px] text-[#808080]">
            Records
          </Link>
        </div>
        <div className="flex gap-6 items-center">
          <button
            onClick={handleClick}
            className="bg-[#0166FF] text-white rounded-[20px] w-[99px] h-[32px] text-center"
          >
            + Record
          </button>
          <div>
            <img src="Pro.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashHeader;
