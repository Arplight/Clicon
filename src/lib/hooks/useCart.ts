import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/lib/redux/store";
import {
  addToCart,
  updateCart,
  removeFromCart,
} from "../redux/slices/CartSlice";

interface IUseCart {
  itemTitle?: string;
  itemDescription?: string;
  itemPrice?: number;
  itemImage?: string;
  itemId?: number;
}

const useCart = ({
  itemTitle = "",
  itemDescription = "",
  itemPrice = 0,
  itemImage = "",
  itemId = 0,
}: IUseCart = {}) => {
  const dispatch = useDispatch();
  const cartList: ICart[] = useSelector((state: RootState) => state.cart.items);
  const currentItem: ICart[] | undefined = cartList.filter(
    (item) => item.id === itemId
  );
  const lastQuantity: number | undefined = currentItem[0]?.quantity;
  const [currentQuantity, setCurrentQuantity] = useState<number>(
    lastQuantity || 1
  );
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);

  // add to cart handler
  function addingHandler() {
    const currentItem: ICart = {
      id: itemId,
      title: itemTitle,
      description: itemDescription,
      price: itemPrice,
      quantity: currentQuantity,
      subtotal: itemPrice * currentQuantity,
      image: itemImage,
    };
    dispatch(addToCart(currentItem));
  }
  // removing from cart handler
  function removingHandler(targetId: number) {
    dispatch(removeFromCart(targetId));
  }
  // update cart handler
  useEffect(() => {
    const currentItem: ICart = {
      id: itemId,
      title: itemTitle,
      description: itemDescription,
      price: itemPrice,
      quantity: currentQuantity,
      subtotal: itemPrice * currentQuantity,
      image: itemImage,
    };
    dispatch(updateCart(currentItem));
  }, [currentQuantity, lastQuantity, dispatch]);

  // is added state syncing
  useEffect(() => {
    if (cartList.some((item) => item.id === itemId)) {
      setIsAddedToCart(true);
    } else {
      setIsAddedToCart(false);
    }
  }, [cartList, itemId]);
  return {
    addingHandler,
    isAddedToCart,
    removingHandler,
    currentQuantity,
    setCurrentQuantity,
  };
};
export default useCart;
