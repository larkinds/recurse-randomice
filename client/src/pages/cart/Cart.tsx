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

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={styles.modal}>
      {/* Currently getting data from a constant but will eventually either need to make this dynamic */}
      {items.map((item) => (
        <CartItem
          item={item}
          onDeleteItem={() => handleDeleteItem(item.id)}
          key={item.id}
        />
      ))}
    </Modal>
  );
}

type CartItemProps = {
  item: Item;
  onDeleteItem: (id: Item["id"]) => void;
};

function CartItem({ item, onDeleteItem }: CartItemProps) {
  return (
    <div className={styles.cartItem}>
      <ItemDetails item={item} />
      <div className={styles.actionBtns}>
        <Button
          className={styles.removeBtn}
          action={() => onDeleteItem(item.id)}
        >
          Remove
        </Button>
        <Quantity quantity={item.quantity} />
      </div>
    </div>
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

function Quantity({ quantity }: { quantity: Item["quantity"] }) {
  // TODO Will eventually need to update item data based on change in count, so state will need to be lifted up
  const [count, setCount] = useState(quantity);

  return (
    <div className={styles.quantity}>
      <button
        className={styles.minus}
        onClick={() => count > 0 && setCount((c) => c - 1)}
      >
        -
      </button>
      <span> {count} </span>
      <button className={styles.plus} onClick={() => setCount((c) => c + 1)}>
        +
      </button>
    </div>
  );
}
