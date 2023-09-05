import { useState } from "react";
import { Button, Modal } from "../components";

type Item = {
  id: number;
  image: string;
  flavor: string;
  price: number;
  quantity: number;
};

const itemList: Item[] = [
  { id: 1, image: "", flavor: "strawberry", price: 0, quantity: 1 },
  { id: 2, image: "", flavor: "chocolate", price: 0, quantity: 3 },
  { id: 3, image: "", flavor: "vanilla", price: 0, quantity: 2 },
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
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* Currently getting data from a constant but will eventually either need to be passed into the component
            of fetched from an API */}
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

type CartItemType = {
  item: Item;
  onDeleteItem: (id: Item["id"]) => void;
};

function CartItem({ item, onDeleteItem }: CartItemType) {
  return (
    <div>
      <ItemDetails item={item} />
      <RemoveBtn onDeleteItem={onDeleteItem} />
      <Quantity quantity={item.quantity} />
    </div>
  );
}

function ItemDetails({ item }: { item: Item }) {
  return (
    <div>
      <img src={item.image} alt={item.flavor} />
      <p> {item.flavor} </p>
      <p> ${item.price} </p>
    </div>
  );
}

function RemoveBtn({
  onDeleteItem,
}: {
  onDeleteItem: CartItemType["onDeleteItem"];
}) {
  return <Button action={onDeleteItem}>Remove</Button>;
}

function Quantity({ quantity }: { quantity: Item["quantity"] }) {
  // TODO Will eventually need to update item data based on change in count, so state will need to be lifted up
  const [count, setCount] = useState(quantity);

  return (
    <>
      <button onClick={() => count > 0 && setCount((c) => c - 1)}> - </button>
      <span> {count} </span>
      <button onClick={() => setCount((c) => c + 1)}> + </button>
    </>
  );
}
