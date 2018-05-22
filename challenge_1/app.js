let app = {};

//find the appropriate DOM elements
app.bannerDOM = document.getElementsByClassName('banner')[0];
app.boardDOM = document.getElementById('board');
app.squaresDOM = Array.from(document.getElementsByClassName('square'));
app.buttonDOM = document.getElementsByClassName('reset-button')[0];


//board Setup (model)
app.win = {
    X: 0,
    O: 0
};
app.current = 'X';
app.game = 'false';
app.next={
    X: 'O',
    O: 'X'
};
app.board = {
    X: Array(9).fill(0),
    O: Array(9).fill(0),
};


//determine winner
app.winningArrays = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

app.getWinner = function(boardArray) {
    return app.winningArrays.some((winningArray) => {
        let total = winningArray.reduce((sum, squareIndex) => sum + boardArray[squareIndex], 0);
        return total === 3;
    })
}

//detect full board
app.isFullBoard = function(){
    return app.squaresDOM.every((node) => node.innerHTML);
}

//reset board
app.resetBoard = function() {
    app.squaresDOM.forEach((node) => {
        node.innerHTML = '';
    });
    app.board.X = Array(9).fill(0);
    app.board.O = Array(9).fill(0);
    app.bannerDOM.innerText = `Game Start with player ${app.current}`;
    app.game = true;
}


//Controller: 
//add click event listener to restart button
app.buttonDOM.addEventListener('click', function(event){
    event.preventDefault();
    app.current = 'X';
    app.resetBoard();
})

//add click event listener to the board
app.boardDOM.addEventListener('click', function(event) {
    if (!app.game) {
        app.resetBoard();
    } else {
        let squareDOM = event.target; 
        if (squareDOM.innerHTML === '') {
            squareDOM.innerHTML = app.current;
            app.board[app.current][squareDOM.id] = 1;
            if (app.getWinner(app.board[app.current])) {
                app.bannerDOM.innerHTML = `Winner is player ${app.current}!`;
                app.win[app.current]++;
                app.game = false;
                return;
            }
            app.current = app.next[app.current];
            if (app.isFullBoard()) {
                app.bannerDOM.innerHTML = `Draw!`;
                app.game = false;
            } else {
                app.bannerDOM.innerHTML = `Next step: player ${app.current}`;
            }
        }
    }
    
})

