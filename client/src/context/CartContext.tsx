import { ReactNode } from "react";
import { Cart, CartAction } from "../utils/Types";
import { createContext, useContext } from "react";
import useLocalStorageWithReducer from "../hooks/UseLocalStorage";
import { setCart } from "../utils/DispatchUtils";
import CartReducer from "../reducers/cartReducer";

// Create an initial cart state.
const cart: Cart = {
  iceCream: [],
  toppings: [],
};

// Create a context for the Cart and CartAction using createContext.
export const CartContext = createContext<{
  state: Cart;
  dispatch: React.Dispatch<CartAction>;
}>({
  state: cart,
  dispatch: () => {},
});

export const CartContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Initialize the context value using useLocalStorageWithReducer, which
  // manages cart state and local storage synchronization.
  const contextValue = useLocalStorageWithReducer(
    "cart",
    cart,
    CartReducer,
    setCart,
  );

  return (                      
    // Provide the context value to children components using CartContext.Provider.
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

/**
 * A custom hook to access the CartContext and retrieve the cart state and dispatch function.
 * You can use this hook in your components to access and modify the cart state.
 *
 * @returns {{ state: Cart, dispatch: React.Dispatch<CartAction> }} - An object containing the cart state and dispatch function.
 */
export function useCartContext() {
  return useContext(CartContext);
}
