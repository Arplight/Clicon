import { FC } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";

interface IQuantityButtonProps<T> {
  currentQuantity: T;
  setCurrentQuantity: (quantity: T) => void;
}

const QuantityButton: FC<IQuantityButtonProps<number>> = ({
  currentQuantity,
  setCurrentQuantity,
}) => {
  const handleQuantityChange = (actionType: "increase" | "decrease") => {
    if (actionType === "increase") {
      setCurrentQuantity(currentQuantity + 1);
    } else if (actionType === "decrease" && currentQuantity > 1) {
      setCurrentQuantity(currentQuantity - 1);
    }
  };

  return (
    <div className="flex gap-3 rounded-[3px] large-paragraph py-1.5 px-2.5 border-2 border-[#E4E7E9] w-min">
      <button onClick={() => handleQuantityChange("decrease")}>
        <LuMinus />
      </button>
      <span className="font-gray-700">{currentQuantity}</span>
      <button onClick={() => handleQuantityChange("increase")}>
        <LuPlus />
      </button>
    </div>
  );
};

export default QuantityButton;
