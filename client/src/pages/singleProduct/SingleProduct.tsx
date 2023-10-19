import { useLocation } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import Suggestions from "../../components/Suggestions";
import ToppingsBar from "../../components/ToppingsBar";
import styles from "./single-product.module.css"

export default function SingleProduct() {
    const { state } = useLocation();
    console.log({state});

  return (
    <div className={styles.container}>
        <ProductCard name={state.flavor.name} image={state.flavor.imageURL} creator={state.flavor.userId} description="Peach Plum Pear Persimmon Pomegranite Peach Plum Pear Persimmon Pomegranite Peach Plum Pear Persimmon Pomegranite" purchaseHistory={0} />
        <ToppingsBar />
        {/* <Suggestions /> */}
    </div>
  );
}
