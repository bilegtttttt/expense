import React from "react";
import { ImSpoonKnife } from "react-icons/im";

export const Yesterday = (props) => {
  const { bgCol, icon, textCol } = props;
  return (
    <div className="flex justify-between items-center w-[894px] h-[64px] border-2 rounded-lg p-7">
      <div className="flex gap-5">
        <div className="mt-2">
          <input type="checkbox" defaultChecked className="checkbox" />
        </div>
        <div
          className={`w-[30px] h-[30px] rounded-full flex items-center justify-center ${bgCol}`}
        >
          {icon}
        </div>
        <div className="flex flex-col">
          <div className="text-[16px] text-[#000000]">Lending & Renting</div>
          <div className="text-[#6B7280] text-[12px]">14:00</div>
        </div>
      </div>
      <div className={`${textCol}`}>-1,000₮</div>
    </div>
  );
};

function RecYesterday() {
  const data = [
    { icon: <ImSpoonKnife />, bgCol: "bg-red-600", textCol: "text-red-700" },
    { icon: <ImSpoonKnife />, bgCol: "bg-red-600" },
    { icon: <ImSpoonKnife />, bgCol: "bg-red-600" },
    { icon: <ImSpoonKnife />, bgCol: "bg-red-600" },
    { icon: <ImSpoonKnife />, bgCol: "bg-red-600" },
  ];
  return (
    <div>
      <div className="w-[894px] h-[404px] gap-3">
        <div className="p-3 text-[20px]">Yesterday</div>
        <div className="flex flex-col gap-[10px]">
          {data.map((el, id) => (
            <div key={id}>
              <Yesterday bgCol={el.bgCol} icon={el.icon} textCol={el.textCol} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecYesterday;
