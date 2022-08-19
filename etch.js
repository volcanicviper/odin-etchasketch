const button = document.querySelector('button');
const container = document.getElementById('container');
let fragment = document.createDocumentFragment();

function createGrid(size) {
    container.style.setProperty('--grid-size', size);
    for (var i = 0; i < size*size; ++i) {
        let div = document.createElement('div');
        div.addEventListener("mouseover", (event) => { 
            event.target.style.backgroundColor = randomColor();
        });
        container.appendChild(div);
   }
}

createGrid(16);

button.addEventListener("click", (event) => {
    let inputSize = 101;
    while (inputSize > 100 || inputSize < 1) {
     inputSize = prompt("Please input the grid size (1-100)");
    }
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid(inputSize);
});

function randomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}