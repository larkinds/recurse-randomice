import {
  addIceCreamToReducer,
  changeQuantity,
  deleteIceCream,
  changeTopping
} from "../utils/ReducerUtils";
import { Cart, CartAction } from "../utils/Types";

/**
 * A reducer function to handle actions related to the shopping cart.
 *
 * @param {Cart} previousState - The previous state of the shopping cart.
 * @param {CartAction} action - The action to perform on the shopping cart.
 * @returns {Cart} - The new state of the shopping cart after applying the action.
 */
export default function CartReducer(
  previousState: Cart,
  action: CartAction,
): Cart {
  switch (action.type) {
    case "SET_CART": {
      return {
        iceCream: action.payload.cart?.iceCream || [],
        toppings: action.payload.cart?.toppings || [],
      };
    }
    case "ADD_ICECREAM": {
      return {
        toppings: [...(previousState.toppings || [])],
        iceCream: addIceCreamToReducer(previousState, action),
      };
    }
    case "INCREMENT_ICECREAM": {
      return {
        iceCream: changeQuantity(previousState, action, 1),
        toppings: [...(previousState.toppings || [])],
      };
    }
    case "DECREMENT_ICECREAM": {
      return {
        iceCream: changeQuantity(previousState, action, -1),
        toppings: [...(previousState.toppings || [])],
      };
    }
    case "REMOVE_ICECREAM": {
      return {
        iceCream: deleteIceCream(previousState, action),
        toppings: [...(previousState.toppings || [])],
      };
    }
    case "ADD_TOPPING": {
      return {
        iceCream: [...(previousState.iceCream || [])],
        toppings: changeTopping(previousState, action, true),
      };
    }
    case "REMOVE_TOPPING": {
      return {
        iceCream: [...(previousState.iceCream || [])],
        toppings: changeTopping(previousState, action, false),
      };
    }
    default:
      return previousState;
  }
}
