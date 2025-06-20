console.clear();

const inputColor = document.querySelector('[data-js="input-color"]');
const inputRadius = document.querySelector('[data-js="input-radius"]');
const inputRotation = document.querySelector('[data-js="input-rotation"]');
const box = document.querySelector('[data-js="box"]')

inputColor.addEventListener("input", () => {
    box.style.backgroundColor = `hsl(${inputColor.value}deg, 50%, 50%)`
})

inputRadius.addEventListener("input", () => {
    const radius = inputRadius.value;
    box.style.borderRadius = `${radius}%`;
})

inputRotation.addEventListener("input", () => {
    const rotation = inputRotation.value;
    box.style.transform = `rotate(${rotation}deg)`
})

