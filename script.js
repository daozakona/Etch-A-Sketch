const rangeOfBoxes = document.querySelector("#range-of-boxes");
const sketch = document.querySelector("#box");
const div = document.createElement("div");

rangeOfBoxes.addEventListener("input",e => {
    changeAmountOfBoxes(e.target.value);
})

sketch.addEventListener("mouseover", e => {
    if( e.target.classList[0] != "box") {
        e.target.classList.toggle("color");
    }
})



function changeAmountOfBoxes(amount) {
    sketch.innerHTML = "";
    while(+sketch.childElementCount < (+amount)**2) {
        sketch.appendChild(div.cloneNode());
    }
    sketch.style.gridTemplateColumns = `repeat(${+amount},1fr)`;
    sketch.style.gridTemplateRows = `repeat(${+amount},1fr)`;
    console.log(sketch.childElementCount);
}
changeAmountOfBoxes(50)
