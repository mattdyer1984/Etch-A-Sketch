const target = document.querySelector("#container");
const grid = document.querySelector("#gridsize");
const submit = document.querySelector("#submit");
const reset = document.querySelector('#reset');
const resetSquare = document.querySelector('.paint')


function etch(gridsize) {
  const squareWidth = Math.floor(1200/gridsize);
  console.log(squareWidth)
  target.style.display = "grid";
  target.style.gridTemplateColumns = `repeat(${gridsize}, ${squareWidth}px)`;
  for (let i = 0; i < gridsize * gridsize; i++) {
    const div = document.createElement("div");
    div.classList.add("paint");
    div.style.border = "2px solid black";
    div.style.width = `${squareWidth}px`;
    div.style.height = `${squareWidth}px`;
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "blue";
    });
    reset.addEventListener("click", () => {
        div.style.backgroundColor = "white";
      });
      div.addEventListener("click", () => {
        div.style.backgroundColor = "white";
      });

    target.appendChild(div);
  }
}

submit.addEventListener("click", () => {
  const gridsize = grid.value;
  etch(gridsize);
});
