import { FC, ReactNode } from "react";

interface IMainSection {
  children: ReactNode;
  withStyle?: string;
}

const MainSection: FC<IMainSection> = ({ children, withStyle }) => {
  return <section className={`my-4 ${withStyle}`}>{children}</section>;
};

export default MainSection;
