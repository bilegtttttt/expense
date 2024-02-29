import React from "react";

function RecAmountRange() {
  return (
    <div className="flex flex-col mt-5">
      <div className="text-green-500">Amount Range</div>
      <div className="flex gap-2">
        <input
          type="number"
          placeholder="0"
          className="border rounded-lg p-2"
        />
        <input
          type="number"
          placeholder="0"
          className="border rounded-lg p-2"
        />
      </div>
    </div>
  );
}

export default RecAmountRange;
