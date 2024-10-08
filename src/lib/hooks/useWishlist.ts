import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/lib/redux/store";
import { addToFav, removeFav } from "../redux/slices/FavSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface IUseFav {
  itemId?: number;
  itemTitle?: string;
  itemDescription?: string;
  itemPrice?: number;
  itemImage?: string;
}
const useWishlist = ({
  itemId = 0,
  itemTitle = "",
  itemDescription = "",
  itemPrice = 0,
  itemImage = "",
}: IUseFav = {}) => {
  const [isFavourited, setIsFavourited] = useState<boolean>(false);
  const favList: IFav[] = useSelector((state: RootState) => state.fav.favList);
  const dispatch = useDispatch();
  const isAuthorized = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const router = useRouter();
  //   adding handler
  function favAddingHandler() {
    if (isAuthorized) {
      const currentItem: IFav = {
        id: itemId,
        title: itemTitle,
        description: itemDescription,
        price: itemPrice,
        image: itemImage,
      };
      dispatch(addToFav(currentItem));
    } else {
      toast.error("You must login first.");
      router.push("/auth");
    }
  }
  //   is added state syncing
  useEffect(() => {
    if (favList.some((item) => item.id === itemId)) {
      setIsFavourited(true);
    } else {
      setIsFavourited(false);
    }
  }, [itemId, favList]);
  //   removing handler
  function favRemovingHandler(currentItem: number) {
    dispatch(removeFav(currentItem));
  }
  return { favAddingHandler, isFavourited, favRemovingHandler };
};

export default useWishlist;
