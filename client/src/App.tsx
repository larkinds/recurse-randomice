import './App.css'
import ProductCart from './Components/ProductCart'

function App() {


  return (
    <>
      <header>
        <h1>Temporary</h1>
      </header>
      <ProductCart name={"Iris"} description={"lorem ipsum peach plum pears persimmon pomegranite pluot"} image={"/assets/icecream.png"} />
      <footer>
        <p>Temp Footer</p>
      </footer>
    </>
  )
}

export default App
