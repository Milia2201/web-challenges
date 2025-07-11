import React from "react";
import "./styles.css";

const animals = [
  { id: "1", name: "Dog", habitat: "Domestic Animal", emoji: "🐕" },
  { id: "2", name: "Cat", habitat: "Domestic Animal", emoji: "🐈" },
  { id: "3", name: "Hamster", habitat: "Domestic Animal", emoji: "🐹" },
  { id: "4", name: "Parrot", habitat: "Domestic Animal", emoji: "🦜" },
  { id: "5", name: "Fish", habitat: "Domestic Animal", emoji: "🐠" },

  { id: "6", name: "Fox", habitat: "Forest", emoji: "🦊" },
  { id: "7", name: "Bear", habitat: "Forest", emoji: "🐻" },
  { id: "8", name: "Owl", habitat: "Forest", emoji: "🦉" },
  { id: "9", name: "Deer", habitat: "Forest", emoji: "🦌" },
  { id: "10", name: "Hedgehog", habitat: "Forest", emoji: "🦔" },

  { id: "11", name: "Whale", habitat: "Ocean", emoji: "🐋" },
  { id: "12", name: "Dolphin", habitat: "Ocean", emoji: "🐬" },
  { id: "13", name: "Crab", habitat: "Ocean", emoji: "🦀" },
  { id: "14", name: "Lobster", habitat: "Ocean", emoji: "🦞" },
  { id: "15", name: "Shark", habitat: "Ocean", emoji: "🦈" },

  { id: "16", name: "Eagle", habitat: "Mountains", emoji: "🦅" },
  { id: "17", name: "Goat", habitat: "Mountains", emoji: "🐐" },
  { id: "18", name: "Wolf", habitat: "Mountains", emoji: "🐺" },
  { id: "19", name: "Snow Leopard", habitat: "Mountains", emoji: "🐆" },
  { id: "20", name: "Yak", habitat: "Mountains", emoji: "🐃" },
];

const habitats = ["Mountains", "Ocean", "Forest", "Domestic Animal"];

export default function App() {
  return <h1>Animal Filter</h1>;
}

/* 1. **Set Up State for Habitat**

- Create a `useState` variable to store the selected habitat.
- Initialize it with an empty string ("").

2. **Render Habitat Buttons**
- Use `.map()` on the `habitats` array to generate a button for each habitat.
- Each button should:
    - Have a key prop.
    - Include a `className` of `button` for styling. (This class is already defined)
    - Use an `onClick` event to set the selected habitat in state when clicked.

3. **Filter the Animals**
- Inside your `App` component, create a new variable that stores the animals to display.
- Use `.filter()` to include only those animals where the habitat matches the selected habitat in state.

4. **Display the Animals**
- Use `.map()` to render a list of the filtered animals in your JSX.
- Each animal should be a list item that display its `name` and `emoji`.
> The elements ul and li already have some basic styling.

## Bonus: Highlight the Selected Button

- Update the button's `className` to visually indicate when it's selected.
- Set the button's background color to `"lightblue"` if its habitat matches the selected habitat in state.

- Hint: You can make use of a ternary operator. */