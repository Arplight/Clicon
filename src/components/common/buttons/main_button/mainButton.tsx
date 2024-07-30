import { FC, ReactNode } from "react";
import Link from "next/link";

interface IMainButton {
  buttonLabel: string;
  buttonRole?: "submit" | "reset" | "button";
  isHollow: boolean;
  isLarge: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  withLink?: string;
  buttonIcon?: ReactNode;
  withStyle?: string;
  onClick?: () => void;
}

const MainButton: FC<IMainButton> = ({
  buttonLabel,
  buttonRole = "button",
  isHollow,
  isLarge,
  isLoading = false,
  isDisabled = false,
  withLink,
  buttonIcon,
  withStyle = "",
  onClick,
}) => {
  const buttonStyle: string = `font-bold rounded-[3px] py-1.5 px-2.5 large-paragraph uppercase duration-300 hover:opacity-70  ${
    isLarge ? "grow" : ""
  } ${
    isHollow
      ? "border-2 border-[#fa8232] text-[#fa8232]"
      : "bg-[#fa8232] text-[#ffffff]"
  } ${
    buttonIcon ? "flex gap-0.5 items-center justify-center" : ""
  } ${withStyle} ${isDisabled ? "button-disabled" : ""}`;

  if (withLink) {
    return (
      <Link href={withLink} className={buttonStyle} aria-label={buttonLabel}>
        {buttonLabel} {buttonIcon}
      </Link>
    );
  }

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
