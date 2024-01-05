export interface Cart {
  iceCream: IceCreamOrderGroup[];
  toppings: ToppingOrderGroup[];
}

export type CartAction = {
  type:
    | "SET_CART"
    | "ADD_ICECREAM"
    | "INCREMENT_ICECREAM"
    | "DECREMENT_ICECREAM"
    | "REMOVE_ICECREAM"
    | "ADD_TOPPING"
    | "REMOVE_TOPPING";
  payload: {
    id?: string;
    url?: string;
    name?: string;
    quantity?: number;
    iceCreamName?: string;
    image?: string;
    isAdded?: boolean;
    cart?: Cart;
  };
};

export interface StorageData {
  user?: string | null;
  cart?: Cart | null;
}

export type IceCreamOrderGroup = {
  id: string;
  quantity: number;
  iceCreamName: string;
  image: string;
};

export type AddIceCreamOrderGroupAction = {
  type: "add_icecream";
  id: string;
  iceCreamName: string;
  image: string;
};

export type IceCreamOrderGroupAction = {
  type: "increment_icecream" | "decrement_icecream" | "delete_icecream";
  id: string;
};

export type ToppingOrderGroup = {
  name: string;
  url: string;
  isAdded: boolean;
};

export type ToppingOrderGroupAction = {
  type: "add_topping" | "delete_topping";
  id: string;
};
