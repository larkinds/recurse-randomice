import { Reducer, ReducerWithoutAction } from "react";

export interface IceCreamItem {
  id: number;
  quantity: number;
  name: string;
}

export interface IceCreamAction {
  id: number;
  type: string;
  iceCreamItem: IceCreamItem | undefined;
}

//to do: be careful not to action.add an icecream that already exists:
//in the components that add an icecream, check the reducer's state for an ice cream before adding

export default function iceCreamsReducer(
  iceCreamItems: IceCreamItem[],
  action: IceCreamAction,
) {
  switch (action.type) {
    case "added": {
      return [
        ...iceCreamItems,
        {
          id: action.id,
          quantity: 1,
          name: action.iceCreamItem.name,
        },
      ];
    }
    case "changed": {
      return iceCreamItems.map((iceCreamItem) => {
        if (iceCreamItem.id === action.iceCreamItem.id) {
          return action.iceCreamItem;
        } else {
          return iceCreamItem;
        }
      });
    }
    case "deleted": {
      return iceCreamItems.filter((item) => item.id !== action.id);
    }
    default:
      throw new Error("no such action");
  }
}

[{ id: 0 }, {}, {}];
