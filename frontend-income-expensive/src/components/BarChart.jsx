import React from "react";
import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export default function BarChart() {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Income",
        backgroundColor: "#84CC16",
        borderColor: "rgba(255,99,132,1)",
        barThickness: 15,
        borderRadius: 20,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [3000000, 2200000, 2440000, 1040000, 1500000, 1850000, 2800000],
      },
      {
        label: "Expense",
        backgroundColor: "#F97316",
        borderColor: "rgba(255,99,132,1)",
        borderRadius: 20,
        barThickness: 15,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [2300000, 2100000, 2140000, 940000, 1000000, 1150000, 1800000],
      },
    ],
  };

  return (
    <div className="w-[588px] h-full flex items-center justify-center bg-slate-300 rounded-xl">
      <div className="w-full h-full flex flex-col justify-between ">
        <div className="flex w-[588px] items-center text-[20px] text-[#0F172A] border-b-[1px] border-white p-4">
          Income - Expense
        </div>

        <Bar data={chartData} width={100} height={30} />
      </div>
    </div>
  );
}
