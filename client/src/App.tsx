import "./App.css";
import ProductCart from "./Components/ProductCard";

function App() {
  return (
    <>
      <header>
        <h1>Temp Header</h1>
      </header>
      <ProductCart
        name={"NYC summer"}
        description={"lorem ipsum peach plum pears persimmon pomegranite pluot"}
        image={"../src/assets/icecream.png"}
        creator={"iris"}
        purchaseHistory={5}
      />
      <footer>
        <p>Temp Footer</p>
      </footer>
    </>
  );
}

export default App;
