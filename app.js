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
    var pCards = document.getElementById('playersCards');
    pCards.innerHTML = '';

    for (i=0; i<2; i++) {
        drawCard();   
        info();
    }

    const divMain = document.getElementById('main');
    const newGame = document.getElementById('start');
    newGame.innerHTML = 'Reset game';
    divMain.hidden = false;

    score();
}

hit = () => {
    drawCard();
    score();
    info();
    
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

info = () => {
    var onHand = document.getElementById('playersCards');

    if (cards.color === 0) {
        switch (cards.value) {
            case 10:
                onHand.innerHTML += 'Jack of Hearts ';
                break;
            case 11:
                onHand.innerHTML += 'Queen of Hearts ';
                break;
            case 12:
                onHand.innerHTML += 'King of Hearts ';
                break;
            case 0:
                onHand.innerHTML += 'Ace of Hearts ';
                break;
            default: onHand.innerHTML += (`${value+1} of Hearts `);
                
        };
    };

    if (cards.color === 1) {
        switch (cards.value) {
            case 10:
                onHand.innerHTML += 'Jack of Diamonds ';
                break;
            case 11:
                onHand.innerHTML += 'Queen of Diamonds ';
                break;
            case 12:
                onHand.innerHTML += 'King of Diamonds ';
                break;
            case 0:
                onHand.innerHTML += 'Ace of Diamonds ';
                break;
            default: onHand.innerHTML += (`${value+1} of Diamonds `);
                
        };
    };

    if (cards.color === 2) {
        switch (cards.value) {
            case 10:
                onHand.innerHTML += 'Jack of Clubs ';
                break;
            case 11:
                onHand.innerHTML += 'Queen of Clubs ';
                break;
            case 12:
                onHand.innerHTML += 'King of Clubs ';
                break;
            case 0:
                onHand.innerHTML += 'Ace of Clubs ';
                break;
            default: onHand.innerHTML += (`${value+1} of Clubs `);
                
        };
    };

    if (cards.color === 3) {
        switch (cards.value) {
            case 10:
                onHand.innerHTML += 'Jack of Spades ';
                break;
            case 11:
                onHandinnerHTML += 'Queen of Spades ';
                break;
            case 12:
                onHand.innerHTML += 'King of Spades ';
                break;
            case 0:
                onHand.innerHTML += 'Ace of Spades ';
                break;
            default: onHand.innerHTML += (`${value+1} of Spades `);
                
        };
    };
}