//find the appropriate DOM elements
let bannerDOM = document.getElementsByClassName('banner')[0];
let boardDOM = document.getElementById('board');
let squaresDOM = Array.from(document.getElementsByClassName('square'));
let buttonDOM = document.getElementsByClassName('reset-button')[0];

//board Setup (model)
let current = 'X';
let game = 'false';
let next={
    X: 'O',
    O: 'X'
};
let board = {
    empty: Array(9).fill(''),
    X: Array(9).fill(0),
    O: Array(9).fill(0),
};


//determine winner
let winningArrays = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let getWinner = function(boardArray) {
    return winningArrays.some((winningArray) => {
        let total = winningArray.reduce((sum, squareIndex) => sum + boardArray[squareIndex], 0);
        return total === 3;
    })
}

//reset board
let resetBoard = function() {
    board.empty.forEach((value,index) => {
        squaresDOM[index].innerHTML = value;
    });
    board.X = Array(9).fill(0);
    board.O = Array(9).fill(0);
    bannerDOM.innerText = `Game Start with player ${current}`;
    game = true;
}


//Controller: 
//add click event listener to restart button
buttonDOM.addEventListener('click', function(event){
    event.preventDefault();
    current = 'X';
    resetBoard();

})

//add click event listener to the board
boardDOM.addEventListener('click', function(event) {
    console.log(game);
    if (!game) {
        resetBoard();
    } else {
        let squareDOM = event.target.tagName.match(/span/i) ? event.target : event.target.getElementsByClassName('square')[0]; 
        if (squareDOM.innerHTML === '') {
            squareDOM.innerHTML = current;
            board[current][squareDOM.id] = 1;
            if (getWinner(board[current])) {
                bannerDOM.innerHTML = `Winner is player ${current}`;
                game = false;
                return;
            }
            current = next[current];
        }
    }
    
})

