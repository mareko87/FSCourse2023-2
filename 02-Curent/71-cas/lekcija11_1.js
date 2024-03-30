//? Rad sa DOM - Document Object Model

// parent-roditelj, child-dete, sibling-rodjak

// console.log(window);

// var a = 5;

// console.log(document);

// console.dir(document);

// console.log(document.title);

// document.title = 'Radimo DOM na ovom casu';

//? Struktura HTML -a

//* selektori - selectors

//* getElementById()

// const glavniNaslov = document.getElementById('glavni-naslov');
// console.log(glavniNaslov);
// // console.dir(glavniNaslov);

// console.dir(document.getElementById('glavni-naslov'));

// console.log(glavniNaslov.innerHTML);

// console.log(glavniNaslov.textContent);

// console.log(glavniNaslov.innerText);

// glavniNaslov.style.color = 'blue';

// glavniNaslov.addEventListener('click', () => {
//     glavniNaslov.style.color = 'red';
// })


//* getElementsByClassName()

// console.log(document.getElementsByClassName('stavka'));

// console.log(document.getElementsByClassName('stavka')[2]);

// const stavke = document.getElementsByClassName('stavka');
// console.log(stavke);

// console.log(stavke[0]);

// stavke[1].style.backgroundColor = 'gray';

// for (let i = 0; i < stavke.length; i++) {
//     console.log(stavke[i]);
//     stavke[i].style.backgroundColor = 'gray';
// }

// stavke.forEach(stavka => {    //nije definasano forEach za HTML collection
//     console.log(stavka);
// });


//* getElementsByTagName()

// console.log(document.getElementsByTagName('li'));

// const li = document.getElementsByTagName('li');
// li[1].innerText = 'Proba 123';

// for (let i = 0; i < li.length; i++) {
//     console.log(li[i]);
//     li[i].style.backgroundColor = 'gray';
// }

// li.forEach(stavka => {    //nije definasano forEach za HTML collection
//     console.log(stavka);
// });

//* querySelector()  ---   tag -> ('input'), id -> ('#glavni-naslov), class -> ('.stavka')

// const input = document.querySelector('input[type=submit]');
// console.log(input);

// const stav = document.querySelector('.stavka');
// console.log(stav);

// const nasl = document.querySelector('#glavni-naslov');
// console.log(nasl);


//* querySlectorAll()

// const stavke2 = document.querySelectorAll('.stavka');
// console.log(stavke2);

// stavke2.forEach(stavka => {
//     console.log(stavka);
// });
