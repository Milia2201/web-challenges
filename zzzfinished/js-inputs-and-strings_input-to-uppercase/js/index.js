console.clear();
const input = document.querySelector('[data-js="first-input"]');
const button = document.querySelector('[data-js="button-uppercase"]');

button.addEventListener("click", () => {
  const oldValue = input.value;
  const newValue = oldValue.toUpperCase();
  input.value = newValue;
});
