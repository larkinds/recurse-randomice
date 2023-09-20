import { useReducer } from "react";
import iceCreamOrderGroupReducer, {
  IceCreamOrderGroup,
} from "./reducers/iceCreamReducer";
import { v4 as uuid } from "uuid";

const initialIceCreamOrderGroups = new Array<IceCreamOrderGroup>();

export default function App() {
  const [iceCreamOrderGroups, dispatch] = useReducer(
    iceCreamOrderGroupReducer,
    initialIceCreamOrderGroups,
  );

  function handleAddIceCreamOrderGroup(iceCreamName: string) {
    const id = uuid();

    dispatch({
      type: "add",
      id,
      iceCreamName,
    });
  }

  function handleIncrementIceCreamOrderGroup(id: string) {
    dispatch({
      type: "increment",
      id,
    });
  }

  function handleDecrementIceCreamOrderGroup(id: string) {
    dispatch({
      type: "decrement",
      id,
    });
  }

  function handleDeleteIceCreamOrderGroup(id: string) {
    dispatch({
      type: "delete",
      id,
    });
  }

  return (
    <>
      <>
        {iceCreamOrderGroups.map((iceCreamOrderGroup) => (
          <div key={iceCreamOrderGroup.id}>
            <p>
              {iceCreamOrderGroup.iceCreamName}, {iceCreamOrderGroup.quantity}
            </p>
            <button
              onClick={() =>
                handleIncrementIceCreamOrderGroup(iceCreamOrderGroup.id)
              }
            >
              Increment
            </button>
            <button
              onClick={() =>
                handleDecrementIceCreamOrderGroup(iceCreamOrderGroup.id)
              }
            >
              Decrement
            </button>
            <button
              onClick={() =>
                handleDeleteIceCreamOrderGroup(iceCreamOrderGroup.id)
              }
            >
              Delete
            </button>
          </div>
        ))}
      </>
      <button onClick={() => handleAddIceCreamOrderGroup("dummyName")}>
        Add
      </button>
    </>
  );
}
