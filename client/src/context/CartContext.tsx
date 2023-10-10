import { ReactNode } from "react";
import { Cart, CartAction } from "../utils/Types";
import { createContext, useContext } from "react";
import useLocalStorageWithReducer from "../hooks/UseLocalStorage";
import { setCart } from "../utils/DispatchUtils";
import CartReducer from "../reducers/cartReducer";

const cart: Cart = {
  iceCream: [],
  toppings: [],
};

export const CartContext = createContext<{
  state: Cart;
  dispatch: React.Dispatch<CartAction>;
}>({ state: cart, dispatch: () => {} });

export const CartContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const contextValue = useLocalStorageWithReducer(
    "cart",
    cart,
    CartReducer,
    setCart,
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export function useCartContext() {
  return useContext(CartContext);
}
