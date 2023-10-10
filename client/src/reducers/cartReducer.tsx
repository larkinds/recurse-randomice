import {
  IceCreamOrderGroup,
  Cart,
  CartAction,
} from "../utils/Types";

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

const deleteIceCream = (prevState: Cart, action: CartAction) => {
  if (prevState.iceCream) {
    return prevState.iceCream.filter(
      (iceCreamOrderGroup) => iceCreamOrderGroup.id !== action.payload.id,
    );
  } else {
    return [];
  }
};

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
