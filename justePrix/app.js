let nombre = Math.floor(Math.random() * 101);
console.log(nombre);

let countTour = 1;

let guesses = document.querySelector('.nombTour');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.minMax');

let guessSubmit = document.querySelector('.prixSubmit');
let guessField = document.querySelector('.justePrix');

let countTour = 1;
let resetButton;

function checkNombre(){
    let user = Number(guessField.value);
    if(countTour === 1) {
        guesses.textContent = 'Premier essai !';
    }
    guesses.textContent += user + '';

    if(user === nombre) {
        lastResult.textContent = 'Félicitations! Vous avez trouvé le juste prix.';
        lastResult.style.color = 'green';
        lastResult.style.fontWeight = 'bold';
        lowOrHi.textContent = '';
        setGameOver();
    }
    else if(countTour === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();
    }
    else {
        lastResult.textContent = "Ce n'est pas le juste prix! Essayez encore...";
        lastResult.style.color = 'red';
        lastResult.style.fontWeight = 'bold';
        if(user < nombre) {
            lowOrHi.textContent = 'Vous êtes trop bas!';
        }
        else if(user > nombre) {
            lowOrHi.textContent = 'Vous êtes trop haut!';
        }
    }
    countTour++;
    guessField.value = '';
    guessField.focus();
}
guessSubmit.addEventListener("click", checkNombre);

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
    nombre = Math.floor(Math.random() * 101);
}