import { Cart, CartAction, IceCreamOrderGroup } from "./Types";

/**
 * A helper function to update the quantity of an ice cream item in the cart.
 *
 * @param {Cart} prevState - The previous state of the cart.
 * @param {CartAction} action - The action to perform.
 * @param {number} num - The quantity to add (positive) or remove (negative).
 * @returns {IceCreamOrderGroup[]} - The updated array of ice cream items.
 */
export const changeQuantity = (
  prevState: Cart,
  action: CartAction,
  num: number,
): IceCreamOrderGroup[] => {
  if (prevState.iceCream) {
    return prevState.iceCream
      ?.filter((iceCreamOrderGroup) => {
        if (iceCreamOrderGroup.id !== action.payload.id) {
          return true;
        }
        return iceCreamOrderGroup.quantity + num > 0})
      .map((iceCreamOrderGroup) => {
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
export const deleteIceCream = (
  prevState: Cart,
  action: CartAction,
): IceCreamOrderGroup[] => {
  if (prevState.iceCream) {
    return prevState.iceCream.filter(
      (iceCreamOrderGroup) => iceCreamOrderGroup.id !== action.payload.id,
    );
  } else {
    return [];
  }
};

/**
 * A helper function to add an ice cream item to the cart.
 *
 * @param {Cart} prevState - The previous state of the cart.
 * @param {CartAction} action - The action to perform.
 * @returns {IceCreamOrderGroup[]} - The updated array of ice cream items after addition.
 */
export const addIceCreamToReducer = (
  prevState: Cart,
  action: CartAction,
): IceCreamOrderGroup[] => {
  const newIceCream: IceCreamOrderGroup = {
    id: action.payload.id || "",
    quantity: action.payload.quantity || 1,
    iceCreamName: action.payload.iceCreamName || "",
    image: action.payload.image || "",
  };
  if (prevState.iceCream) {
    let incremented = false;
    const newState = prevState.iceCream.map((iceCreamOrderGroup) => {
      if (iceCreamOrderGroup.iceCreamName === action.payload.iceCreamName) {
        incremented = true;
        return {
          ...iceCreamOrderGroup,
          quantity: iceCreamOrderGroup.quantity + 1,
        };
      } else {
        return iceCreamOrderGroup;
      }
    });
    return !incremented ? [...prevState.iceCream, newIceCream] : newState;
  } else {
    return [newIceCream];
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
export const changeTopping = (
  prevState: Cart,
  action: CartAction,
  bool: boolean,
) => {
  return prevState.toppings.map((toppingOrderGroup) => {
    if (toppingOrderGroup.url === action.payload.url) {
      return {
        ...toppingOrderGroup,
        isAdded: bool,
      };
    } else {
      return toppingOrderGroup;
    }
  })

};