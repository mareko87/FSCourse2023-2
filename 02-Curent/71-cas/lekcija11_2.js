const listaStavki = document.querySelector('#stavke');
// console.log(listaStavki);
// console.dir(listaStavki);

// -----------------------------------------------------------------------------------------

//? parent - roditelj

//* parentNode

console.log(listaStavki.parentNode);

listaStavki.parentNode.style.backgroundColor = 'aqua';

console.log(listaStavki.parentNode.parentNode.parentNode)


//* parentElement

console.log(listaStavki.parentElement);

listaStavki.parentElement.style.backgroundColor = 'red';

console.log(listaStavki.parentElement.parentElement.parentElement);

// -----------------------------------------------------------------------------------------

//? children - deca

//* childNodes

console.log(listaStavki.childNodes);

//* children

console.log(listaStavki.children);
console.log(listaStavki.children[2])

//* firsChild

console.log(listaStavki.firstChild);

//* firstElementChild

console.log(listaStavki.firstElementChild);

//* lastChild

console.log(listaStavki.lastChild);

//* lastElementChild

console.log(listaStavki.lastElementChild);

// -----------------------------------------------------------------------------------------

//? sibling - rodjak

//* nextSibling

console.log(listaStavki.nextSibling);

//* nextElementSibling

console.log(listaStavki.nextElementSibling);

//* previousSibling

console.log(listaStavki.previousSibling);

//* previousElementsiblig

console.log(listaStavki.previousElementSibling);

// -----------------------------------------------------------------------------------------

//? kreiranje elemenata

//* createElement()

let noviElement = document.createElement('div');

noviElement.id = 'nekiId';

noviElement.className = 'neka-klasa';

noviElement.setAttribute('title', 'titleNovogDiva');

console.log(noviElement);

//* createTextNode()

let noviTekstNode = document.createTextNode('Pozdrav svima!');
console.log(noviTekstNode);

//* appendChild()

noviElement.appendChild(noviTekstNode);

console.log(noviElement);

// -----------------------------------------------------------------------------------------

//? Ubacivanje elemenata na DOM

//* insertBefore()

// uOkviruCega(sta, preCega) 

const kontejner = document.querySelector('.container');
const mejn = document.querySelector('.main');

kontejner.insertBefore(noviElement, mejn);

