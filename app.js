console.log('hello!');

var x;
var y;

var deck = [x,y];

var playersCards = [];

var denomination = {
    Hearts: '',
    Diamonds: '',
    Spades: '',
    Clubs: ''
}



function build() {

}

startGame = ()  => {

    playersCards = [];

    var randomCard = (max) => {
        return Math.floor(Math.random(deck) * max);
    } 

    for (i=0; i<2; i++) {
        var cards = (randomCard(4) + ', ' + randomCard(13));    
        playersCards.push(cards);
    }

    console.log(playersCards);

    const divMain = document.getElementById('main');
    const newGame = document.getElementById('start');
    newGame.innerHTML = 'Start NEW game';
    divMain.hidden = false;

}

hit = () => {
    var randomCard = (max) => {
        return Math.floor(Math.random(deck) * max);
    }

    var cards = (randomCard(4) + ', ' + randomCard(13));
    playersCards.push(cards);

    console.log(playersCards);
}