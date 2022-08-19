const button = document.querySelector('button');
const container = document.getElementById('container');
let fragment = document.createDocumentFragment();

function createGrid(size) {
    container.style.setProperty('--grid-size', size);
    for (var i = 0; i < size*size; ++i) {
        let div = document.createElement('div');
        fragment.appendChild(div);
   }
   container.appendChild(fragment);
}

createGrid(16);
let cells = container.querySelectorAll("div");

button.addEventListener("click", (event) => {
    let inputSize = prompt("Please input the grid size (i.e. 16 for 16x16)");
    container.textContent = '';
    createGrid(inputSize);
    cells = container.querySelectorAll("div");
});

function randomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

cells.forEach((item) => {
    item.addEventListener("mouseover", (event) => { 
        event.target.style.backgroundColor = randomColor();
    });
});