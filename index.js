const target = document.querySelector('#container');

target.style.display = 'grid';
target.style.gridTemplateColumns =  'repeat(16, 45px)';
const numRows = 16;
const numCols = 16;

const squareWidth = 45;

for (let i = 0; i < numRows * numCols; i++) {
    const div = document.createElement('div'); 
    div.style.border = '2px solid black';
    div.style.width = `${squareWidth}px`;
    div.style.height = `${squareWidth}px`;

    target.appendChild(div);
}