import React from "react";
import DashHeader from "@/components/DashHeader";
import RecordsMenu from "@/components/RecordsMenu";
import RecSearch from "@/components/RecSearch";
import RecTypes from "@/components/RecTypes";
import RecCategory from "@/components/RecCategory";
import AddCategory from "@/components/AddCategory";
import RecAmountRange from "@/components/RecAmountRange";
import RecDays from "@/components/RecDays";
import RecSelect from "@/components/RecSelect";
import RecToday from "@/components/RecToday";
import RecYesterday from "@/components/RecYesterday";
import Modal from "@/components/Modal";

function index() {
  return (
    <div className="flex flex-col bg-white items-center w-[2000px] relative">
      {/* <div className="w-screen h-screen bg-black opacity-5 absolute" z-2 ></div> */}
      <div className="flex  justify-center flex-col">
        <DashHeader />
        <div className="flex w-[1200px] items-center ">
          <div className=" flex flex-col">
            <RecordsMenu />
            <RecSearch />
            <RecTypes />
            <RecCategory />
            <AddCategory />
            <RecAmountRange />
          </div>
          <div className="p-8">
            <RecDays />
            <RecSelect />
            <RecToday />
            <RecYesterday />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
