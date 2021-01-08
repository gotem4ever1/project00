//Set up a variable for gameover
//Set up players (X or O, who going first)
var gameOver = false;


var player = 'O'
if (confirm('Is O goes first?') === true) {
  player = 'O';

} else {
  player = 'X';
}

//set up squares with array
var squares = new Array();
squares[0] = 0;
squares[1] = 1;
squares[2] = 2;
squares[3] = 3;
squares[4] = 4;
squares[5] = 5;
squares[6] = 6;
squares[7] = 7;
squares[8] = 8;

//set up winningCombinations with array
var winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

//reset variable to empty array
//reset variable for the game being over, make it equals to false

squares = [];
gameOver = false;

//set up function squareClick with square.
//set up variable equals to html id parameter with value.
//set up a variable that is set equal to the JavaScript method call
//parseInt() passing as an argument square.substring(3, 4),
// subtract one from the result of the parseInt method call (represent the index of the array of squares where the user clicked)

function squareClick (square) {
  var idElement = document.getElementById(square).value;
  var parseSquare = ((parseInt(square.substring(3, 4))) - 1);
  if (idElement === '') { //if variable is equal to explicit string
    document.getElementById(square).value = player; //html element shows when parameter square id's value equals to player
    squares[parseSquare] = player; //update the element at the index to variable player
    checkAndSwap();
  }
}

function checkAndSwap () {
  checkForWinner('X'); //setup function seperate between players

  !gameOver && checkForWinner('O');

  if (!gameOver) {   //checks if the player variable is equal to O, if true, set player to X
    if (player === 'O')
      player = 'X';
    else {
      player = 'O';
    }
  }
}

function playAgain () {  //set up function for playagain
  var response = confirm('Play Again?');
  if (response === true) {
    alert('let\'s Play!');
    location.reload();
  } else {
    alert('Thanks for playing!');
  }
}

function checkForWinner (value) { //set up function for checkforwinner with value
  for (var i = 0; i < winningCombinations.length; i++) { //statement for determine the winner
    if (squares[winningCombinations[i][0]] === value && squares[winningCombinations[i][1]] === value && squares[winningCombinations[i][2]] === value) {
      alert(value + ' Won the Game!');
      gameOver = true;
    }

  }

if (gameOver === true) { //check gameover and call function playagain
    playAgain();
  }
}
