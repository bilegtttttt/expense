import React, { useState } from "react";
import { useContext } from "react";
import { AddCatiContext } from "../Provider/AddCatiProvider";
import Modal from "../modal/Modal";
function RecordsMenu() {
  const { addCati, setAddCati } = useContext(AddCatiContext);
  const handleClick = () => {
    setAddCati(!addCati);
  };

  return (
    <>
      <div className="flex flex-col gap-6 mb-3">
        <div>Records</div>
        <button
          onClick={handleClick}
          className="w-[250px] h-8 rounded-[20px] gap-1 bg-[#0166FF] text-center text-white"
        >
          + Add
        </button>
        {!addCati && <Modal />}
      </div>
    </>
  );
}

export default RecordsMenu;
