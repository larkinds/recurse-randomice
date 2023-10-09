import { Item } from "./ItemList";
import styles from "../pages/cart/cart.module.css";

export default function Quantity({
  item,
  onUpdate,
}: {
  item: Item;
  onUpdate: (id: Item["id"], newQuantity: Item["quantity"]) => void;
}) {
  function handleIncrement() {
    onUpdate(item.id, item.quantity + 1);
  }

  function handleDecrement() {
    if (item.quantity > 0) {
      onUpdate(item.id, item.quantity - 1);
    }
  }

  return (
    <div className={styles.quantity}>
      <button className={styles.minus} onClick={handleDecrement}>
        -
      </button>
      <span> {item.quantity} </span>
      <button className={styles.plus} onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}
