import { useState } from "react";

export default function Quantity() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <label> Quantity </label>

        <div>
          {count > 0 && (
            <button type="button" onClick={() => setCount(count - 1)}>
              -
            </button>
          )}

          <input type="number" id="Quantity" value={count} />

          <button type="button" onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
      </div>
    </>
  );
}
