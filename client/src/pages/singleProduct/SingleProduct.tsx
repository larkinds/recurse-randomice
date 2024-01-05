import { useLocation } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import Suggestions from "../../components/Suggestions";
import ToppingsBar from "../../components/ToppingsBar";
import styles from "./single-product.module.css";

const suggestions = [
  {
    name: "Reluctant Lemon",
    image:
      "https://firebasestorage.googleapis.com/v0/b/recurse-icecream.appspot.com/o/Images%2Fwise%20tyvek.jpeg?alt=media&token=b7b3226f-354b-4246-8726-1a31758007af",
    price: 0,
  },
  {
    name: "Prickly Pear",
    image:
      "https://firebasestorage.googleapis.com/v0/b/recurse-icecream.appspot.com/o/Images%2Fwise%20tyvek.jpeg?alt=media&token=b7b3226f-354b-4246-8726-1a31758007af",
    price: 0,
  },
];

export default function SingleProduct() {
  const { state } = useLocation();

  return (
    <div className={styles.container}>
      <ProductCard
        key={state.flavor.name}
        name={state.flavor.name}
        image={state.flavor.imageURL}
        creator={state.flavor.userId}
        description="Peach Plum Pear Persimmon Pomegranite Peach Plum Pear Persimmon Pomegranite Peach Plum Pear Persimmon Pomegranite"
        purchaseHistory={0}
      />
      <ToppingsBar />
      <Suggestions itemList={suggestions} />
    </div>
  );
}
