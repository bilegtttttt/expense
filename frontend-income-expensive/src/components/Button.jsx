import React from "react";
import { useRouter } from "next/navigation";

function Button(props) {
  const { onClick, text } = props;

  return (
    <div>
      <button
        onClick={onClick}
        className="w-[324px] h-[40px] rounded-3xl flex justify-center items-center bg-[#0166FF]"
      >
        Confirm
      </button>
    </div>
  );
}

export default Button;
