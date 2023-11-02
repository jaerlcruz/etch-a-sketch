function initCanvas(size) {
    const canvas = document.querySelector('#canvas');
    for (let i=0; i < size; i++) {
        const col = document.createElement('div');
        col.className = "col"
        for (let j=0; j < size; j++) {
        const div = document.createElement('div');
        div.className = "pixel"
        div.onmouseover = function() {
            this.style.backgroundColor = 'gray';
        }
        col.appendChild(div)
        }
        canvas.appendChild(col)
    }
}

function changeCanvas() {
    const canvas = document.querySelector('#canvas');
    canvas.innerHTML = "";
    const size = prompt("New canvas size?");
    if (size > 100) {
        alert("Try a smaller size please!")
        initCanvas(100);
    }
    else {
        initCanvas(size);
    }
}

initCanvas(40)