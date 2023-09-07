import { useState } from "react";
import Cart from "./pages/cart/Cart";
import cartStyles from "./pages/cart/cart.module.css";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
      {/* TODO: Add button to main navigation */}
      <button
        className={cartStyles.cartBtn}
        onClick={() => setIsCartOpen(true)}
      >
        🛒
      </button>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

export default App;
