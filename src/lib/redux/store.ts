import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/AuthSlice";
import CartSlice from "./slices/CartSlice";
import FavSlice from "./slices/FavSlice";
const Store = configureStore({
  reducer: {
    auth: AuthSlice,
    cart: CartSlice,
    fav: FavSlice,
  },
});

export default Store;
export type RootState = ReturnType<typeof Store.getState>;
