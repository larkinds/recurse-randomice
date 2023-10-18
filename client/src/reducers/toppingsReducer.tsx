export type ToppingOrderGroup = {
    id: string;
    isAdded: boolean;
  };

  export type ToppingOrderGroupAction = {
    type: "add" | "delete";
    id: string;
  };
  
  export default function ToppingOrderGroupReducer(
    previousState: ToppingOrderGroup[],
    action: ToppingOrderGroupAction,
  ) {
    switch (action.type) {
    case "add": {
        return previousState.map((toppingOrderGroup) => {
          if (toppingOrderGroup.id === action.id) {
            return {
                ...toppingOrderGroup,
                isAdded: true
            };
            } else {
            return toppingOrderGroup;
            }
        });
        }
        case "delete": {
          return previousState.map((toppingOrderGroup) => {
            if (toppingOrderGroup.id === action.id) {
              return {
                  ...toppingOrderGroup,
                  isAdded: false
              };
              } else {
              return toppingOrderGroup;
              }
          });
          }
    }
  }
  