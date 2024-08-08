"use client";

import { Provider } from "react-redux";
import Store from "../lib/redux/store";
import { ReactNode } from "react";

const StorePovider = ({ children }: { children: ReactNode }) => {
  return <Provider store={Store}>{children}</Provider>;
};

export default StorePovider;
