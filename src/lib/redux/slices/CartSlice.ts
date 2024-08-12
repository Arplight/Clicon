import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface ICartInit {
  items: ICart[];
  totalQuantity: number;
  totalPrice: number;
}

// Utilities
const saveToLocalStorage = (state: ICartInit) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cartList", JSON.stringify(state.items));
    localStorage.setItem("cartQuantity", JSON.stringify(state.totalQuantity));
    localStorage.setItem("cartPrice", JSON.stringify(state.totalPrice));
  }
};

const cartUpdater = (state: ICartInit) => {
  state.totalQuantity = state.items.reduce((t, i) => t + i.quantity, 0);
  state.totalPrice = state.items.reduce((t, i) => t + i.subtotal, 0);
};

const getInitialState = (): ICartInit => {
  if (typeof window !== "undefined") {
    const items = localStorage.getItem("cartList");
    const quantity = localStorage.getItem("cartQuantity");
    const price = localStorage.getItem("cartPrice");

    return {
      items: items ? JSON.parse(items) : [],
      totalQuantity: quantity ? JSON.parse(quantity) : 0,
      totalPrice: price ? JSON.parse(price) : 0,
    };
  }

  // Return default values for server-side rendering
  return {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  };
};

const CartSlice = createSlice({
  name: "cart",
  initialState: getInitialState(),
  reducers: {
    addToCart: (state, action: PayloadAction<ICart>) => {
      const newItem: ICart = action.payload;
      const isExisting: boolean = state.items.some((i) => i.id === newItem.id);
      if (!isExisting) {
        state.items = [...state.items, newItem];
        cartUpdater(state);
        saveToLocalStorage(state);
        toast.success(`Added ${newItem.title} to cart successfully.`);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const targetId: number = action.payload;
      const isExisting: boolean = state.items.some((i) => i.id === targetId);

      if (isExisting) {
        state.items = state.items.filter((i) => i.id !== targetId);
        cartUpdater(state);
        saveToLocalStorage(state);
        toast.success(`Cart updated successfully.`);
      }
    },
    updateCart: (state, action: PayloadAction<ICart>) => {
      const updatedItem: ICart = action.payload;
      const isExisting: boolean = state.items.some(
        (i) => i.id === updatedItem.id
      );
      if (isExisting) {
        state.items = state.items.filter((i) => i.id !== updatedItem.id);
        state.items = [...state.items, updatedItem];
        cartUpdater(state);
        saveToLocalStorage(state);
      }
    },
  },
});

export default CartSlice.reducer;
export const { addToCart, removeFromCart, updateCart } = CartSlice.actions;
