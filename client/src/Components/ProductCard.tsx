import { useState } from 'react';
import './productcard.css'

type ProductCardProps = {
  name: string;
  description: string;
  image: string;
  creator: string,
  purchaseHistory: number
}

export default function ProductCard({
  name,
  description,
  image,
  creator,
  purchaseHistory
}: ProductCardProps) {
  const [scoopsCounter, setScoopsCounter] = useState<number>(0);

  return (
    <div className="single-product-grid">
      <div className="left">
        <p><strong>revolutionary offer:</strong> $0</p>
        <img src={image} style={{ width: '250px', height: '250px' }} />
        <div >
          <button>add to cart</button>
          <div style={{display: "flex", justifyContent: "center"}}>
          <button
            disabled={!scoopsCounter}
            onClick={() => setScoopsCounter(scoopsCounter - 1)}
          >
            -
          </button>
          <p>{scoopsCounter}</p>
          <button
            disabled={scoopsCounter >= 10}
            onClick={() => setScoopsCounter(scoopsCounter + 1)}
          >
            +
          </button>
          </div>
        </div>
      </div>
      <div className="center" style={{borderLeft:"2px solid black", height: "80%", marginTop: "auto", marginBottom: "auto" }}></div>
      <div className="right">
      <h2>flavour: {name}</h2>
      <p><strong>description</strong>: <span>{description}</span></p>
      <p><strong>Creator:</strong> {creator}</p>
      <p><strong>Times Purchased:</strong> {purchaseHistory}</p>
      </div>
    </div>
  );
}
