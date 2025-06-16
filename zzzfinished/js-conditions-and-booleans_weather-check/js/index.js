// Change this value to test different "weather" conditions.
const weather = "sunny"

// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const temperature = 20; 

switch (weather){
    case ("rainy"):
        console.log("It's raining, don't forget your umbrella!");
        break;
    case ("sunny"):
        temperature > 20 ? console.log("It's sunny and warm!") : console.log("It's sunny, but a bit chilly!");
        break;
    case ("snowy"):
        console.log("It's snowing, stay warm!");
        break;
    default:
        console.log("I'm not sure what the weather is like.");
        
}

/* 
### Part 2: Adding Conditions

- Now we’ll extend the `switch` statement by adding a second variable `temperature`, which contains a `number` (the current temperature in degrees Celsius).
- Modify the `switch` statement so that it also takes into account the `temperature`, and logs different messages based on the `weather` and the `temperature`.
  - New Conditions:
  - If the weather is "sunny" and the temperature is above 20°C → "It's sunny and warm!"
  - If the weather is "sunny" and the temperature is 20°C or below → "It's sunny, but a bit chilly!"
  - If the weather is "rainy" → "It's raining, don't forget your umbrella!"
  - If the weather is "snowy" and the temperature is below 0°C → "Freezing snow!"
  - For any other input → "I'm not sure what the weather is like."

> 💡 Tip: Use the `break` statement to avoid the "fall-through" effect.


### Running the Code

> 💡 Since this project is JavaScript only, there is nothing to preview in the browser. You will run the JavaScript code directly in the terminal using Node.js.

- To run your code:
  - Open your terminal.
  - Navigate to the folder where `index.js` is located.
  - Run `npm run start` to execute the `index.js` file using Node.js.
  - The script will run using Node.js, and the output will be logged in the terminal.
  - Check the terminal output to see if the correct messages are displayed based on the weather conditions and temperature. */