import { ReactNode } from "react";

const AuthWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <main
      className={`container m-auto my-6 p-2 xl:p-3 min-h-[80vh] flex items-center justify-center`}
    >
      {children}
    </main>
  );
};

export default AuthWrapper;
