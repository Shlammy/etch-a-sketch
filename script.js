// Global Variables
const grid = document.querySelector('.gridContainer');
const gridSpaces = document.getElementsByClassName("gridSquare");
var root = document.documentElement;

// Function to call buttonListeners, loop to create grid & add classList 
function createGrid(numberOfSquares){
    buttonListeners();
    for(let i = 0; i < Math.pow(numberOfSquares, 2); i++){
        const spaces = document.createElement('div');
        spaces.classList.add('gridSquare');
        grid.appendChild(spaces);
    }
}

// Initial call for grid
createGrid(16);

// Function for button eventListeners
function buttonListeners() {
    const blackBtn = document.getElementById('blackBtn');
    const rainbowBtn = document.getElementById('rainbowBtn');
    const eraserBtn = document.getElementById('eraserBtn');
    const colorPicker = document.getElementById('colorPicker');

    blackBtn.addEventListener('click', () => {
        var color = 'black';
        trace(color);
    });

    rainbowBtn.addEventListener('click', () => {
        var color = 'rainbow';
        trace(color);
    });

    eraserBtn.addEventListener('click', () => {
        var color = 'eraser';
        trace(color);
    });

    colorPicker.addEventListener('click', () => {
        var color = colorPicker;
        trace(color);
    });
}

// Function to color grid spaces
function trace(color){
    // Add eventListeners to all squares, change backgroundColor to color value
    for (let i = 0; i < gridSpaces.length; i++) {
        gridSpaces[i].addEventListener('mouseover', function (e){
            if (color == 'black') {
                e.target.style.backgroundColor = "black";
            } else if (color == 'rainbow') {
                e.target.style.backgroundColor = randomColor();
            } else if (color == 'eraser') {
                e.target.style.backgroundColor = "white";
            } else {
                e.target.style.backgroundColor = colorPicker.value;
            }
        });
      }
}

// Function to call prompt, change grid size to reflect prompt input
function resetGrid() {
    var userAnswer = prompt("How many squares per side? (Min: 1 Max: 100)");
    root.style.setProperty('--newNumberOfSquaresCss', userAnswer)

    // Remove old grid & Call new grid within limit restraints
    while (grid.firstChild) { 
		grid.removeChild(grid.firstChild);
	}

    limit(userAnswer);
}

// Function to give an upper and lower limit for input
function limit(number) {
    if ((number <= 100) && (number > 0)) {
        createGrid(number);
    } else {
        alert('You must insert a number between 1 and 100');
        root.style.setProperty('--newNumberOfSquaresCss', 16);
        createGrid(16);
    }
} 

// Function returns random RGB value
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgb = "rgb(" + r + "," + g + "," + b + ")";
    return rgb;
}