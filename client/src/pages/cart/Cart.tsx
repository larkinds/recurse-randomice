import { useState } from "react";
import { Button, Modal } from "../../components";
import styles from "./cart.module.css";

type Item = {
  id: number;
  image: string;
  flavor: string;
  price: number;
  quantity: number;
};

const itemList: Item[] = [
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/980474978/vector/strawberry-ice-cream-cone-flat-design-dessert-icon.jpg?s=612x612&w=0&k=20&c=kY7enczOhemyXVu5Jp2pmVbv5SfQPj03zcqb27fJv4I=",
    flavor: "strawberry",
    price: 0,
    quantity: 1,
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-vector/chocolate-ice-creame-waffle-cone-sticker_1308-68693.jpg?w=2000",
    flavor: "chocolate",
    price: 0,
    quantity: 3,
  },
  {
    id: 3,
    image:
      "https://thumbs.dreamstime.com/b/ice-cream-cone-vector-cartoon-illustration-vanilla-213405239.jpg",
    flavor: "vanilla",
    price: 0,
    quantity: 2,
  },
];

type CartProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Cart({ isOpen, onClose }: CartProps) {
  const [items, setItems] = useState(itemList);

  function handleDeleteItem(id: Item["id"]) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleUpdateQuantity(id: Item["id"], newQuantity: Item["quantity"]) {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setItems(updatedItems);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={styles.modal}>
      {/* Currently getting data from a constant but will eventually either need to make this dynamic */}
      {items.map((item) => (
        <CartItem key={item.id}>
          <ItemDetails item={item} />
          <div className={styles.actionBtns}>
            <RemoveBtn itemId={item.id} onDeleteItem={handleDeleteItem} />
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

function ItemDetails({ item }: { item: Item }) {
  return (
    <div className={styles.details}>
      <div className={styles.flavor}>
        <img src={item.image} alt={item.flavor} />
        <span> {item.flavor} </span>
      </div>
      <p> ${item.price} </p>
    </div>
  );
}

function Quantity({
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
