import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();

export const server = createServer((request, response) => {
  const age = chance.age();
  const name = chance.name();
  const profession = chance.profession();

  const responseString = `Hello, my name is ${name} and I am ${age} years old. 
  I am a ${profession}.`;

  response.end(responseString);
  return;
});

/* -


- Make the server respond with the string. Reload your browser on the port you've created 
several times to check that it works. */
