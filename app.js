console.log('hello!');

var x;
var y;

var deck = [x,y];

var denomination = {
    Hearts: '',
    Diamonds: '',
    Spades: '',
    Clubs: ''
}



function build() {

}

startGame = ()  => {

    var randomCard = (max) => {
        return Math.floor(Math.random() * max);
    } 

    console.log(randomCard(4) + ', ' + randomCard(14));

    const divMain = document.getElementById('main');
    const newGame = document.getElementById('start');
    newGame.innerHTML = 'Start NEW game';
    divMain.hidden = false;

}

