// Create a grid of square divs
const grid = document.querySelector("#grid");

let sideSize = 16;
let gridSize = 256;

function makeGrid(gridSize) {
    for (i = 1; i <= gridSize; i++) {
    const box = document.createElement("div");
    box.setAttribute("id", "box" + i);
    box.setAttribute("onmouseover", "changeColor(this)")
    grid.appendChild(box);
    box.style.cssText = `height: calc(100%/${sideSize}); width: calc(100%/${sideSize});`;
    }
}
makeGrid(gridSize);


// Apply css properties 
grid.style.cssText = "height: 500px; width: 500px; display: flex; flex-wrap: wrap;"
                   + "border: solid 2px black;";

document.body.style.cssText = "display: flex; flex-direction: column; align-items: center;";

// Add hovering effect that changes color of boxes
let color = "black"

function changeColor(ele) {
    ele.style.backgroundColor = color;
}

// Make divs containers for gridChanges and colorGrid
const options = document.createElement("div");
options.setAttribute("id", "options");
document.body.insertBefore(options, grid);

const colorChanges = document.createElement("div");
colorChanges.setAttribute("id", "colorChanges");
options.appendChild(colorChanges);

const gridChanges = document.createElement("div");
gridChanges.setAttribute("id", "gridChanges");
options.appendChild(gridChanges);


// Add button with popup
const buttonNewSize = document.createElement("button");
buttonNewSize.setAttribute("id", "newSizeButton");
buttonNewSize.textContent = "Resize Grid";
gridChanges.appendChild(buttonNewSize);

// Ask how large user wants the grid (max 100)
buttonNewSize.addEventListener("click", () => {
    let newSize = prompt("How many boxes per side? (Max: 100)", "16")
    if (newSize >= 1 && newSize <= 100) {
        sideSize = newSize;
        gridSize = sideSize * sideSize;
        removeGrid();
        makeGrid(gridSize);
    } else {
        alert("Invalid, Try again");
    }
});

// Replace current grid with new grid (space taken up should remain the same)
function removeGrid() {
    while (grid.lastElementChild) {
        grid.removeChild(grid.lastElementChild);
    }
}

// User color choice
const inputPickColor = document.createElement("input");
inputPickColor.setAttribute("id", "inputPickColor");
inputPickColor.setAttribute("type", "color");
colorChanges.appendChild(inputPickColor);

inputPickColor.addEventListener("change",() => {
    let chosenColor = inputPickColor.value;
    color = chosenColor;
    onmouseout = null;
});

// Randomized colors
const randomizeColor = document.createElement("button");
randomizeColor.setAttribute("id", "randomizeColor");
randomizeColor.textContent = "Randomize";
colorChanges.appendChild(randomizeColor);

function randomRGBColor() {
    let rValue = Math.floor(Math.random()*(255 + 1));
    let gValue = Math.floor(Math.random()*(255 + 1));
    let bValue = Math.floor(Math.random()*(255 + 1));
    let randomizedRGB = `rgb(${rValue},${gValue},${bValue})`;
    color = randomizedRGB;
}

randomizeColor.addEventListener("click", () => {
    onmouseout = () => {
        randomRGBColor();
    }
});

// Eraser (changes back to white)
const eraser = document.createElement("button");
eraser.setAttribute("id", "eraser");
eraser.textContent = "Eraser";
colorChanges.appendChild(eraser);

eraser.addEventListener("click", () => {
    color = "white";
    onmouseout = null;
});

// Create clear button
const buttonClear = document.createElement("button");
buttonClear.setAttribute("id", "clearButton");
buttonClear.textContent = "Clear";
gridChanges.appendChild(buttonClear);

buttonClear.addEventListener("click", () => {
    removeGrid();
    makeGrid(gridSize);
});

// Apply css to buttons
options.style.cssText = "display: flex; flex-direction: column; align-items: center;" 
                      + "width: 250;";

colorChanges.style.cssText = "display: flex; gap: 10px";

gridChanges.style.cssText = "display: flex; gap: 10px; margin: 10px;";