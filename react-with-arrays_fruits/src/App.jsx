import Card from "./components/Card";

const fruits = [
  {
    id: 1,
    name: "raspberry",
    color: "red",
  },
  {
    id: 2,
    name: "dragonfruit",
    color: "pink",
  },
  {
    id: 3,
    name: "blackberry",
    color: "black",
  },
  {
    id: 4,
    name: "peach",
    color: "orange",
  },
  {
    id: 5,
    name: "blueberry",
    color: "blue",
  },
];

export default function App() {
  const fruits = [];

  return (
    <div className="app">
      <Card name="🍌 banana" />
    </div>
  );
}

/* 

Use the array method `map` to create a Card component for each fruit in your array. 
Use the name of each object as the text of the component and the id as the key prop.

## Bonus

Change the `Card` component so that it receives a `color` prop and set the background-color 
of the Card to this value. Use the color property of each fruit object for this prop.

- Hint: check the `./src/components/Card.css` file for some cues as to how to handle having 
the colors change automatically */

