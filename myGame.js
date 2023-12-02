let scissors = false;
let stone = false;
let paper = false;

let scheren = false;
let steine = false;
let papieren = false;

let pWins;
let cWins;
let tie;

let compared;


function schere(){
    disableButtons();
    scissors = true;
    console.log("scissors");
    checkChoice();
};

function stein(){
    disableButtons();
    stone = true;
    console.log("stone");
    checkChoice();
};

function papier(){
    disableButtons();
    paper = true;
    console.log("paper");
    checkChoice();
};

function disableButtons(){
    let schereButton = document.getElementById('a');
    let steinButton = document.getElementById('b');
    let papierButton = document.getElementById('c');
    schereButton.disabled = true;
    steinButton.disabled = true;
    papierButton.disabled = true;
};

function enableButtons(){
    let schereButton = document.getElementById('a');
    let steinButton = document.getElementById('b');
    let papierButton = document.getElementById('c');
    schereButton.disabled = false;
    steinButton.disabled = false;
    papierButton.disabled = false;
}

function checkRandom(){
    const randomWord = getRandomWord();
    if(randomWord === 'scissors'){
        console.log('scheren');
        scheren = true;
    }
    else if(randomWord === 'stone'){
        console.log('steine');
        steine = true;
        
    }
    else if(randomWord === 'paper'){
        console.log('papieren');
        papieren = true;
    }
};

function checkChoice(){
    console.log('scheren:', scheren, 'steine:', steine, 'papieren:', papieren);
    //computer
    console.log('scissors:', scissors, 'stone:', stone, 'paper:', paper);
    //spieler

    const reaction = document.getElementById('ergebnis');
    const you = document.getElementById('you');
    const opponent = document.getElementById('opponent');
    you.style.visibility = "visible"; opponent.style.visibility = "visible";
    if ((papieren && scissors) || (scissors && papieren)) {
        console.log('spieler gewinnt!');
        reaction.innerHTML = "spieler gewinnt!";
        you.src = "scissors.png"; opponent.src = "paper.png";
        compared = true;
        pWins = true;
        updateGame();
    }
    else if ((steine && scissors) || (scissors && steine)) {
        console.log('computer gewinnt!');
        reaction.innerHTML = "computer gewinnt!";
        you.src = "scissors.png"; opponent.src = "stone.png";
        compared = true;
        cWins = true;
        updateGame();
    }
    else if ((papieren && stone) || (stone && papieren)) {
        console.log('computer gewinnt!');
        reaction.innerHTML = "computer gewinnt!";
        you.src = "stone.png"; opponent.src = "paper.png";
        compared = true;
        cWins = true;
        updateGame();
    }
    else if ((scheren && stone) || (stone && scheren)) {
        console.log('spieler gewinnt!');
        reaction.innerHTML = "spieler gewinnt!";
        you.src = "stone.png"; opponent.src = "scissors.png";
        compared = true;
        pWins = true;
        updateGame();
    }
    else if ((steine && paper) || (paper && steine)) {
        console.log('spieler gewinnt!');
        reaction.innerHTML = "spieler gewinnt!";
        you.src = "paper.png"; opponent.src = "stone.png";
        compared = true;
        pWins = true;
        updateGame();
    }
    else if ((scheren && paper) || (paper && scheren)) {
        console.log('computer gewinnt!');
        reaction.innerHTML = "computer gewinnt!";
        you.src = "paper.png"; opponent.src = "scissors.png";
        compared = true;
        cWins = true;
        updateGame();
    }
    else if ((scissors && scheren) || (scheren && scissors)) {
        console.log('unentschieden!');
        reaction.innerHTML = "unentschieden!";
        you.src = "scissors.png"; opponent.src = "scissors.png";
        compared = false;
        updateGame();
    }
    else if ((stone && steine) || (steine && stone)) {
        console.log('unentschieden!');
        reaction.innerHTML = "unentschieden!";
        you.src = "stone.png"; opponent.src = "stone.png";
        compared = false;
        updateGame();        
    }
    else if ((paper && papieren) || (papieren && paper)) {
        console.log('unentschieden!');
        reaction.innerHTML = "unentschieden!";
        you.src = "paper.png"; opponent.src = "paper.png";
        compared = false;
        updateGame();
    }
}



const words = ['scissors', 'stone', 'paper'];

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}





function startGame(){
    getRandomWord();
    checkRandom();
}

let reStart;

function updateGame(){
    let reaction = document.getElementById('ergebnis');
    let final = document.getElementById('final');
    let you = document.getElementById('you');
    let opponent = document.getElementById('opponent');
    if(compared === true){
        reStart = setTimeout(() => {
            reaction.innerHTML = "";
            you.style.visibility = "hidden"; opponent.style.visibility = "hidden";
            final = " | "
            scissors = false;
            stone = false;
            paper = false;
            scheren = false;
            steine = false;
            papieren = false;
            enableButtons();
            gameScore();
            startGame();
        }, 2500);
    }
    if(compared === false){
        reStart = setTimeout(() => {
            reaction.innerHTML = "";
            you.style.visibility = "hidden"; opponent.style.visibility = "hidden";
            final = " | "
            scissors = false;
            stone = false;
            paper = false;
            scheren = false;
            steine = false;
            papieren = false;
            enableButtons();
            startGame();}, 2500);
    }
}

let n = 0;
let f = 0;
function gameScore(){
    let pScore = document.getElementById('player');
    let cScore = document.getElementById('pc');
        if(pWins === true){
        setTimeout(function(){
        pWins = false;
        n++;
        pScore.innerHTML = n;}, 1000 / 20);
    }
        if(cWins === true){
        setTimeout(function(){
        cWins = false;
        f++;
        cScore.innerHTML = f;}, 1000  / 20);
    }
}

startGame();



function openLink() {
    let copyText = document.getElementById('link');
    let linkText = copyText.innerText || copyText.textContent;

    navigator.clipboard.writeText(linkText)
        .then(() => {
            console.log('Link copied to clipboard');
        })
        .catch(err => {
            console.error('Unable to copy to clipboard', err);
        });
}
