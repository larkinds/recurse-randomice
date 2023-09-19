import { useReducer } from "react";
import iceCreamOrderGroupReducer, {
  IceCreamOrderGroup,
} from "./reducers/iceCreamReducer";

const initialIceCreamOrderGroups = new Array<IceCreamOrderGroup>();

export default function App() {
  const [iceCreamOrderGroups, dispatch] = useReducer(
    iceCreamOrderGroupReducer,
    initialIceCreamOrderGroups,
  );

  function handleAddIceCreamOrderGroup(iceCreamName: string) {
    dispatch({
      type: "add",
      iceCreamName,
    });
  }

  function handleIncrementIceCreamOrderGroup(iceCreamOrderGroupId: number) {
    console.log("increment");
    dispatch({
      type: "increment",
      iceCreamOrderGroupId,
    });
  }

  function handleDecrementIceCreamOrderGroup(iceCreamOrderGroupId: number) {
    dispatch({
      type: "decrement",
      iceCreamOrderGroupId,
    });
  }

  function handleDeleteIceCreamOrderGroup(iceCreamOrderGroupId: number) {
    dispatch({
      type: "delete",
      iceCreamOrderGroupId,
    });
  }

  return (
    <>
      {iceCreamOrderGroups.map((iceCreamOrderGroup) => (
        <p key={iceCreamOrderGroup.id}>
          {iceCreamOrderGroup.iceCreamName}, {iceCreamOrderGroup.quantity}
        </p>
      ))}
      <button onClick={() => handleAddIceCreamOrderGroup("foo")}>Add</button>
      <button onClick={() => handleIncrementIceCreamOrderGroup(1)}>
        Increment
      </button>
      <button onClick={() => handleDecrementIceCreamOrderGroup(2)}>
        Decrement
      </button>
      <button onClick={() => handleDeleteIceCreamOrderGroup(3)}>Delete</button>
    </>
  );
}
