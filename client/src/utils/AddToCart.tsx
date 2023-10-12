import { v4 as uuid } from "uuid";
import {
  AddIceCreamOrderGroupAction,
  IceCreamOrderGroupAction,
} from "../reducers/iceCreamReducer";
import { StorageContext } from "../context/DataContext";
import { Flavor } from "../components/FlavorThumbnail";
import { IceCream } from "./Types";

export function addToCart(
  dispatchCart: React.Dispatch<
    AddIceCreamOrderGroupAction | IceCreamOrderGroupAction
  >,
  localStorageContext: StorageContext,
  flavor: Flavor,
) {
  if (!checkIceCreamIsInCart(localStorageContext, flavor)) {
    addToLocalStorage(localStorageContext, flavor);
    const id: string = uuid();
    dispatchCart({
      type: "add",
      id,
      iceCreamName: flavor.name,
      image: flavor.image,
    });
  }
}

export function addToLocalStorage(
  localStorageContext: StorageContext,
  flavor: Flavor,
) {
  const user = localStorageContext.storage?.user;
  let cart = localStorageContext.storage?.cart;
  const alreadyInCart: boolean = checkIceCreamIsInCart(
    localStorageContext,
    flavor,
  );

  if (!alreadyInCart && cart?.iceCream) {
    cart.iceCream.push({ name: flavor.name, quantity: 1, image: flavor.image });
  } else if (!cart?.iceCream) {
    cart = {
      iceCream: [{ name: flavor.name, quantity: 1, image: flavor.image }],
    };
  }

  if (user && localStorageContext.setStorage) {
    localStorageContext.setStorage({ user, cart });
  } else if (localStorageContext.setStorage) {
    localStorageContext.setStorage({ cart });
  }
}

export function checkIceCreamIsInCart(
  localStorageContext: StorageContext,
  flavor: Flavor,
): boolean {
  let alreadyInCart: boolean = false;
  localStorageContext.storage?.cart?.iceCream.forEach((iceCream: IceCream) => {
    if (iceCream.name === flavor.name) {
      iceCream.quantity++;
      alreadyInCart = true;
    }
  });
  return alreadyInCart;
}
