import { FC, ReactNode } from "react";

interface IMainButton {
  buttonLabel: string;
  buttonRole: "submit" | "reset" | "button";
  isHollow: boolean;
  isLarge: boolean;
  isLoading: boolean;
  isDisabled: boolean;
  buttonIcon?: ReactNode;
  onClick?: () => void;
}
const MainButton: FC<IMainButton> = ({
  buttonLabel,
  buttonRole,
  isHollow,
  isLarge,
  isLoading,
  isDisabled,
  buttonIcon,
  onClick,
}) => {
  const buttonStyle: string = `font-bold rounded-[3px] py-1.5 px-2.5 large-paragraph uppercase ${
    isLarge && "grow"
  } ${
    isHollow
      ? "border border-[#fa8232] text-[#fa8232]"
      : "bg-[#fa8232] text-[#ffffff]"
  } ${buttonIcon && "flex gap-0.5 items-center"}`;

  return (
    <button
      className={buttonStyle}
      disabled={isLoading || isDisabled}
      onClick={onClick}
      type={buttonRole}
      aria-disabled={isLoading || isDisabled}
      aria-label={buttonLabel}
    >
      {buttonLabel} {buttonIcon}
    </button>
  );
};

export default MainButton;
