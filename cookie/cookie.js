let score = 0;
let price = 10;
let multiplier = 1;
let interval = 200;
let display = document.getElementById("display");


//augmentation du score à chaque click
function increase() {
    score += (1 * multiplier);
    document.getElementById('display').innerHTML = score;
}

function augmenterMultiplicateur() {
    multiplier = multiplier * 2;
    let result = document.getElementById('multiply');
    result.innerHTML = "Prochain multiplicateur : x " + multiplier + 
    " pour :  " + price + " points.";
    }

function buyMultiplicator() {
    if(score >= price) {
        augmenterMultiplicateur()
        score = score - price;
        price = price *2;
        document.getElementById('diplay').value = score;
    }
}
//Autoclick
function clicker() {
    if(score >= interval) {
        setInterval(increase, 1000);
}
 else {
        alert('Vous êtes fauché! \nContinuez à cliquer!!!');
    }
}

//achat du bonus


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

