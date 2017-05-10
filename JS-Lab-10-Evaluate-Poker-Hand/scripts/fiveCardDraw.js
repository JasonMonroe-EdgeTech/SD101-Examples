 const NUMBER_OF_CARDS = 5;

 function card(suit, rank) {
     this.suit = suit;
     this.rank = getRankValue(rank); //2-14: 11-Jack, 12-Queen, 13-King, 14-Ace
 }

 function getRankValue(rank) {
     switch (rank) {
         case "A":
             return 14;
         case "K":
             return 13;
         case "Q":
             return 12;
         case "J":
             return 11;
         default:
             return parseInt(rank);
     }
 }

 function displayResult() {
     document.getElementById('divEvalHand').innerHTML = evalHand();
 }

 function getCards() {
     var hand = [];

     //create card objects in hand array pulling from select elements on HTML page
     for (var n = 0; n < NUMBER_OF_CARDS; n++) {
         hand[n] = new card(document.getElementById('selectSuit' + (n + 1)).value, document.getElementById('selectRank' + (n + 1)).value);
     }

     return hand;
 }

 function evalBundle() {
     this.nClubs = 0;
     this.nHearts = 0;
     this.nDiamonds = 0;
     this.nSpades = 0;
     this.nPairs = 0;
     this.nConsecutive = 0;
     this.nHighestStraightCard = 0;
     this.threeOfaKind = false;
     this.fourOfaKind = false;
     this.cardValues = cardValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
 }

 function evalHand() {
     var hand = getCards();
     var handTallies = new evalBundle();

     //count suits
     for (n = 0; n < NUMBER_OF_CARDS; n++) {

         //tally ranks
         handTallies.cardValues[hand[n].rank]++;

         //tally suits
         switch (hand[n].suit) {
             case "Clubs":
                 handTallies.nClubs++;
                 break;
             case "Hearts":
                 handTallies.nHearts++;
                 break;
             case "Diamonds":
                 handTallies.nDiamonds++;
                 break;
             case "Spades":
                 handTallies.nSpades++;
                 break;
         }
     }

     //look for pair, two pair, etc. in rank tallies.
     for (var k = 2; k < handTallies.cardValues.length; k++) {

         if (handTallies.cardValues[k] == 4) {
             handTallies.fourOfaKind = true;
         } else if (handTallies.cardValues[k] == 3) {
             handTallies.threeOfaKind = true;
         } else if (handTallies.cardValues[k] == 2) {
             handTallies.nPairs++;
         } else if (handTallies.cardValues[k] == 1) {
             handTallies.nConsecutive++;
             if (handTallies.nConsecutive == 5) {
                 handTallies.nHighestStraightCard = k;
                 break;
             }
         } else if (handTallies.cardValues[k] == 0) {
             handTallies.nConsecutive = 0;
         }
     }

     //evaluation tier
     if (royalFlush(handTallies)) {
         return "Royal Flush!!";
     } else if (straightFlush(handTallies)) {
         return "Straight Flush!!";
     } else if (fourOfaKind(handTallies)) {
         return "Four of a Kind!!";
     } else if (fullHouse(handTallies)) {
         return "Boat!!";
     } else if (flush(handTallies)) {
         return "Flush!";
     } else if (straight(handTallies)) {
         return "Straight!";
     } else if (threeOfaKind(handTallies)) {
         return "Three of a Kind!!";
     } else if (twoPair(handTallies)) {
         return "Two Pair";
     } else if (pair(handTallies)) {
         return "A Pair";
     }

 } //end evalHand()

 function royalFlush(tallies) {
     return straightFlush(tallies) && tallies.nHighestStraightCard == 14;
 }

 function straightFlush(tallies) {
     return flush(tallies) && straight(tallies);
 }

 function fourOfaKind(tallies) {
     return tallies.fourOfaKind;
 }

 function fullHouse(tallies) {
     return tallies.threeOfaKind && tallies.nPairs == 1;
 }

 function flush(tallies) {
     return tallies.nClubs == NUMBER_OF_CARDS || tallies.nHearts == NUMBER_OF_CARDS || tallies.nDiamonds == NUMBER_OF_CARDS || tallies.nSpades == NUMBER_OF_CARDS;
 }

 function straight(tallies) {
     return tallies.nConsecutive == 5;
 }

 function threeOfaKind(tallies) {
     return tallies.threeOfaKind;
 }

 function twoPair(tallies) {
     return tallies.nPairs == 2;
 }

 function pair(tallies) {
     return tallies.nPairs == 1;
 }
