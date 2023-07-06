const grid = document.querySelector('.gridContainer');


for(let j =0; j < 16; j++){
    const spaces = document.createElement('div');
    spaces.classList.add('gridSquare');
    grid.appendChild(spaces);
}



