import './App.css'
import ProductCart from './Components/ProductCard'

function App() {


  return (
    <>
      <header>
        <h1>Temporary</h1>
      </header>
      <ProductCart name={"Iris"} description={"lorem ipsum peach plum pears persimmon pomegranite pluot"} image={"../src/assets/icecream.png"} creator={"iris"} purchaseHistory={5} />
      <footer>
        <p>Temp Footer</p>
      </footer>
    </>
  );
}

export default App;
