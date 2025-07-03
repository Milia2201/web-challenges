console.clear();

export default function App() {
  function handleClick() {
    console.log("yeay");
  }

  return (
    <div>
      <Button color="red" text="Button :)" onClickB={handleClick} />
      <Button color="green" text="Button :(" disabled onClickB={handleClick} />
    </div>
  );
}

function Button({ color, disabled=false, text, onClickB }) {
  return (
    <button disabled={disabled} style={{ color: color }} onClick={onClickB}>
      {text}
    </button>
  );
}
