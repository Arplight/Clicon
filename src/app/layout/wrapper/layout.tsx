import { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {

  return (
    <main
      className={`container m-auto bg-[#ffffff] shadow-lg my-6 rounded-[3px] p-2 xl:p-3 min-h-[90vh]`}
    >
      {children}
    </main>
  );
};

export default Wrapper;
