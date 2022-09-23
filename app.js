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
    console.log(deck[3][8]);
}

function startGame() {

    const max = Math.cell(deck[0][0]);
    const min = Math.floor(deck[3][12]);

    console.log(randomCard(deck));

    const divMain = document.getElementById('main');
    const newGame = document.getElementById('start');
    newGame.innerHTML = 'Start NEW game';
    divMain.hidden = false;

}

