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
  itemQuantity?: number;
}

const useCart = ({
  itemTitle = "",
  itemDescription = "",
  itemPrice = 0,
  itemImage = "",
  itemId = 0,
  itemQuantity = 1,
}: IUseCart = {}) => {
  const dispatch = useDispatch();
  const cartList: ICart[] = useSelector((state: RootState) => state.cart.items);
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);
  // add to cart handler
  function addingHandler() {
    const currentItem: ICart = {
      id: itemId,
      title: itemTitle,
      description: itemDescription,
      price: itemPrice,
      quantity: itemQuantity,
      subtotal: itemPrice * itemQuantity,
      image: itemImage,
    };
    dispatch(addToCart(currentItem));
  }
  // update cart handler
  function updatingHandler() {
    const currentItem: ICart = {
      id: itemId,
      title: itemTitle,
      description: itemDescription,
      price: itemPrice,
      quantity: itemQuantity,
      subtotal: itemPrice * itemQuantity,
      image: itemImage,
    };
    dispatch(updateCart(currentItem));
  }
  // removing from cart handler
  function removingHandler(targetId: number) {
    dispatch(removeFromCart(targetId));
  }
  // is added state syncing
  useEffect(() => {
    if (cartList.some((item) => item.id === itemId)) {
      setIsAddedToCart(true);
    } else {
      setIsAddedToCart(false);
    }
  }, [cartList, itemId]);
  return { addingHandler, isAddedToCart, updatingHandler, removingHandler };
};
export default useCart;
