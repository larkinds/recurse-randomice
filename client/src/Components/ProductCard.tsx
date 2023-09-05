import { useState } from "react";
import "./productcard.css";

type ProductCardProps = {
  name: string;
  description: string;
  image: string;
  creator: string;
  purchaseHistory: number;
};

export default function ProductCard(
  props
  : ProductCardProps) {
  const [scoopsCounter, setScoopsCounter] = useState<number>(0);

  return (
    <div className="single-product-grid">
      <div className="left">
        <p>
          <strong>revolutionary offer:</strong> $0
        </p>
        <img src={props.image} style={{ width: "250px", height: "250px" }} />
        <div>
          <button>add to cart</button>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              disabled={!scoopsCounter}
              onClick={() =>
                setScoopsCounter((prevScoopCounter) => prevScoopCounter - 1)
              }
            >
              -
            </button>
            <p>{scoopsCounter}</p>
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
