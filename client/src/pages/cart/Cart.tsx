import { Button, Modal } from "../../components";
import { useCartContext } from "../../context/CartContext";
import { IceCreamOrderGroup } from "../../utils/Types";
import styles from "./cart.module.css";
import { decrementIceCream, incrementIceCream, removeIceCream, removeTopping } from "../../utils/DispatchUtils";

type Item = {
  id: string;
  image: string;
  iceCreamName: string;
  quantity: number;
};


type CartProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Cart({ isOpen, onClose }: CartProps) {
  const { state, dispatch } = useCartContext();

  function handleDeleteItemIceCream(id: Item["id"]) {
    dispatch(removeIceCream(id))
  }

  function handleDeleteItemTopping(id: Item["id"]) {
    dispatch(removeTopping(id))
  }

  function handleUpdateQuantity(id: Item["id"], newQuantity: Item["quantity"]) {
    const iceCreamToUpdate = state.iceCream.find((flavor) => flavor.id === id);

    if (iceCreamToUpdate!.quantity > newQuantity) {
      for (let i = 0; i < iceCreamToUpdate!.quantity - newQuantity; i++) {
        dispatch(decrementIceCream(id))
      }
    } else {
      for (let i = 0; i < newQuantity - iceCreamToUpdate!.quantity ; i++) {
        dispatch(incrementIceCream(id))
      }
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      containerClassNames={styles.modal}
      buttonClassNames={styles.modalCloseBtn}
    >
      {state.iceCream.map((item) => (
        <CartItem key={item.id}>
          <ItemDetails item={item} />
          <div className={styles.actionBtns}>
            <RemoveBtn itemId={item.id} onDeleteItem={handleDeleteItemIceCream} />
            <Quantity item={item} onUpdate={handleUpdateQuantity} />
          </div>
        </CartItem>
      ))}
    </Modal>
  );
}

function CartItem({ children }: { children: React.ReactNode }) {
  return <div className={styles.cartItem}>{children}</div>;
}

function RemoveBtn({
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

function ItemDetails({ item }: { item: IceCreamOrderGroup }) {
  return (
    <div className={styles.details}>
      <div className={styles.flavor}>
        <img src={item.image ? item.image : "https://media.istockphoto.com/id/980474978/vector/strawberry-ice-cream-cone-flat-design-dessert-icon.jpg?s=612x612&w=0&k=20&c=kY7enczOhemyXVu5Jp2pmVbv5SfQPj03zcqb27fJv4I="} alt={item.iceCreamName} />
        <span> {item.iceCreamName} </span>
      </div>
      <p>$0</p>
    </div>
  );
}

function Quantity({item, onUpdate}: { item: Item; onUpdate: (id: Item["id"], newQuantity: Item["quantity"]) => void; }) {
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
