import { useContext } from "react";
import { LocalStorageContext } from "../context/DataContext";
import { AddIceCreamOrderGroupAction, IceCreamOrderGroupAction } from "../reducers/iceCreamReducer";
import { addToCart } from "../utils/AddToCart";
import styles from "./flavor-thumbnail.module.css";

export type Flavor = {
  name: string;
  price: number; 
  image: string;
};

export default function FlavorThumbnail({ flavor, dispatchCart }: { flavor: Flavor, dispatchCart: React.Dispatch<AddIceCreamOrderGroupAction | IceCreamOrderGroupAction> }) {
  const localStorageContext = useContext(LocalStorageContext);

  //these could probably be made into util functions
  function handleAddToCart() {
    addToCart(dispatchCart, localStorageContext, flavor);
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
