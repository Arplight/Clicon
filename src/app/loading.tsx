"use client";
import { PulseLoader } from "react-spinners";

const Loading = () => {
  return (
    <main className="container m-auto bg-[#ffffff] shadow-lg my-6 rounded-[3px] p-2 xl:p-3 min-h-[90vh] flex">
      <PulseLoader cssOverride={{ margin: "auto" }} color="#1b6392" size={20} />
    </main>
  );
};

export default Loading;
