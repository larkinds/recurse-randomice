export type IceCreamOrderGroup = {
  id: string;
  quantity: number;
  iceCreamName: string;
  image: string;
};


export type AddIceCreamOrderGroupAction = {
  type: "add";
  id: string;
  iceCreamName: string;
  image: string;
};

export type IceCreamOrderGroupAction = {
  type: "increment" | "decrement" | "delete";
  id: string;
};

export default function iceCreamOrderGroupReducer(
  previousState: IceCreamOrderGroup[],
  action: AddIceCreamOrderGroupAction | IceCreamOrderGroupAction,
) {
  switch (action.type) {
    case "add": {
      return [
        ...previousState,
        {
          id: action.id,
          quantity: 1,
          iceCreamName: action.iceCreamName,
          image: action.image
        },
      ];
    }
    case "increment": {
      return previousState.map((iceCreamOrderGroup) => {
        if (iceCreamOrderGroup.id === action.id) {
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
        if (iceCreamOrderGroup.id === action.id) {
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
        (iceCreamOrderGroup) => iceCreamOrderGroup.id !== action.id,
      );
    }
  }
}
