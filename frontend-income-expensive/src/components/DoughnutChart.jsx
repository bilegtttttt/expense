import React, { useEffect, useState, useRef } from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { ChartResult } from "./ChartResult";

const DoughnutChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [50, 90, 60, 100, 30],
            backgroundColor: [
              "rgba(231, 70, 148, 1)",
              "rgba(28, 100, 242, 1)",
              "rgba(253, 186, 140, 1)",
              "rgba(22, 189, 202, 1)",
              "rgba(242, 144, 28, 1)",
            ],

            hoverOffset: 4,
          },
        ],
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-[588px] flex flex-col items-center justify-center bg-slate-300 rounded-xl">
      <div className="flex flex-col">
        <div className="flex justify-between px-5 w-[588px] h-[38px]">
          <div className="text-[20px] text-[#0F172A]">Income - Expense</div>
          <div className="text-[16px] text-[#6B7280]">Jun 1 - Nov 30</div>
        </div>
        <div className="flex w-[588px]">
          <hr className="flex w-full bg-white" />
        </div>
      </div>

      <div className="flex w-[540px h-[228px] gap-[47px]">
        <div className="w-[228px] h-[228px]">
          <canvas ref={chartRef} />
        </div>
        <div className="flex flex-col gap-5 pt-4">
          <ChartResult
            desc="Bills"
            amount="5,000,000₮"
            percent="15.50%"
            color="#1C64F2"
          />

          <ChartResult
            desc="Food"
            amount="5,000,000₮"
            percent="15.50%"
            color="#E74694"
          />

          <ChartResult
            desc="Shoppping"
            amount="5,000,000₮"
            percent="15.50%"
            color="#FDBA8C"
          />

          <ChartResult
            desc="Insurance"
            amount="5,000,000₮"
            percent="15.50%"
            color="#16BDCA"
          />

          <ChartResult
            desc="Clothing"
            amount="5,000,000₮"
            percent="15.50%"
            color="#F2901C"
          />
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
