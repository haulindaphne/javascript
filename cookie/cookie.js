let score = 0;
let price = 5;
let multiplier = 1;
let interval = 300;
let display = document.getElementById("display");

//augmentation du score à chaque click
function increase() {
    score += (1 * multiplier);
    document.getElementById('display').innerHTML = score;
}

function augmenterMultiplicateur() {
    if(multiplier <= 6) {
    multiplier = multiplier * 2;
    let result = document.getElementById('multiply');
    result.innerHTML = "Prochain multiplicateur : x " + multiplier + 
    " pour :  " + price + " points.";
    }
    else {
            price += multiplier + (price * 2) || score > 0;
        }
    }


function buyMultiplicator() {
    if(score >= price) {
        augmenterMultiplicateur()
        score = score - price;
        price = price *2;
        document.getElementById('display').value = score;
    }
    else {
        alert("Vous n'avez pas assez de points! Cliquez encore.");
    }
}
//Autoclick
function clicker() {
    if(score >= 200) {
        let time = setInterval(increase, 1000); 
        score = score - 200;
        document.querySelector('#autoCursor').style.visibility = "hidden";
        }
 else {
        alert('Vous êtes fauché! \nContinuez à cliquer!!!');
    }
}

function autoClicker() {
    if(score >= 500) {
        setInterval(increase, 500);
        score = score - 500;
        document.querySelector('#autoclic').style.visibility = "hidden";
    }
    else {
        alert('Encore fauché? Clique plus vite!');
    }
}

//achat du bonus
function bonus() {
    if(score >= 5000) {
        setInterval(increaseBonus, 250);
        score = score - 5000;
        document.querySelector('#bonusBtn').style.visibility = 'hidden';
        }
        else {
        alert("Vous êtes encore fauché? Mais cliquez plus vite!!!")
    }
}
function doubleBonus(){
    bonus();
    newCount();
    while (counter === 0) {
    clearInterval(newCount);
    clearInterval(increaseBonus);
    document.querySelector('#bonusBtn').style.visibility = 'visible';

    }
}

function increaseBonus(){
    score += (2 * multiplier);
    document.getElementById('display').innerHTML = score;
}

//fonction save
function save() {
    localStorage.setItem("score", score);
}
function load() {
    score = localStorage.getItem("score");
    score = parseInt(score);
    document.getElementById('display').value = score;
    document.getElementById('display').innerHTML = score;
}

//compteur
let counter = 30;
function newCount() {
let newCount = setInterval(function() {
    console.log(counter);
    counter--;
    if(counter === 0) {
        alert("C'est fini!");
        clearInterval(newCount);
    }
}, 1000);
}
