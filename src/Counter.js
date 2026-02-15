import { useState } from "react";
import "./index.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const reset = () => setCount(0);

  return (
    <div className="counter-container">

      <div className="counter-card animate-fade">
        <h1 className="title">Counter App</h1>

        <div className="counter-display animate-scale">
          <span className="counter-value">{count}</span>
        </div>

        {count === 0 && (
          <div className="warning animate-fade">
            ⚠ Minimum limit reached
          </div>
        )}

        <div className="btn-group">
          <button
            onClick={decrement}
            disabled={count === 0}
            className="btn btn-danger"
          >
            -
          </button>

          <button onClick={reset} className="btn btn-gray">
            Reset
          </button>

          <button onClick={increment} className="btn btn-success">
            +
          </button>
        </div>
      </div>

    </div>
  );
}
