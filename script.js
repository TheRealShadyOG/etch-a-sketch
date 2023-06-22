// Create a grid of square divs
const grid = document.querySelector("#grid");

let gridSize = 16;

let gridHeight = Math.sqrt(gridSize);
let gridWidth = Math.sqrt(gridSize);

for (i = 1; i <= gridSize; i++) {
    const box = document.createElement("div");
    box.setAttribute("id", "box" + i);
    box.setAttribute("onmouseover", "changeColor(this)")
    grid.appendChild(box);
    box.style.cssText = `height: calc(100%/${gridHeight}); width: calc(100%/${gridWidth});`;
}

// Apply css properties 
grid.style.cssText = "height: 500px; width: 500px; display: flex; flex-wrap: wrap;"
                   + "border: solid 2px black;";

document.body.style.cssText = "display: flex; flex-direction: column; align-items: center;";

// Add hovering effect that changes color of boxes
let color = "black"

function changeColor(ele) {
    ele.style.backgroundColor = color;
}

// Add button with popup
const options = document.createElement("div");
options.setAttribute("id", "options");
document.body.insertBefore(options, grid);

const buttonNewSize = document.createElement("button");
buttonNewSize.setAttribute("id", "button");
buttonNewSize.textContent = "Resize Grid";
options.appendChild(buttonNewSize);

// Ask how large user wants the grid (max 100)
// Replace current grid with new grid (space taken up should remain the same)

// Create color options
// Randomized colors
// User color choice
// Progressively darken (10% darker per mouse over)
// Eraser (changes back to white)

// Create clear button
