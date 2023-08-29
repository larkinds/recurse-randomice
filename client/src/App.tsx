import { useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import './App.css';

const itemList = [
  {flavor: "strawberry", price: 0, quantity: 1},
  {flavor: "chocolate", price: 0, quantity: 3},
  {flavor: "vanilla", price: 0, quantity: 2}
]


function App() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const { current: el } = modalRef;
    if (open) {
      el.showModal();
    } else {
      el.close();
    }
  }, [open]);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>Cart</button>
      <dialog ref={modalRef}>
        <button onClick={() => setOpen(false)}>Close</button>
        
        {itemList.map((product) => <div> <Item item={product} /> </div>)}
        

        <div>test</div>
      </dialog>
    </div>
  );
}


function Item({ item }){
  return(
    <div>
      <img />
      <p> {item.flavor} </p>
      <button> Remove </button>


      <p> ${item.price} </p>
      <Quantity quantity={item.quantity}/>
    </div>
  )
}

function Quantity({ quantity }){
  const [count, setCount] = useState(quantity)

  return(
    <>
      <button onClick={() => setCount((c) => c-1)}> - </button>
      <span> {count} </span>
      <button onClick={() => setCount((c) => c+1)}> + </button>
    </>
  )
}

export default App;
