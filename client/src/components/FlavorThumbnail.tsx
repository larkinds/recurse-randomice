import { useContext } from "react";
import { v4 as uuid } from "uuid";
import { LocalStorageContext } from "../context/DataContext";
import styles from "./flavor-thumbnail.module.css";
import { IceCream } from "../utils/Types";
import { AddIceCreamOrderGroupAction, IceCreamOrderGroupAction } from "../reducers/iceCreamReducer";

export type Flavor = {
  name: string;
  price: number;
  image: string;
};

export default function FlavorThumbnail({ flavor, dispatchCart }: { flavor: Flavor, dispatchCart: React.Dispatch<AddIceCreamOrderGroupAction | IceCreamOrderGroupAction> }) {
  const localStorageHook = useContext(LocalStorageContext);

  function handleAddToCart() {
    if (!checkIceCreamIsInCart()) {
      addToLocalStorage();
      const id: string = uuid();
      dispatchCart({type: "add", id, iceCreamName: flavor.name, image: flavor.image})
    }
    
  }

  function addToLocalStorage() {
    const user = localStorageHook.storage?.user;
    let cart = localStorageHook.storage?.cart;
    const alreadyInCart: boolean = checkIceCreamIsInCart();
    

    if (!alreadyInCart && cart?.iceCream) {
      cart.iceCream.push({ name: flavor.name, quantity: 1, image: flavor.image });
    } else if (!cart?.iceCream) {
      cart = { iceCream: [{ name: flavor.name, quantity: 1, image: flavor.image }] };
    }

    if (user && localStorageHook.setStorage) {
      localStorageHook.setStorage({ user, cart });
    } else if (localStorageHook.setStorage) {
      localStorageHook.setStorage({ cart });
    }
  }

  function checkIceCreamIsInCart(): boolean {
    let alreadyInCart: boolean = false;
    localStorageHook.storage?.cart?.iceCream.forEach((iceCream: IceCream) => {
      if (iceCream.name === flavor.name) {
        iceCream.quantity++;
        alreadyInCart = true;
      }
    });
    return alreadyInCart;
  }

  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.image}
          src={flavor.image}
          alt={`Photo of ${flavor.name}`}
        />
        <p className={styles.text}>
          <strong>{flavor.name}</strong>
        </p>
        <p className={styles.text}>${flavor.price}</p>
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </>
  );
}
