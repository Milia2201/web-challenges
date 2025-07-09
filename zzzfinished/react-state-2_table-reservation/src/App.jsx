import Counter from "./components/Counter";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(0);
  function handleDecrement(value) {
    if (people > 0) {
      setPeople(people - value);
    }
  }
  function handleIncrement(value) {
    setPeople(people + value);
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onDecrement={handleDecrement} onIncrement={handleIncrement} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
