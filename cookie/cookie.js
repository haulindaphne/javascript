let score = 0;
let price = 50;
let multiplier = 1; // variable du multiplicateur
let display = document.getElementById("display");

//augmentation du score à chaque click
function increase() {
    score += (1 * multiplier);
    document.getElementById('display').innerHTML = score;
}

//fonction multiplicateur - les clicks auront de plus en plus de points
//jusqu'au 6ème multiplicateur.
//Ensuite les multiplicateur couteront 2x plus chers.
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

//fonction d'achat de multiplicateur qui déduit le prix du score
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
//Autoclick - quand activer, le bouton disparait de la fenêtre
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

//Autoclick - quand activer, le bouton disparait de la fenêtre et coute 500 points
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
//appel du bonus + du compte à rebours dans cette fonction
function doubleBonus(){
    bonus();
    newCount();
    while (counter === 0) {
    clearInterval(newCount);
    clearInterval(increaseBonus);
    document.querySelector('#bonusBtn').style.visibility = 'visible';

    }
}

// l'incrementation est doublée pendant le temps du bonus
function increaseBonus(){
    score += (2 * multiplier);
    document.getElementById('display').innerHTML = score;
}

//fonction save - sauvegarde du score
function save() {
    localStorage.setItem("score", score);
}

//Chargement du score sauvegardé.
function load() {
    score = localStorage.getItem("score");
    score = parseInt(score);
    document.getElementById('display').value = score;
    document.getElementById('display').innerHTML = score;
}

//compteur - appelé dans la fonction doubleBonus
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
