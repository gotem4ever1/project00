//Set up a variable for gameover
//players (X or O, who going first)
var gameOver = false;
<<<<<<< HEAD
var player = '0'
if (confirm('Is 0 goes first?') === true) {
  player = '0';
=======
var player = 'O'
if (confirm('Is O goes first?') === true) {
  player = 'O';
>>>>>>> dcf4a338351e19ed141e87454129225ab17211d4
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

squares = []; //reset variable

gameOver = false; //reset variable

function squareClick (square) { //set up function squareClick with square
  var idElement = document.getElementById(square).value;//variable equals to html id parameter with value
  var parseSquare = ((parseInt(square.substring(3, 4))) - 1); //variable equals to js parseInt which shows the index of the array of squares when user clicks
  if (idElement === '') {  //if variable is equal to explicit string
    document.getElementById(square).value = player;//html element shows when parameter square id's value equals to player
    squares[parseSquare] = player; //update the element to variable player
    checkAndSwap();
  }
}

function checkAndSwap () {
  checkForWinner('X'); //setup function seperate between players
<<<<<<< HEAD
  !gameOver && checkForWinner('0');

  if (!gameOver) {
    if (player === '0')
      player = 'X';
    else {
      player = '0';
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

=======
  !gameOver && checkForWinner('O');
  
  if (!gameOver) {
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

>>>>>>> dcf4a338351e19ed141e87454129225ab17211d4
  if (gameOver === true) { //check gameover and call function playagain
    playAgain();
  }
}
