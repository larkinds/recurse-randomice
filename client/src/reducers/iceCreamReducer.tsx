export type IceCreamOrderGroup = {
  id: number;
  quantity: number;
  iceCreamName: string;
};

export type IceCreamOrderGroupAction =
  | AddIceCreamOrderGroupAction
  | IncrementIceCreamOrderGroupAction
  | DecrementIceCreamOrderGroupAction
  | DeleteIceCreamOrderGroupAction;

type AddIceCreamOrderGroupAction = {
  type: "add";
  iceCreamName: string;
};

type IncrementIceCreamOrderGroupAction = {
  type: "increment";
  iceCreamOrderGroupId: number;
};

type DecrementIceCreamOrderGroupAction = {
  type: "decrement";
  iceCreamOrderGroupId: number;
};

type DeleteIceCreamOrderGroupAction = {
  type: "delete";
  iceCreamOrderGroupId: number;
};

export default function iceCreamOrderGroupReducer(
  previousState: IceCreamOrderGroup[],
  action: IceCreamOrderGroupAction,
) {
  switch (action.type) {
    case "add": {
      return [
        ...previousState,
        {
          id: previousState.length, // Note: There's an issue here. `id` is not a property of `AddIceCreamOrderGroupAction`
          quantity: 1,
          iceCreamName: action.iceCreamName,
        },
      ];
    }
    case "increment": {
      console.log("foo");
      return previousState.map((iceCreamOrderGroup) => {
        if (iceCreamOrderGroup.id === action.iceCreamOrderGroupId) {
          return {
            ...iceCreamOrderGroup,
            quantity: iceCreamOrderGroup.quantity + 1,
          };
        } else {
          return iceCreamOrderGroup;
        }
      });
    }
    case "decrement": {
      return previousState.map((iceCreamOrderGroup) => {
        if (iceCreamOrderGroup.id === action.iceCreamOrderGroupId) {
          return {
            ...iceCreamOrderGroup,
            quantity: iceCreamOrderGroup.quantity - 1,
          };
        } else {
          return iceCreamOrderGroup;
        }
      });
    }
    case "delete": {
      return previousState.filter(
        (iceCreamOrderGroup) =>
          iceCreamOrderGroup.id !== action.iceCreamOrderGroupId,
      );
    }
  }
}
