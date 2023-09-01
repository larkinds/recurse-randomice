import React from 'react'
import './OrderItem.css'

interface OrderProps {
  price: number;
  img: HTMLImageElement;
  quantity: number;
  flavor: string;
}

function OrderItem({price, img, quantity, flavor} : OrderProps) {
  return (
    <div className="order-item-container">
      <div>
        <img className="order-image" alt="ice cream cone" src={img}></img>
      </div>
      <div className="item-details">
        <div className="item-info">I am the info</div>
        <span>{price}</span>
        <div className="price-total"> price and trash can</div>
      </div>
    </div>
  );
}

export default OrderItem;