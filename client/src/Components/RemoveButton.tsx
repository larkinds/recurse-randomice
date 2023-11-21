import { Button } from "./";
import styles from "../pages/cart/cart.module.css";
import { Item } from "./ItemList";

export default function RemoveButton({
  onDeleteItem,
  itemId,
}: {
  onDeleteItem: (id: Item["id"]) => void;
  itemId: Item["id"];
}) {
  return (
    <Button className={styles.removeBtn} action={() => onDeleteItem(itemId)}>
      Remove
    </Button>
  );
}
