console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write or modify code below this line --v--
for (const key in languages) {
  const option = document.createElement("option")
  select.append(option)
  option.value = key
  option.textContent = languages[key];
}
// --^-- write or modify code above this line --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write or modify code below this line --v--

// --^-- write or modify code above this line --^--

/* 

Your task is to fill this list with list items 
containing anchor tags. Use the `nav` object in 
a `for...in` loop.

Guidelines:

- Write a `for...in` loop for the `nav` object.
- In each iteration:
  - Create a list item and an anchor tag.
  - Set the anchor's `href` and `textContent` properties 
  using values from the `nav` object, accessed via bracket 
  notation and the iterator variable.
  - Append the list item and anchor tag to their respective 
  parent elements.
 */