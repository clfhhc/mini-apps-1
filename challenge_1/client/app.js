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

app.rotation = {
    stay: undefined,
    left: function(boardArray) {
            let order = [0, 1, 2, 5, 8, 7, 6, 3];
            let temp = boardArray.slice(0,2);
            for (let i = 0; i < order.length ; i++) {
                if (i === order.length-1) {
                    boardArray[order[i]] = temp[1];
                } else if (i === order.length-2) {
                    boardArray[order[i]] = temp[0];
                } else {
                    boardArray[order[i]] = boardArray[order[i+2]];
                }
            }
        },
    right: function(boardArray) {
                let order = [0, 1, 2, 5, 8, 7, 6, 3];
                console.log(boardArray);
                let temp = [boardArray[6],boardArray[3]].slice();
                for (let i = order.length - 1; i >= 0 ; i--) {
                    if (i === 0) {
                        boardArray[order[i]] = temp[0];
                    } else if (i === 1) {
                        boardArray[order[i]] = temp[1];
                    } else {
                        boardArray[order[i]] = boardArray[order[i - 2]];
                    }
                }
                console.log(boardArray);
            }
}


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


