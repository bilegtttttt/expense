import React, { useContext, useState } from "react";

import ModalCategory from "./ModalCategory";
import ModalAmount from "./ModalAmount";
import ModalDate from "./ModalDate";
import ModalPayee from "./ModalPayee";
import ModalNote from "./ModalNote";
import { MdCancel } from "react-icons/md";
import { AddCatiContext } from "./Provider/AddCatiProvider";
import ModalAddCategory from "./ModalAddCategory";
import IconCategoryAdd from "./IconCategoryAdd";

function Modal({ handleSecondModal }) {
  const { addCati, setAddCati } = useContext(AddCatiContext);
  const handleClose = () => {
    setAddCati(!addCati);
  };
  const [color, setColor] = useState();
  return (
    <div>
      <div
        onClick={handleClose}
        className="fixed bg-[#00000080] top-[50%] left-[50%] z-0 translate-x-[-50%] translate-y-[-50%] w-screen h-screen"
      ></div>
      <div className="absolute bg-white z-50 w-100% h-100% top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex flex-col gap-3 ">
          <div className="flex w-[795px] h-[68px] justify-between border-b bg-[#E2E8F0] p-5 rounded-xl">
            <div className="text-[20px] text-[#0F172A]">Add Record</div>
            <div>
              <MdCancel onClick={handleClose} className="w-[30px] h-[30px]" />
            </div>
          </div>
          <div className="flex w-[792px] h-[444px] justify-between p-6 ">
            <div className="flex flex-col rounded-xl bg-[#FFFFFF] gap-2">
              <div className="flex w-[348px] h-[40px] gap-1 rounded-[100px] border-2 bg-[#D1D5DB]">
                <button
                  onClick={() => {
                    setColor(true);
                  }}
                  className={`w-1/2 py-2 rounded-[25px] ${
                    color ? "text-white bg-[#0166FF]" : "text-black bg-[]"
                  }`}
                >
                  Expense
                </button>
                <button
                  onClick={() => {
                    setColor(false);
                  }}
                  className={`w-1/2 py-2 rounded-[25px] ${
                    color ? "text- bg-[]" : "text-white bg-[#16A34A]"
                  }`}
                >
                  Income
                </button>
              </div>
              <ModalAmount />
              <ModalCategory handleSecondModal={handleSecondModal} />
              <ModalDate />

              <button
                className={`w-[348px] py-2 rounded-[25px] ${
                  color ? "text-white bg-[#0166FF]" : "text-white bg-[#16A34A]"
                }`}
              >
                Add Record
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <ModalPayee />
              <ModalNote />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
