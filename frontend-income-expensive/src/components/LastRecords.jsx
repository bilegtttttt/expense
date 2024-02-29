import React from "react";
import { MdHome } from "react-icons/md";

function LastRecords() {
  return (
    <div className="flex justify-center bg-[#E5E7EB]">
      <div className="flex flex-col items-center bg-white w-[1200px] h-[456px] rounded-[12px]">
        <div className="w-[1200px] h-[56px] rounded-lg text-[20px] text-[#0F172A] p-5 border-b">
          Last Records
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <div className="flex w-[1152px] h-[70px] px-[20px] justify-between border-b">
            <div className="flex gap-4">
              <div className="flex w-[40px] h-[40px] bg-[#0166FF] text-white rounded-[50%] text-center justify-center items-center">
                <MdHome />
              </div>
              <div className="flex flex-col">
                <div className="text-[#000000] text-[16px]">
                  Lending & Renting
                </div>
                <div className="text-[#6B7280] text-[12px]">3 hours ago</div>
              </div>
            </div>
            <div className="text-[#84CC16] text-[16px]">-1,000₮</div>
          </div>

          <div className="flex w-[1152px] h-[70px] px-[20px] justify-between border-b">
            <div className="flex gap-4">
              <div className="flex w-[40px] h-[40px] bg-[#0166FF] text-white rounded-[50%] text-center justify-center items-center">
                <MdHome />
              </div>
              <div className="flex flex-col">
                <div className="text-[#000000] text-[16px]">
                  Lending & Renting
                </div>
                <div className="text-[#6B7280] text-[12px]">3 hours ago</div>
              </div>
            </div>
            <div className="text-[#84CC16] text-[16px]">-1,000₮</div>
          </div>
          <div className="flex w-[1152px] h-[70px] px-[20px] justify-between border-b">
            <div className="flex gap-4">
              <div className="flex w-[40px] h-[40px] bg-[#0166FF] text-white rounded-[50%] text-center justify-center items-center">
                <MdHome />
              </div>
              <div className="flex flex-col">
                <div className="text-[#000000] text-[16px]">
                  Lending & Renting
                </div>
                <div className="text-[#6B7280] text-[12px]">3 hours ago</div>
              </div>
            </div>
            <div className="text-[#84CC16] text-[16px]">-1,000₮</div>
          </div>
          <div className="flex w-[1152px] h-[70px] px-[20px] justify-between border-b">
            <div className="flex gap-4">
              <div className="flex w-[40px] h-[40px] bg-[#0166FF] text-white rounded-[50%] text-center justify-center items-center">
                <MdHome />
              </div>
              <div className="flex flex-col">
                <div className="text-[#000000] text-[16px]">
                  Lending & Renting
                </div>
                <div className="text-[#6B7280] text-[12px]">3 hours ago</div>
              </div>
            </div>
            <div className="text-[#84CC16] text-[16px]">-1,000₮</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastRecords;
