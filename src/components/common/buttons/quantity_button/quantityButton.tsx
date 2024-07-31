"use client";
import { useState } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";

const QuantityButton = () => {
  const [currentQuantity, setCurrentQuantity] = useState<number>(1);
  return (
    <div className="flex gap-3 rounded-[3px] large-paragraph py-1.5 px-2.5 border-2 border-[#E4E7E9] w-min">
      <button>
        <LuMinus />
      </button>
      <span className="font-gray-700">{currentQuantity}</span>
      <button>
        <LuPlus />
      </button>
    </div>
  );
};

export default QuantityButton;
