var x;
var y;

var deck = [x,y];

var yourCards = [];
var computerCards = [];
var hitCards = [];

var color = {
    Hearts: '',
    Diamonds: '',
    Spades: '',
    Clubs: ''
}



function build() {

}

startGame = ()  => {

    yourCards = [];
    computerCards = [];

    var randomCard = (max) => {
        return Math.floor(Math.random() * max);
    } 

    for (i=0; i<2; i++) {
        var cards = (randomCard(4) + ', ' + randomCard(13));    
        yourCards.push(cards);
    }

    for (i=0; i<2; i++) {
        var cards = (randomCard(4) + ', ' + randomCard(13));    
        computerCards.push(cards);
    }

    console.log(computerCards);
    console.log(yourCards);

    var pCards = document.getElementById('playersCards');
    pCards.innerHTML = (`Your cards are: ${yourCards}.`);

    var cCards = document.getElementById('computersCards');
    cCards.innerHTML = (`Computers cards are: ${computerCards}.`);


    const divMain = document.getElementById('main');
    const newGame = document.getElementById('start');
    newGame.innerHTML = 'Start NEW game';
    divMain.hidden = false;

}

hit = () => {
    var randomCard = (max) => {
        return Math.floor(Math.random() * max);
    }

    var cards = (randomCard(4) + ', ' + randomCard(13));
    hitCards.push(cards);

    

    var hitCard = document.getElementById('hitCards');
    hitCard.innerHTML = (`${hitCards}`);
    
}