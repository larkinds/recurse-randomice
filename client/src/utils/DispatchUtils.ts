import { v4 as uuid } from "uuid";
import { Cart, CartAction } from "./Types";

export const setCart = (cart: Cart): CartAction => {
  return { type: "SET_CART", payload: { cart } };
};

export const addIceCream = (iceCreamName: string): CartAction => {
  const id = uuid();
  return {
    type: "ADD_ICECREAM",
    payload: {
      id,
      iceCreamName,
    },
  };
};

export const incrementIceCream = (id: string): CartAction => {
  return { type: "INCREMENT_ICECREAM", payload: { id } };
};

export const decrementIceCream = (id: string): CartAction => {
  return { type: "DECREMENT_ICECREAM", payload: { id } };
};

export const removeIceCream = (id: string): CartAction => {
  return { type: "REMOVE_ICECREAM", payload: { id } };
};

export const addTopping = (id: string): CartAction => {
  return { type: "ADD_TOPPING", payload: { id } };
};

export const removeTopping = (id: string): CartAction => {
  return { type: "REMOVE_TOPPING", payload: { id } };
};
