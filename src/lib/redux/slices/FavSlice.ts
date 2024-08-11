import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface IFavInit {
  favList: IFav[];
}
const FavSlice = createSlice({
  name: "fav",
  initialState: <IFavInit>{
    favList: localStorage.getItem("favList")
      ? JSON.parse(localStorage.getItem("favList") || "[]")
      : [],
  },
  reducers: {
    addToFav: (state, action: PayloadAction<IFav>) => {
      const newFav: IFav = action.payload;
      const isExisting: boolean = state.favList.some(
        (item) => item.id === newFav.id
      );
      if (!isExisting) {
        const newFavList: IFav[] = [...state.favList, newFav];
        state.favList = newFavList;
        localStorage.setItem("favList", JSON.stringify(newFavList));
        toast.success(`Added ${newFav.title} to favourites.`);
      }
    },
    removeFav: (state, action: PayloadAction<number>) => {
      const favTarget: number = action.payload;
      const isExisting: boolean = state.favList.some(
        (item) => item.id === favTarget
      );
      if (isExisting) {
        const newFavList: IFav[] = state.favList.filter(
          (item) => item.id !== favTarget
        );
        state.favList = newFavList;
        localStorage.setItem("favList", JSON.stringify(newFavList));
        toast.success(`favourites updated successfuly.`);
      }
    },
  },
});
export default FavSlice.reducer;
export const { addToFav, removeFav } = FavSlice.actions;
