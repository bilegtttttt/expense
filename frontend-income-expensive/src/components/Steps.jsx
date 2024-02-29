import React from "react";

function Steps() {
  return (
    <div>
      <div className="flex flex-col gap-3 mt-5">
        <ul className="steps w-[400px]">
          <li className="step step-info text-[#0F172A]">Currency</li>
          <li className="step step-primary text-[#0F172A]">Balance</li>
          <li className="step text-[#0F172A]">Finish</li>
        </ul>
      </div>
    </div>
  );
}

export default Steps;
