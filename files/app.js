//********  EXERCICE 1 : Manipulation de classes  ******

let page = document.body;
    function load() {
        document.body.classList.remove("bg-aqua");
        document.body.classList.add("bg-olive");
    }

console.log(page);
load(page);

function para() {
    document.getElementById('first-paragraph').className += "aqua";
}
para();

//sélectionner tous les éléments qui ont la classe 'bg-silver'
document.querySelectorAll('.bg-silver').className += '.bg-teal';
//modifier tout ces éléments en leurs supprimant la classe "bg-silver"
let classe = document.querySelectorAll ('.bg-silver');
document.querySelector('.bg-silver').className = '.bg-teal';

sélectionne tous les éléments de type 'blockquote'
modifier tout ces éléments en leurs ajoutant la classe "bg-white"
let quote = document.getElementsByTagName("blockquote").className += "bg-white";

console.log(quote);
//**********EXERCICE 2 : Selecteurs CSS ***********
let table = document.querySelector('#my-table');
table.className += ".bg-purple";
console.log(table);

let cont = document.querySelectorAll('.container p');
for (let i = 0; i < cont.length; i++) {
    
cont[i].className += '.shadow';}

console.log(cont)

//**************************************//
//*************  EXERCICE 3 ************//
//*************************************//

let elmPre = document.querySelectorAll("pre");
for (let i = 0; i < elmPre.length; i++) {
    
elmPre[0].style.color = "white";
elmPre[0].style.backgroundColor = "yellow";
elmPre[0].style.borderTop = "3px solid red";
elmPre[0].style.borderBottom = "3px solid red";
}

console.log(elmPre);

//remplacer son contenu HTML en <em>Itelic title ! yeah !</em>
let hSelect = document.querySelector('h3');
let texteTitre = hSelect.innerHTML = "<em>Itelic title ! yeah !</em>";

console.log(hSelect);

//sélectionne le premier élément de type 'h2'
//remplacer son contenu texte par en <strong>HTML doens't work !</strong>
let h2Select = document.querySelector('h2');
let TextH = h2Select.innerHTML = "<strong>HTML doesn't work !</strong>";

console.log(h2Select);*/

//************************************************************//
//**********   EXERCICE 4 : Création d'éléments **************//
//***********************************************************//

let parentElement = document.querySelector('ul');
let firstChild = parentElement.firstChild;

let newLi = document.createElement('li');
newLi.id = 'nouveau';
let text = document.createTextNode("Mon meilleur ami est <a href='http://www.google.com'>Google</a>'");
newLi.appendChild(text);

parentElement.insertBefore(newLi, firstChild);

//sélectionner le premier lien dans le 'li' précedement crée
let selectLi = document.querySelectorAll('li');
selectLi[3].style.color = "white";

console.log(selectLi);

//*************************************************************//
// EXERCICE 4 : Création et suppression de plusieurs éléments  //
//*************************************************************//

let selectOl = document.querySelector('ol');
selectOl.id = 'test';
let elements = selectOl.getElementsByTagName('li');

for(let i = 0; i < elements.length; i++) {
selectOl.removeChild(elements[i]);
}
console.log(selectOl);

//déclare dans un tableau les valeurs suivantes : 
//["Silent Teacher","Code Monkey", "CodeCombat"]


let arr = ['Silent Teacher', 'Code Monkey', 'CodeCombat'];
arr.forEach((e) => {
    console.log(e);
    let newLi = document.createElement('li');
    newLi.innerText = e;
    console.log(newLi);
    selectOl.appenChild(newLi);
});


