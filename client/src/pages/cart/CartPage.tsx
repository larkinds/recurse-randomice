import { useState } from "react";
import Cart from "./Cart";
import CartBtn from "./CartBtn";

export default function CartPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <CartBtn handleClick={() => setIsCartOpen(true)} />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
