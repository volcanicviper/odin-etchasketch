const container = document.getElementById('container');
let fragment = document.createDocumentFragment();

for (var i = 0; i < 16; ++i) {
    for (var j = 0; j < 16; ++j) {
        div = document.createElement('div');
        fragment.appendChild(div);
    }
}

container.appendChild(fragment);