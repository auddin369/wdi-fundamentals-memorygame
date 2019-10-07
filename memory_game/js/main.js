var cards = ["queen", "queen", "king", "king"]
var cardsInPlay = [];

function checkForMatch(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		console.log("You found a match!");
	}
	else {
		console.log("Sorry, try again.");
	};
};

function flipCards(cardID){
	cardsInPlay.push(cardID);
	if(cardsInPlay.length === 2){
		console.log("User flipped " + cards[cardID]);
		checkForMatch();
	}
	else {;
	console.log("User flipped " + cards[cardID]);
	};
};

flipCards(0);
flipCards(1);
