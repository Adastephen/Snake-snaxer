// call the board div in the DOM

// design the grid into the board
function createGrid() {
    let board = document.getElementById('#board');
    
    board.style.gridTemplateColumns = `repeat(4, 1fr)`;
    board.style.gridTemplateRows = `repeat(4, 1fr)`;
    board.style = 'border: 1px solid black; padding: 10px;';

    // create 4 squares
    // add event listeners to each square

    for (let a = 0; a < 4; a++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'blue';
        });
        square.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'white';
        });
        board.appendChild(square);
    };
};
createGrid();

// document.addEventListener('DOMContentLoaded', function() {
//     createGrid();
// });