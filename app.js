var color;
var value;

var deck = [color, value];

var yourCards = [];
var computerCards = [];
var playerTotal = [];

drawCard = () => {
    var randomCard = (max) => Math.floor(Math.random(deck) * max); 
    
    color = randomCard(4);
    value = randomCard(13);
    cards = {color, value};

    includesCard();

    console.table(yourCards);
    console.table(deck);
}

includesCard = () => {
    if (yourCards.includes(`${color}, ${value}`)) {
        drawCard();
    } else {
        yourCards.push(`${color}, ${value}`);
        deck.push(cards);
    }
}

startGame = ()  => {

    deck = [];
    yourCards = [];
    computerCards = [];

    for (i=0; i<2; i++) {
        drawCard();   
    }

    var pCards = document.getElementById('playersCards');
    pCards.innerHTML = (`Your cards are: ${yourCards}.`);

    var cCards = document.getElementById('computersCards');
    cCards.innerHTML = (`Computers cards are: ${computerCards}.`);


    const divMain = document.getElementById('main');
    const newGame = document.getElementById('start');
    newGame.innerHTML = 'Reset game';
    divMain.hidden = false;

    score();

}

hit = () => {
    drawCard();
    score();

    /*var hitCard = document.getElementById('hitCards');
    hitCard.innerHTML = (`${yourCards}`);*/
    
}

score = () => {
    var playerTotal = document.getElementById('total');      
    let sum = 0;     

    for (var i=0; i < deck.length; i++){         
        if (deck[i].value > 9) {             
            sum += 10;        
        } else {         
            sum += deck[i].value+1;         
        };     
    };     
    
    playerTotal.innerHTML = sum;
  
    /* var total = document.getElementById('total');
  
    var playerScore = 0;

    for (var i = 0; i < deck.length; i++) {
        playerScore += deck[i].value;
    };

    total.innerHTML = playerScore;
    console.log(total);
    */
}
