import React from "react";
import DashHeader from "@/components/DashHeader";
import Card from "@/components/Card";
import LastRecords from "@/components/LastRecords";
import Chart from "@/components/Chart";

function index() {
  return (
    <div className="flex flex-col justify-center items-center w-screen bg-white">
      <DashHeader />
      <Card />
      <Chart />
      <LastRecords />
    </div>
  );
}

export default index;
