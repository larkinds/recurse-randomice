import { CartContextProvider } from "./context/CartContext";
import { UserContextProvider } from "./context/UserContext";

export default function App() {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <div></div>
      </CartContextProvider>
    </UserContextProvider>
  );
}
