import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { AiFillHome } from "react-icons/ai";
import { FaGift } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { BiSolidDrink } from "react-icons/bi";
import { FaTaxi } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import IconCategoryAdd from "./IconCategoryAdd";
import { useContext } from "react";
import { AddCatiContext } from "./Provider/AddCatiProvider";

function ModalAddCategory({ handleSecondModal }) {
  const { setAddCati } = useContext(AddCatiContext);
  const [addIcon, setAddIcon] = useState(false);
  const handleClose = () => {
    setAddIcon(!addIcon);
  };

  const handlClick = () => {
    setAddIcon(true);
    setAddCati(true);
  };

  return (
    <div className="flex flex-col bg-white rounded-xl z-50 p-7 ">
      <div className="flex flex-col">
        <div className="flex gap-3 border-b p-5">
          {addIcon && <IconCategoryAdd />}

          <div className="flex gap-1" onClick={() => setAddIcon(true)}>
            <div onClick={handleSecondModal} className="flex gap-2 relative">
              <div className="flex justify-center items-center w-[19px] h-[19px] bg-[#0166FF] rounded-[50%] text-white">
                <GoPlus />
              </div>
              <div className="text-[17px]">Add Category</div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 p-4">
          <div>
            <AiFillHome className="w-[24px] h-[24px] text-[#0166FF]" />
          </div>
          <div>Home</div>
        </div>
        <div className="flex gap-3 p-4">
          <div>
            <FaGift className="w-[24px] h-[24px] text-[#FF4545]" />
          </div>
          <div>Gift</div>
        </div>
        <div className="flex gap-3 p-4">
          <div>
            <ImSpoonKnife className="w-[24px] h-[24px] text-[#FB8A22]" />
          </div>
          <div>Food</div>
        </div>
        <div className="flex gap-3 p-4">
          <div>
            <BiSolidDrink className="w-[24px] h-[24px] text-[#A804AB]" />
          </div>
          <div>Drink</div>
        </div>
        <div className="flex gap-3 p-4">
          <div>
            <FaTaxi className="w-[24px] h-[24px] text-[#EAB308]" />
          </div>
          <div>Taxi</div>
        </div>
        <div className="flex gap-3 p-4">
          <div>
            <FaShoppingCart className="w-[24px] h-[24px] text-[#6F6CF3]" />
          </div>
          <div>Shopping</div>
        </div>
      </div>
    </div>
  );
}

export default ModalAddCategory;
