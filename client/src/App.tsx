import { useState } from "react";
import Checkout from "./pages/Checkout";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Checkout/>
    </>
  );
}

export default App;
