const container = document.getElementById('container');
let fragment = document.createDocumentFragment();

for (var i = 0; i < 256; ++i) {
     div = document.createElement('div');
    fragment.appendChild(div);
}
container.appendChild(fragment);
const cells = container.querySelectorAll("div");

function randomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

cells.forEach((item) => {
    item.addEventListener("mouseover", (event) => { 
        event.target.style.backgroundColor = randomColor();
    });
});