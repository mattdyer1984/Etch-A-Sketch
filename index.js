const target = document.querySelector('#container');
const grid = document.querySelector('#gridsize')
const submit = document.querySelector('#submit')


const squareWidth = 45;
function etch(gridsize) {
    target.style.display = 'grid';
target.style.gridTemplateColumns =  `repeat(${gridsize}, 45px)`;
for (let i = 0; i < gridsize * gridsize; i++) {
    const div = document.createElement('div'); 
    div.classList.add('paint')
    div.style.border = '2px solid black';
    div.style.width = `${squareWidth}px`;
    div.style.height = `${squareWidth}px`;
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'blue';
    })

    target.appendChild(div);
}

}

  submit.addEventListener('click', () => {
   const gridsize = grid.value
   etch(gridsize)
  })