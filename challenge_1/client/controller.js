//Controllers:
//prompts players for names
app.alias.X = prompt('Player X: please enter your name', 'X');
app.alias.O = prompt('Player O: please enter your name', 'O');
let boolean = (app.alias.X) && (app.alias.O) && (app.alias.X !== 'X') && (app.alias.O !== 'O');
if (boolean) {
    app.text = `X : O = ${app.alias.X} : ${app.alias.O}`;
    app.pointsDOM.innerHTML = app.text;
} else {
    app.text = `X : O`;
}

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
                app.pointsDOM.innerHTML = app.text + ` = ${app.win.X} : ${app.win.O}`;
                app.game = false;
                return;
            }
            app.current = app.next[app.current];
            if (app.isFullBoard()) {
                app.bannerDOM.innerHTML = `Draw!`;
                app.game = false;
            } else {
                app.bannerDOM.innerHTML = `Next step: player ${app.current}`;
                app.rotationLeft(app.board.X);
                app.rotationLeft(app.board.O);
                app.readBoardStatus();
            }
        }
    }
})

