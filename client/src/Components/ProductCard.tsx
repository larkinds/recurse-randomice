import { useCartContext } from "../context/CartContext";
import "./productcard.css";
import {
  incrementIceCream,
  decrementIceCream,
} from "../utils/DispatchUtils";
import { useUserContext } from "../context/UserContext";

type ProductCardProps = {
  name: string;
  description: string;
  image: string;
  creator: string;
  purchaseHistory: number;
};

export default function ProductCard(props: ProductCardProps) {
  const { state, dispatch } = useCartContext();
  const { user } = useUserContext();

  return (
    <>
      <div className="single-product-grid">
        <div className="left">
          <p>
            <strong>revolutionary offer:</strong> $0
          </p>
          <p>{user}</p>
          <img src={props.image} style={{ width: "250px", height: "250px" }} />
          {state.iceCream.map((iceCreamOrderGroup) => (
            <div key={iceCreamOrderGroup.id}>
              <button
                onClick={() =>
                  dispatch(incrementIceCream(iceCreamOrderGroup.id))
                }
              >
                +
              </button>

              <p>{iceCreamOrderGroup.quantity}</p>

              <button
                onClick={() =>
                  dispatch(decrementIceCream(iceCreamOrderGroup.id))
                }
              >
                -
              </button>
            </div>
          ))}
        </div>
        <div
          className="center"
          style={{
            borderLeft: "2px solid black",
            height: "80%",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        ></div>
        <div className="right">
          <h2>flavour: {props.name}</h2>
          <p>
            <strong>description</strong>: {props.description}
          </p>
          <p>
            <strong>Creator:</strong> {props.creator}
          </p>
          <p>
            <strong>Times Purchased:</strong> {props.purchaseHistory}
          </p>
        </div>
      </div>
    </>
  );
}
