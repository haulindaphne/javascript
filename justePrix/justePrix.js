let min = 1;
let max = 101;
let randomNumber = Math.floor(Math.random(min) * max);
console.log(randomNumber);

let guesses = document.querySelector('.nombTour');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.minMax');

let guessSubmit = document.querySelector('.prixSubmit');
let guessField = document.querySelector('.justePrix');

let countTour = 1;
let resetButton;


function checkNombre() {
    let userGuess = Number(guessField.value);
    if(countTour === 1) {
        guesses.textContent = 'Essai précédent: ';
    }
    guesses.textContent += userGuess + ' ';

    if(userGuess === randomNumber) {
        lastResult.textContent = 'Félicitations! Vous avez trouvé le Juste Prix!';
        lastResult.style.color = 'green';
        lastResult.style.fontWeight = 'bold';
        lowOrHi.textContent = '';
        setGameOver();
    }
    else if(countTour === 10) {
        lastResult.textContent = '!!! GAME OVER !!!';
        setGameOver();
    }
    else {
        lastResult.textContent = 'Nouvel essai!';
        lastResult.style.color = 'red';
        lastResult.style.fontWeight = 'bold';
        if(userGuess < randomNumber) {
            lowOrHi.textContent = 'Vous êtes trop bas!';
        }
        else if(userGuess > randomNumber) {
            lowOrHi.textContent = 'Vous êtes trop haut!';
        }
    }

    countTour++;
    guessField.value = '';
    guessField.focus();
}
guessSubmit.addEventListener('click', checkNombre);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = 'start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}
//réinitialisation du jeu
function resetGame(){
    countTour = 1;//remet le compteur à 1
    //Efface tous les p d'information
    let resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }
    //supprime le bouton de réinitialisation du code
    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    //Supprime la couleur d'arrière plan
    lastResult.style.backgroundColor = 'white';
    //Génère un nouveau nombre aléatoire
    randomNumber = Math.floor(Math.random() * 101);
}

