console.log('hello!');

var deck = [
    ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10 ,'J' ,'Q', 'K'],
    ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10 ,'J' ,'Q', 'K'],
    ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10 ,'J' ,'Q', 'K'],
    ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10 ,'J' ,'Q', 'K']
]

var colour = {
    Hjärter: '',
    Ruter: '',
    Klöver: '',
    Spader: ''
}



function build() {
    console.table(deck);

}

function startGame() {

    const min = Math.ceil(deck[0][0]);
    const max = Math.floor(deck[3][12]);

    var randomCard = Math.floor(Math.random() * max + min);

    console.log(randomCard);

    const divMain = document.getElementById('main');
    const newGame = document.getElementById('start');
    newGame.innerHTML = 'Start NEW game';
    divMain.hidden = false;

}

