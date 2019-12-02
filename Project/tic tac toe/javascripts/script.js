var originalBoardPlayer1;
var originalBoardPlayer2;

var currentPlayer = 0;

const playerOne = 'X';
const playerTwo = '0';
const winArray = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
];

// Cells array - take all html elements with class cell and put them in array
const cells = document.querySelectorAll('.cell');
startGame();
// The function
function startGame() {
    // Remove the end game div
    document.querySelector(".endgame").style.display = "none";

    // Array of numbers from 0 to 9
    originalBoardPlayer1 = [];
    originalBoardPlayer2 = [];

//  Loop run from the begin till all the length of the table
    for (var i=0; i < cells.length; i++){
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick, false );
    }
}

// This function runs every click and change player after
function turnClick (cube){
    if (currentPlayer == 0){
        turn (cube.target.id , playerOne, originalBoardPlayer1);
        currentPlayer = 1;

    }
    else {
        turn (cube.target.id , playerTwo, originalBoardPlayer2);
        currentPlayer = 0;

    }
}

function turn(cubeID, player, originalboard) {
    originalboard.push((parseInt(cubeID)));
    document.getElementById(cubeID).innerText = player;

    let gamewon = checkWin(originalboard);
    if (gamewon){
        gameOver(player);
    }

}

function checkWin(originalboard) {

        for (var i=0; i< winArray.length; i++){
        if (arrayContainsAnotherArray(winArray[i], originalboard)){
            console.log("CONTAINS");
            return true;
        }
    }
}

function arrayContainsAnotherArray(needle, haystack){
    for(var i = 0; i < needle.length; i++){
        if(haystack.indexOf(needle[i]) === -1)
            return false;
    }
    return true;
}

function gameOver(player) {
    console.log(player + " win")
    startGame();

}

