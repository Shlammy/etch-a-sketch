// Global Variables
const grid = document.querySelector('.gridContainer');
const gridSquares = document.querySelectorAll(".gridSquare");
let root = document.documentElement;

// Loop to create Grid, Add classList, Event Listener, Initial Call for Grid
function createGrid(numberOfSquares){
    for(let i = 0; i < Math.pow(numberOfSquares, 2); i++){
        const spaces = document.createElement('div');
        spaces.classList.add('gridSquare');
        grid.appendChild(spaces);
    }
}

// Game initial call
createGrid(16);

// Grid Space Color

// Call prompt, reset grid size to prompt input
function resetGrid() {
    var userAnswer = prompt("How many squares per side? (Min: 1 Max: 100)");
    root.style.setProperty('--newNumberOfSquaresCss', userAnswer)

    // Remove old grid & Call new grid
    while (grid.firstChild) { 
		grid.removeChild(grid.firstChild);
	}

    createGrid(userAnswer);
}





