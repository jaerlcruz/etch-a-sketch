function initCanvas(size) {
    const canvas = document.querySelector('#canvas');
    for (let i=0; i < size; i++) {
        const col = document.createElement('div');
        col.className = "col"
        for (let j=0; j < size; j++) {
        const div = document.createElement('div');
        div.className = "pixel"
        div.setAttribute('style', 'background: #fff')
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = '#AED9E0';
        })
        col.appendChild(div)
        }
        canvas.appendChild(col)
    }
}

function changeCanvas(size) {
    const canvas = document.querySelector('#canvas');
    canvas.innerHTML = "";
    initCanvas(size)
    // const size = prompt("New canvas size?");
    // if (size > 100) {
    //     alert("Try a smaller size please!")
    //     initCanvas(100);
    // }
    // else {
    //     initCanvas(size);
    // }
}

function rainbow(pix) {
    console.log("This is rainbow() speaking!")
    const colors = ['#AED9E0', '#FFA69E', '#FAF3DD', '#F3BE68', '#AA8774']
    // const pix = document.querySelector('.pixel');
    let random = Math.floor(Math.random() * 5);
    pix.addEventListener("mouseover", () => {
        pix.style.backgroundColor = colors[random];
    })
}

function changeColor(pix, color) {
    console.log("This is changeColor() speaking!")
    pix.addEventListener("mouseover", () => {
        pix.style.backgroundColor = color;
    })
}

function gradual(pix) { //FIXME
    console.log("This is gradual() speaking!");
    opac = 0
    // grad.style.backgroundColor = `rgba(0,0,0${opac})`
    pix.addEventListener("mouseover", () => {
        let grad = document.createElement('div');
        grad.className = 'grad'
        grad.setAttribute('style', `background: rgba(0,0,0, 0.05); width: 100%; height: 100%;`)
});
}

const rbbtn = document.querySelector('#colorful');
rbbtn.addEventListener('click', () => {
    const pxs = document.querySelectorAll('.pixel');
    for (px of pxs){
        rainbow(px);
    };
});

initCanvas(16)

let canvasSize = document.getElementById('canvassize');

canvasSize.oninput = function() {
    changeCanvas(this.value);
};

let clr = document.getElementById('colorpick');

clr.addEventListener("input", () => {
    const pxs = document.querySelectorAll('.pixel');
    for (px of pxs) {
        changeColor(px, clr.value)
    }});

let lowopac = document.getElementById('graduallyDark');

lowopac.addEventListener("click", () => {
    const pxs = document.querySelectorAll('.pixel');
    for (px of pxs) {
        gradual(px);
    }
})