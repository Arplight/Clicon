import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface IFavInit {
  favList: IFav[];
}

// Utility function to safely access localStorage
const getFavListFromLocalStorage = (): IFav[] => {
  if (typeof window !== "undefined") {
    const favList = localStorage.getItem("favList");
    return favList ? JSON.parse(favList) : [];
  }
  return [];
};

// Utility function to save favList to localStorage
const saveFavListToLocalStorage = (favList: IFav[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("favList", JSON.stringify(favList));
  }
};

const FavSlice = createSlice({
  name: "fav",
  initialState: <IFavInit>{
    favList: getFavListFromLocalStorage(),
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
        saveFavListToLocalStorage(newFavList);
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
        saveFavListToLocalStorage(newFavList);
        toast.success(`Favourites updated successfully.`);
      }
    },
  },
});

export default FavSlice.reducer;
export const { addToFav, removeFav } = FavSlice.actions;
