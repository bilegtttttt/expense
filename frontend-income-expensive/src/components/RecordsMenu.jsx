import React, { useState } from "react";
import { useContext } from "react";
import { AddCatiContext } from "./Provider/AddCatiProvider";
import Modal from "./Modal";
import IconCategoryAdd from "./IconCategoryAdd";

function RecordsMenu() {
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);

  const handleFirstModal = () => {
    setShowFirstModal(!showFirstModal);
  };
  const handleSecondModal = () => {
    if (showFirstModal) setShowFirstModal(false);
    setShowSecondModal(!showSecondModal);
  };

  return (
    <>
      <div className="flex flex-col gap-6 mb-3">
        <div>Records</div>
        <button
          onClick={handleFirstModal}
          // onClick={() => {
          //   if (setAddIcon(true)) {
          //     handleClose();
          //   }
          // }}
          className="w-[250px] h-8 rounded-[20px] gap-1 bg-[#0166FF] text-center text-white"
        >
          + Add
        </button>
        {showFirstModal && <Modal handleSecondModal={handleSecondModal} />}
        {showSecondModal && (
          <IconCategoryAdd handleSecondModal={handleSecondModal} />
        )}
      </div>
    </>
  );
}

export default RecordsMenu;
