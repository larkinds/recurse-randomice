import {
  IceCreamOrderGroup,
  Cart,
  CartAction,
} from "../utils/Types";

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
        iceCream: (action.payload.cart?.iceCream || []),
        toppings: (action.payload.cart?.toppings || [])
      };
    }
    case "ADD_ICECREAM": {
      const newIceCream: IceCreamOrderGroup = {
        id: action.payload.id || "",
        quantity: 1,
        iceCreamName: action.payload.iceCreamName || "",
      };

      return {
          toppings: [...(previousState.toppings || [])],
          iceCream: [...(previousState.iceCream ?? []), newIceCream],
        }
    }
    case "INCREMENT_ICECREAM": {
      return {
          iceCream: changeQuantity(previousState, action, 1),
          toppings: [...(previousState.toppings || [])],
        }
    }
    case "DECREMENT_ICECREAM": {
      return {
          iceCream: changeQuantity(previousState, action, -1),
          toppings: [...(previousState.toppings || [])],
        }
    }
    case "REMOVE_ICECREAM": {
      return {
          iceCream: deleteIceCream(previousState, action),
          toppings: [...(previousState.toppings || [])],
        }
    }
    case "ADD_TOPPING": {
      return {
          iceCream: [...(previousState.iceCream || [])],
          toppings: changeTopping(previousState, action, true),
        }
    }
    case "REMOVE_TOPPING": {
      return {
          iceCream: [...(previousState.iceCream || [])],
          toppings: changeTopping(previousState, action, false),
        }
    }
    default:
      return previousState;
  }
}

/**
 * A helper function to update the quantity of an ice cream item in the cart.
 *
 * @param {Cart} prevState - The previous state of the cart.
 * @param {CartAction} action - The action to perform.
 * @param {number} num - The quantity to add (positive) or remove (negative).
 * @returns {IceCreamOrderGroup[]} - The updated array of ice cream items.
 */
const changeQuantity = (
  prevState: Cart,
  action: CartAction,
  num: number,
): IceCreamOrderGroup[] => {
  if (prevState.iceCream) {
    return prevState.iceCream?.map((iceCreamOrderGroup) => {
      if (iceCreamOrderGroup.id === action.payload.id) {
        return {
          ...iceCreamOrderGroup,
          quantity: iceCreamOrderGroup.quantity + num,
        };
      } else {
        return iceCreamOrderGroup;
      }
    });
  } else {
    return [];
  }
};

/**
 * A helper function to remove an ice cream item from the cart.
 *
 * @param {Cart} prevState - The previous state of the cart.
 * @param {CartAction} action - The action to perform.
 * @returns {IceCreamOrderGroup[]} - The updated array of ice cream items after removal.
 */
const deleteIceCream = (prevState: Cart, action: CartAction) => {
  if (prevState.iceCream) {
    return prevState.iceCream.filter(
      (iceCreamOrderGroup) => iceCreamOrderGroup.id !== action.payload.id,
    );
  } else {
    return [];
  }
};

/**
 * A helper function to update the state of a topping item in the cart.
 *
 * @param {Cart} prevState - The previous state of the cart.
 * @param {CartAction} action - The action to perform.
 * @param {boolean} bool - A boolean indicating whether to add or remove the topping.
 * @returns {IceCreamOrderGroup[]} - The updated array of topping items.
 */
const changeTopping = (
  prevState: Cart,
  action: CartAction,
  bool: boolean,
) => {
  if (prevState.toppings) {
    return prevState.toppings.map((toppingOrderGroup) => {
      if (toppingOrderGroup.id === action.payload.id) {
        return {
          ...toppingOrderGroup,
          isAdded: bool,
        };
      } else {
        return toppingOrderGroup;
      }
    });
  } else {
    return [];
  }
};
