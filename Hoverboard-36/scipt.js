const container = document.getElementById("container");
const colors = [
    "#52ff3b",
    "#1fffdd",
    "#1e8ef7",
    "#1c36fc",
    "#6b08ff",
    "#fa0aee",
    "#ff0d41",
    "#ffd000",
];

const SQUARE_NUMBERS = 500;
const colorPickedSquare = document.querySelector(".color-picked__square");
const colorPickedColor = document.querySelector(".color-picked__color");

for (let i = 0; i < SQUARE_NUMBERS; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));

    square.addEventListener("mouseleave", () => removeColor(square));

    container.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    setLastColor(color);
}

function removeColor(element) {
    element.style.backgroundColor = "#1d1d1d";
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function setLastColor(color) {
    colorPickedSquare.style.backgroundColor = color;
    colorPickedSquare.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    colorPickedColor.innerText = color;
}
