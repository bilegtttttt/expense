import React from "react";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";

export default function Chart() {
  return (
    <div className="w-[1200px] h-[284px] flex justify-between mt-5 gap-[20px]">
      <BarChart />
      <DoughnutChart />
    </div>
  );
}
