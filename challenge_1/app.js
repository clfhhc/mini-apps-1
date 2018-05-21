//find the appropriate DOM elements
let bannerDOM = document.getElementsByClassName('banner')[0];
let boardDOM = document.getElementById('board');
let squaresDOM = Array.from(document.getElementsByClassName('square'));

//board Setup
let current = 'X';
let next={
    X: 'O',
    O: 'X'
}
bannerDOM.innerText = `Game Start with player ${current}`;
let board = {
    empty: Array(9).fill(''),
    X: Array(9).fill(0),
    O: Array(9).fill(0),
}
board.empty.forEach((value,index) => {
    squaresDOM[index].innerHTML = value;
})

//add click event listener
boardDOM.addEventListener('click', function(event) {
    let squareDOM = event.target.tagName.match(/span/i) ? event.target : event.target.getElementsByClassName('square')[0]; 
    if (squareDOM.innerHTML === '') {
        squareDOM.innerHTML = current;
        board[current][squareDOM.id] = 1;
        current = next[current]
    }
})

