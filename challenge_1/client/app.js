let app = {};

//board Setup (model)
app.win = {
    X: 0,
    O: 0
};

app.alias = {
    X:'',
    O:'',
}

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


