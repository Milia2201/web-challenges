import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount(count+1)
  }
function minusCount(){
  setCount(count-1)
}
  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={minusCount}
        >
          -
        </button>
        <button
          type="button"
          onClick={addCount }
        >
          +
        </button>
      </div>
    </div>
  );
}

