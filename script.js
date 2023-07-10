// Global Variables
const grid = document.querySelector('.gridContainer');

// Loop to create Grid, Add classList, Event Listener
function createGrid(){
    for(let i = 0; i < 16; i++){
        for(let j = 0; j < 16; j++){
            const spaces = document.createElement('div');
            spaces.classList.add('gridSquare');
            spaces.addEventListener('mouseover', function(){spaces.style.backgroundColor = "black";});
            grid.appendChild(spaces);
        }
    }
}

createGrid();

// Reset Grid size to reflect user input.
function resetGrid() {
    var userAnswer = prompt("How many squares per side? (Maximum 100)");
    return userAnswer;
}






