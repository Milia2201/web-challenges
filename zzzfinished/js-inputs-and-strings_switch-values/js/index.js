console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');
const secondInput = document.querySelector('[data-js="second-input"]')
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');
const switchButton = document.querySelector('[data-js="button-switch"]')

uppercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
  secondInput.value = secondInput.value.toUpperCase();
});

lowercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toLowerCase();
  secondInput.value = secondInput.value.toLowerCase();
});

switchButton.addEventListener("click", () => {
  const tempFirstInput = firstInput.value;
  const tempSecondInput = secondInput.value;
  firstInput.value = tempSecondInput;
  secondInput.value = tempFirstInput;
})
