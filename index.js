const target = document.querySelector("#container");
const grid = document.querySelector("#gridsize");
const submit = document.querySelector("#submit");
const reset = document.querySelector('#reset');
const colour = document.querySelector('#colours');

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function etch(gridsize, userColour) {
  const squareWidth = Math.floor(1200/gridsize);
  target.style.display = "grid";
  target.style.gridTemplateColumns = `repeat(${gridsize}, ${squareWidth}px)`;
  removeAllChildNodes(target); 

  for (let i = 0; i < gridsize * gridsize; i++) {
    const div = document.createElement("div");
    div.classList.add("paint");
    div.style.border = "2px solid black";
    div.style.width = `${squareWidth}px`;
    div.style.height = `${squareWidth}px`;
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = userColour;
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
  etch(gridsize, colour.value); 
});


colour.addEventListener("change", () => {
  userColour = colour.value;
  gridsize = grid.value;
  etch(gridsize, userColour); 
});
