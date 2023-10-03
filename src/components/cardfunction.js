
// const deck = () =>{
//     return[
//     {num: 1, type: "heart", icon: "BsSuitHeartFill", color: "red", display: "A"},
//     {num: 2, type: "heart", icon: "BsSuitHeartFill", color: "red", display: "2"},
//     {num: 3, type: "heart", icon: "BsSuitHeartFill", color: "red", display: "3"},
//     {num: 4, type: "heart", icon: "BsSuitHeartFill", color: "red", display: "4"},
//     {num: 5, type: "heart", icon: "BsSuitHeartFill", color: "red", display: "5"},
//     {num: 6, type: "heart", icon: "BsSuitHeartFill", color: "red", display: "6"},
//     {num: 7, type: "heart", icon: "BsSuitHeartFill", color: "red", display: "7"},
//     {num: 8, type: "heart", icon: "BsSuitHeartFill", color: "red", display: "8"},
//     {num: 9, type: "heart", icon: "BsSuitHeartFill", color: "red", display: "9"},
//     {num: 10, type: "heart", icon: "BsSuitHeartFill", color: "red", display: "10"},
//     {num: 11, type: "heart", icon: "BsSuitHeartFill", color: "red", display: "J"},
//     {num: 12, type: "heart", icon: "BsSuitHeartFill", color: "red", display: "Q"},
//     {num: 13, type: "heart", icon: "BsSuitHeartFill", color: "red", display: "K"},
//     {num: 1, type: "diamond", icon: "BsDiamondFill", color: "red", display: "A"},
//     {num: 2, type: "diamond",icon: "BsDiamondFill",  color: "red", display: "2"},
//     {num: 3, type: "diamond",icon: "BsDiamondFill",  color: "red", display: "3"},
//     {num: 4, type: "diamond",icon: "BsDiamondFill",  color: "red", display: "4"},
//     {num: 5, type: "diamond",icon: "BsDiamondFill",  color: "red", display: "5"},
//     {num: 6, type: "diamond",icon: "BsDiamondFill",  color: "red", display: "6"},
//     {num: 7, type: "diamond",icon: "BsDiamondFill",  color: "red", display: "7"},
//     {num: 8, type: "diamond",icon: "BsDiamondFill",  color: "red", display: "8"},
//     {num: 9, type: "diamond",icon: "BsDiamondFill",  color: "red", display: "9"},
//     {num: 10, type: "diamond",icon: "BsDiamondFill",  color: "red", display: "10"},
//     {num: 11, type: "diamond",icon: "BsDiamondFill",  color: "red", display: "J"},
//     {num: 12, type: "diamond",icon: "BsDiamondFill",  color: "red", display: "Q"},
//     {num: 13, type: "diamond",icon: "BsDiamondFill",  color: "red", display: "K"},    
//     {num: 1, type: "spade", icon: "BsFillSuitSpadeFill", color: "black", display: "A"},
//     {num: 2, type: "spade", icon: "BsFillSuitSpadeFill", color: "black", display: "2"},
//     {num: 3, type: "spade", icon: "BsFillSuitSpadeFill", color: "black", display: "3"},
//     {num: 4, type: "spade", icon: "BsFillSuitSpadeFill", color: "black", display: "4"},
//     {num: 5, type: "spade", icon: "BsFillSuitSpadeFill", color: "black", display: "5"},
//     {num: 6, type: "spade", icon: "BsFillSuitSpadeFill", color: "black", display: "6"},
//     {num: 7, type: "spade", icon: "BsFillSuitSpadeFill", color: "black", display: "7"},
//     {num: 8, type: "spade", icon: "BsFillSuitSpadeFill", color: "black", display: "8"},
//     {num: 9, type: "spade", icon: "BsFillSuitSpadeFill", color: "black", display: "9"},
//     {num: 10, type: "spade", icon: "BsFillSuitSpadeFill", color: "black", display: "10"},
//     {num: 11, type: "spade", icon: "BsFillSuitSpadeFill", color: "black", display: "J"},
//     {num: 12, type: "spade", icon: "BsFillSuitSpadeFill", color: "black", display: "Q"},
//     {num: 13, type: "spade", icon: "BsFillSuitSpadeFill", color: "black", display: "K"},    
//     {num: 1, type: "club",  icon:"BsFillSuitClubFill", color: "black", display: "A"},
//     {num: 2, type: "club", icon:"BsFillSuitClubFill",  color: "black", display: "2"},
//     {num: 3, type: "club", icon:"BsFillSuitClubFill",  color: "black", display: "3"},
//     {num: 4, type: "club", icon:"BsFillSuitClubFill",  color: "black", display: "4"},
//     {num: 5, type: "club", icon:"BsFillSuitClubFill",  color: "black", display: "5"},
//     {num: 6, type: "club", icon:"BsFillSuitClubFill",  color: "black", display: "6"},
//     {num: 7, type: "club", icon:"BsFillSuitClubFill",  color: "black", display: "7"},
//     {num: 8, type: "club", icon:"BsFillSuitClubFill",  color: "black", display: "8"},
//     {num: 9, type: "club", icon:"BsFillSuitClubFill",  color: "black", display: "9"},
//     {num: 10, type: "club", icon:"BsFillSuitClubFill",  color: "black", display: "10"},
//     {num: 11, type: "club", icon:"BsFillSuitClubFill",  color: "black", display: "J"},
//     {num: 12, type: "club", icon:"BsFillSuitClubFill",  color: "black", display: "Q"},
//     {num: 13, type: "club", icon:"BsFillSuitClubFill",  color: "black", display: "K"}
// ];
// }


// const cardDeck = {
//     deck
//   };
//   // Define constants
// const SUITS = ['hearts', 'diamonds', 'clubs', 'spades'];
// const VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// // Initialize the deck
// let deck = [];
// for (let suit of SUITS) {
//   for (let value of VALUES) {
//     deck.push({suit, value});
//   }
// }

// // Shuffle the deck
// for (let i = deck.length - 1; i > 0; i--) {
//   const j = Math.floor(Math.random() * (i + 1));
//   [deck[i], deck[j]] = [deck[j], deck[i]];
// }

// // Set up the game
// let tableau = [[], [], [], [], [], [], []];
// let foundation = {'hearts': [], 'diamonds': [], 'clubs': [], 'spades': []};
// let waste = [];
// let stock = deck.slice();

// // Deal the cards to the tableau
// for (let i = 0; i < 7; i++) {
//   for (let j = 0; j <= i; j++) {
//     let card = stock.pop();
//     if (j === i) {
//       card.hidden = false;
//     } else {
//       card.hidden = true;
//     }
//     tableau[i].push(card);
//   }
// }

// // Flip over the top card of the stock to the waste pile
// if (stock.length > 0) {
//   let card = stock.pop();
//   card.hidden = false;
//   waste.push(card);
// }

// // Define functions for moving cards
// function canMoveToFoundation(card) {
//   let suit = card.suit;
//   let value = card.value;
//   let foundationPile = foundation[suit];
//   if (foundationPile.length === 0 && value === 'A') {
//     return true;
//   } else if (foundationPile.length > 0) {
//     let topCard = foundationPile[foundationPile.length - 1];
//     if (topCard.value === VALUES[VALUES.indexOf(value) - 1]) {
//       return true;
//     }
//   }
//   return false;
// }

// function canMoveToTableau(card, tableauPile) {

// export default cardDeck;
// // export default Deck;