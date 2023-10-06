import { useContext } from "react";
import { LocalStorageContext } from "../context/DataContext";
import styles from "./flavor-thumbnail.module.css";
import { IceCream } from "../utils/Types";

export type Flavor = {
  name: string;
  price: number;
  image: string;
};

export default function FlavorThumbnail({ flavor }: { flavor: Flavor }) {
  const localStorageHook = useContext(LocalStorageContext);

  //to do: refactor so this sets the data in the reducer too

  function handleAddToCart() {
    let alreadyInCart: boolean = false;

    const user = localStorageHook.storage?.user;
    let cart = localStorageHook.storage?.cart;

    cart?.iceCream.forEach((iceCream: IceCream) => {
      if (iceCream.name === flavor.name) {
        iceCream.quantity++;
        alreadyInCart = true;
      }
    });

    if (!alreadyInCart && cart?.iceCream) {
      cart.iceCream.push({ name: flavor.name, quantity: 1 });
    } else if (!cart?.iceCream) {
      cart = { iceCream: [{ name: flavor.name, quantity: 1 }] };
    }

    if (user && localStorageHook.setStorage) {
      localStorageHook.setStorage({ user, cart });
    } else if (localStorageHook.setStorage) {
      localStorageHook.setStorage({ cart });
    }
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
