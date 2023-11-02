function initCanvas() {
    const canvas = document.querySelector('#canvas');
    for (let i=0; i < 16; i++) {
        const col = document.createElement('div');
        for (let j=0; j < 16; j++) {
        const div = document.createElement('div');
        div.setAttribute('style', 'background: #fff; width: 50px; height: 50px;');
        div.onmouseover = function() {
            this.style.backgroundColor = 'gray';
        }
        col.appendChild(div)
        }
        canvas.appendChild(col)
    }
}

initCanvas()