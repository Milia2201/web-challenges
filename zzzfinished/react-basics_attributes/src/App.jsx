import "./styles.css";

export default function App() {
  return (
  <article className="article">Replace me with an article
    <h2 className="article__title"> text of my choice</h2>
    <label htmlFor="inputWithLabel"></label>
    <input id="inputWithLabel"
    type="text" />
    <a className="article__link" href="https://bulbapedia.bulbagarden.net/wiki/Snorlax_(Pok%C3%A9mon)">My favorite Pokemon</a>
  </article>);
}


/* Write an `Article` component and use it to replace the given `<div>`.

Your component should contain the following parts:

- an `<article>` as a wrapper HTML element with the class `article`
- an `<h2>` with the class `article__title` and a text of your choice



!!!!! WHAT KIND OF A CONNECTION DO YOU WANT??
!!!!! - a `<label>` and `<input>` tag connected with `id` and `htmlFor` (!) attributes



- an `<a>` tag with the class `article__link` as well as text content and `href` attribute of your 
choice (What about a Wikipedia article?) */