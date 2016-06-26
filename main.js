var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*
if (cardOne === cardTwo) {
	alert('You found a match!');	
} else {
  alert('Sorry, try again.');
}
*/

window.onload = function() {
var getBoard = document.getElementById('game-board');
 for(var i=0; i < 4; i++){
   var newCard = document.createElement('div').appendChild('game-board');
   getBoard.className = 'cards';
}



