const box = document.getElementById("box");
const div = document.createElement("div");
const rangeOfBoxes = document.getElementById("range-of-boxes");
let squares

rangeOfBoxes.addEventListener("input", (e) => {
    box.innerHTML = "";
    for(let i = 1; i<=rangeOfBoxes.value**2; i++) {
        box.appendChild(div.cloneNode())
    }
    box.style.gridTemplateColumns = `repeat(${rangeOfBoxes.value},1fr)`;
    box.style.gridTemplateRows = `repeat(${rangeOfBoxes.value},1fr)`;
    squares = Array.from(box.children);
    for(let i = 0; i<squares.length; i++) {
        squares[i].addEventListener("mouseover", (e) => {
            e.target.classList.toggle("color");
        })
    }
})




console.log(rangeOfBoxes.value);
