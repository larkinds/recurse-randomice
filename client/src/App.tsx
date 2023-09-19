import { Reducer, useReducer } from "react";
import iceCreamReducer, { IceCreamAction, IceCreamItem } from "./reducers/iceCreamReducer";

export default function App() {
  const [icecreams, dispatch] = useReducer<Reducer<IceCreamItem[], IceCreamAction>>(iceCreamReducer, initialIceCreams);

  function handleAddIceCream() {
    dispatch({
      id: icecreams.length + 1,
      type: "added",
      iceCreamItem: {
        id: icecreams.length + 1, name: "batter up", quantity: 2
      }
    });
  }

  function handleChangeIceCream(event) {
    if (event?.target.defaultValue === 'Increment')  {
      
    }
  }

  function handleDeleteIceCream(iceCreamId: number) {
    dispatch({
      type: "deleted",
      id: iceCreamId,
      iceCreamItem: undefined,
    });
  }



  return (
    <div>
      {icecreams.map(iceCream) => <p>{iceCream.name} {iceCream.quantity}</p> }
      <button onClick={handleAddIceCream}>Add Single IceCream</button>
      <button onClick={handleChangeIceCream}>Increment</button>
      <button onClick={handleChangeIceCream}>Decrement</button>
      <button onClick={handleDeleteIceCream}>Delete</button>
    </div>
  );
}

let initialIceCreams: IceCreamItem[] = [
  { id: 1, name: "strawberry", quantity: 1 },
  { id: 2, name: "chocolate",  quantity: 3 },
  { id: 3, name: "vanilla", quantity: 2 },
];;
