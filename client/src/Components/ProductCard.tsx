import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { addIceCream, incrementIceCream } from "../utils/DispatchUtils";
import "./productcard.css";

type ProductCardProps = {
  name: string;
  description: string;
  image: string;
  creator: string;
  purchaseHistory: number;
};

export default function ProductCard(props: ProductCardProps) {
  const { state, dispatch } = useCartContext();
  const [scoopsCounter, setScoopsCounter] = useState<number>(1);

  function handleAddToCart() {
   let iceCreamAlreadyInState = false;
   let idOfIceCream: string;
   let quantityOfIceCreamInCart: number = 0;

   for (let i = 0; i < state.iceCream.length; i++) {
    if (state.iceCream[i].iceCreamName === props.name) {
      iceCreamAlreadyInState = true;
      idOfIceCream = state.iceCream[i].id
      quantityOfIceCreamInCart = state.iceCream[i].quantity;
    }
   }

   if (iceCreamAlreadyInState) {
    const maxPossibleToAdd = 10 - quantityOfIceCreamInCart;
    for (let i = 0; i < Math.min(maxPossibleToAdd, scoopsCounter); i++) {
      dispatch(incrementIceCream(idOfIceCream!));
    }
   } else {
    dispatch(addIceCream(props.name, props.image, scoopsCounter));
   }
  }

  return (
    <div className="single-product-grid">
      <div className="left">
        <p>revolutionary offer: $0</p>
        <img src={props.image} style={{ width: "250px", height: "250px" }} />
        <div className="button-container">
          <button className="add-to-cart-button" disabled={!scoopsCounter} onClick={handleAddToCart}>add to cart</button>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              disabled={!scoopsCounter}
              onClick={() =>
                setScoopsCounter((prevScoopCounter) => prevScoopCounter - 1)
              }
              className="increase-decrease"
            >
              -
            </button>
            <div
              className="scoops-counter"
            >
              <p>{scoopsCounter}</p>
            </div>

            <button
            className="increase-decrease"
              disabled={scoopsCounter >= 10}
              onClick={() =>
                setScoopsCounter((prevScoopCounter) => prevScoopCounter + 1)
              }
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="center"></div>
      <div className="right">
        <h2 className="title" style={{ fontSize: "2rem" }}>
          flavor: {props.name}
        </h2>
        <p>
          <strong>description</strong>: <span>{props.description}</span>
        </p>
        <p>
          <strong>Creator:</strong> {props.creator}
        </p>
        <p>
          <strong>Times Purchased:</strong> {props.purchaseHistory}
        </p>
      </div>
    </div>
  );
}
