import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/AuthSlice";

const Store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
});

export default Store;
export type RootState = ReturnType<typeof Store.getState>;
