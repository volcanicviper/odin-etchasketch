const container = document.getElementById('container');
let fragment = document.createDocumentFragment();

for (var i = 0; i < 256; ++i) {
     div = document.createElement('div');
    fragment.appendChild(div);
}

container.appendChild(fragment);