import { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <main>{children}</main>;
};

export default Wrapper;
