import { useState } from "react";
import styles from "./checkout.module.css";
import CheckOutTotal from "../../components/CheckOutTotal";
import SubmitButton from "../../components/SubmitButton";

function CartItem({ children }: { children: React.ReactNode }) {
  return <div className={styles.cartItem}>{children}</div>;
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

export type Item = {
  id: number;
  image: string;
  flavor: string;
  price: number;
  quantity: number;
};

//mock data
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

export default function CheckoutPage() {
  const [items, setItems] = useState(itemList);
  return (
    <>
      {items.map((item) => (
        <CartItem key={item.id}>
          <p>{item.quantity} x</p>
          <ItemDetails item={item} />
        </CartItem>
      ))}
      <CheckOutTotal />
      <SubmitButton />
    </>
  );
}
