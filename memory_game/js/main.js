var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"},	
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"}	
];
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
	cardsInPlay.push(cards[cardID].rank);
	if(cardsInPlay.length === 2){
		console.log("User flipped " + cards[cardID].rank);
		console.log(cards[cardID].cardImage);
		console.log(cards[cardID].suit);
		checkForMatch();
	}
	else {;
		console.log("User flipped " + cards[cardID].rank);
		console.log(cards[cardID].cardImage);
		console.log(cards[cardID].suit);
	};

};

flipCards(0);
flipCards(2);
