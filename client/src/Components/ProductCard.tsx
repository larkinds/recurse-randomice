import { useContext, useState } from "react";
import { LocalStorageContext } from "../context/DataContext";
import "./productcard.css";

type ProductCardProps = {
  name: string;
  description: string;
  image: string;
  creator: string;
  purchaseHistory: number;
};

//todo: make the counter button a stable size

export default function ProductCard(
  props
  : ProductCardProps) {
  const [scoopsCounter, setScoopsCounter] = useState<number>(0);

  return (
    <div className="single-product-grid">
      <div className="left">
        <p>
          revolutionary offer: $0
        </p>
        <img src={props.image} style={{ width: "250px", height: "250px" }} />
        <div className="button-container">
          <button className="add-to-cart-button">add to cart</button>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              disabled={!scoopsCounter}
              onClick={() =>
                setScoopsCounter((prevScoopCounter) => prevScoopCounter - 1)
              }
            >
              -
            </button>
            <p style={{ border: "1px solid black", borderRadius: "50%", padding: "4px 12px" }}>{scoopsCounter}</p>
            <button 
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
        <h2 className="title" style={{fontSize: "2rem"}}>flavor: {props.name}</h2>
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
