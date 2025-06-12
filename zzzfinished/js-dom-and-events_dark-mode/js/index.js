console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const switchToDarkModeButton = document.querySelector ('[data-js="dark-mode-button"]');
const switchToLightModeButton = document.querySelector ('[data-js="light-mode-button"]');
const toggleModeButton = document.querySelector ('[data-js="toggle-button"]');

switchToDarkModeButton.addEventListener("click", () => {
    bodyElement.classList.add("dark");
})
switchToLightModeButton.addEventListener("click", () => {
    bodyElement.classList.remove("dark");
})
toggleModeButton.addEventListener("click", () => {
    bodyElement.classList.toggle("dark");
})
