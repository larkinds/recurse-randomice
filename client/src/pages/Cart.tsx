import { useState } from 'react';
import { Button, Modal } from '../components';

const itemList = [
  { id: 1, image: '', flavor: 'strawberry', price: 0, quantity: 1 },
  { id: 2, image: '', flavor: 'chocolate', price: 0, quantity: 3 },
  { id: 3, image: '', flavor: 'vanilla', price: 0, quantity: 2 },
];

export default function Cart({ isOpen, onClose }) {
  function handleDeleteItem() {
    // TODO
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* Currently getting data from a constant but will eventually either need to be passed into the component
            of fetched from an API */}
      {itemList.map((item) => (
        <CartItem item={item} onDeleteItem={handleDeleteItem} key={item.id} />
      ))}
    </Modal>
  );
}

function CartItem({ item, onDeleteItem }) {
  return (
    <div>
      <ItemDetails item={item} />
      <RemoveBtn onDeleteItem={onDeleteItem} />
      <Quantity quantity={item.quantity} />
    </div>
  );
}

function ItemDetails({ item }) {
  return (
    <div>
      <img src={item.image} alt={item.flavor} />
      <p> {item.flavor} </p>
      <p> ${item.price} </p>
    </div>
  );
}

function RemoveBtn({ onDeleteItem }) {
  return <Button action={onDeleteItem}>Remove</Button>;
}

function Quantity({ quantity }) {
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
