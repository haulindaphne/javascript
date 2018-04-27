let numClick = 0;
let first;
let second;
let match = 0;

let cards = [];
cards[0] = '../lesPaires/asset/batman.png';
cards[1] = '../lesPaires/asset/catwoman.png';
cards[2] = '../lesPaires/asset/IvyProfileImage.png';
cards[3] = '../lesPaires/asset/jokerlego.png';
cards[4] = '../lesPaires/asset/pinguoin.png';
cards[5] = '../lesPaires/asset/IvyProfileImage.png';
cards[6] = '../lesPaires/asset/catwoman.png';
cards[7] = '../lesPaires/asset/batman.png';
cards[8] = '../lesPaires/asset/jokerlego.png';
cards[9] = '../lesPaires/asset/pinguoin.png';
cards[10] = '../lesPaires/asset/RiddlerProfile.png';
cards[11] = '../lesPaires/asset/RiddlerProfile.png';


//function shuffle de array cards
function shuffle(array) {
    let counter = array.length;
    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;

        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

let s;
s = shuffle(cards);

//quand on clic sur une carte 
function choose(card) {
    if(numClick == 0) {
        first = card;
        document.images[card].src = cards[card];
        numClick = 1;
    }
    else if (numClick == 1) {
        numClick = 2;
        second = card;
        document.images[card].src = cards[card];
        timer = setInterval(control, 500);
    }
    else {
        alert("Vous pouvez cliquez sur une image!");
    }
}
//controle des paires
function control(){
    clearInterval(timer);
    numClick = 0;
    if (cards[second] == cards[first]) {
        match++;
        if (match == 6) {
            alert("Vous avez trouvé toutes les cartes! \nBravo.");
            location.reload();
        }
    }
    else {
        document.images[first].src = "../lesPaires/asset/joker.jpg";
        document.images[second].src = "../lesPaires/asset/joker.jpg";
        return;
    }
}







