import { useState } from "react";
import Cart from "./pages/Cart";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsCartOpen(true)}>Cart</button>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

export default App;
