console.clear();

/*
Let's calculate some interesting facts based on a user's age! 
The program expects the user to provide their age as a numerical input. 
The code for receiving this input is provided below.

Calculate the following:
1. The total number of days the person has lived.
2. The estimated number of remaining days, assuming an average life span of 80 years.
3. The percentage of life already lived, in relation to the expected life span.
4. The cumulative number of days the person has spent sleeping, assuming an average of 8 hours of sleep per day.

Log each result with a clear and descriptive message. 
Hint: You can combine text and variables using the `+` operator.

💡 For simplicity, ignore leap years.
*/

const currentAge = Number(process.argv[2]); // This takes the `<age>` entered in the command `node index.js <age>`.
let livedDays = currentAge * 365;
let daysTill80 = 80 * 365;
let remainingDays = daysTill80 - livedDays;
let liveLivedAlreadyInPercent = livedDays * 100 / daysTill80;
let daysSleeping = livedDays * 8 / 24;




console.log("Your current age is: " + currentAge);
console.log("You have lived " + livedDays + " days.");
console.log("You have " + remainingDays + " days left (on average).");
console.log("You already lived " + liveLivedAlreadyInPercent +"% of your life (on average).");
console.log("You slept " + daysSleeping + " days, when put together.");
console.log("Damn.. You old as hell.")