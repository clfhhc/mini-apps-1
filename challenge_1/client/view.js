//view related

//find the appropriate DOM elements
app.bannerDOM = document.getElementsByClassName('banner')[0];
app.boardDOM = document.getElementById('board');
app.squaresDOM = Array.from(document.getElementsByClassName('square'));
app.resetButtonDOM = document.getElementsByClassName('reset-button')[0];
app.rotationButtonDOM = document.getElementsByClassName('rotation-button')[0];
app.pointsDOM = document.getElementsByClassName('points')[0];

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

//read board
app.readBoardStatus = function() {
    app.squaresDOM.forEach((node, index) => {
        node.innerHTML = (app.board.X[index] && 'X') || (app.board.O[index] && 'O') || '';
    })
}