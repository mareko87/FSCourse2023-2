//? Events - Dogadjaji

const dugme = document.getElementById('dugme');

// dugme.addEventListener('click', () => {
//     console.log('dugme je kliknuto');

//     document.getElementById('naslov').textContent = 'Neki novi naslov';
//     document.querySelector('.naslovi').style.backgroundColor = 'LightGray'
// });

//* Osnove event listener-a

// const klikFunkcija = () => {
//     console.log('dugme je kliknuto iz funkcije');
//     document.getElementById('naslov').textContent = 'Neki novi naslov';
//     document.querySelector('.naslovi').style.backgroundColor = 'LightGray'
// }

// dugme.addEventListener('click', klikFunkcija);

// function klikFunkcija2() {
//     console.log('function funkcija');
// }

// dugme.addEventListener('click', () => {
//     console.log('klik iz druge funkcije');
// })

//* Event object - dogadjaj objekat

const naKlik = (event) => {
    // console.log('Kliknuli smo');
    // console.log(event);

    // const ispis = document.getElementById('ispis')

    // ispis.innerHTML = `
    // <h3>u odnosu na dokument X: ${event.clientX} Y: ${event.clientY}</h3>
    // <h3>u odnosu na samo dugme X: ${event.offsetX} Y: ${event.offsetY}</h3>
    // `

    // console.log(event.target);
    // console.log(event.target.className);
    // console.log(event.target.classList);

    // console.log(event.altKey);
    // console.log(event.ctrlKey);   // ovo ne radi na Mac-u
    // console.log(event.shiftKey);

    console.log(event.type);
}

// dugme.addEventListener('click', naKlik);


//* dogadjaji vezani za misa

// dugme.addEventListener('click', naKlik);
// dugme.addEventListener('dblclick', naKlik);
// dugme.addEventListener('mousedown', naKlik);
// dugme.addEventListener('mouseup', naKlik);

// dugme.addEventListener('mouseenter', naKlik);

// document.querySelector('.nekiDiv').addEventListener('mouseenter', naKlik);
// document.querySelector('.nekiDiv').addEventListener('mouseleave', naKlik);
// document.querySelector('.nekiDiv').addEventListener('mouseover', naKlik);
// document.querySelector('.nekiDiv').addEventListener('mouseout', naKlik);

// dugme.addEventListener('mousemove', naKlik);

//* tastatura i input polje
//* keydown, keyup, keypress*nekada koristeno sada uzbaceno, focus, blur, cut, paste, input, change, submit

// const poljeZaUnos = document.querySelector('input[type="text"]');
// const poljeZaUnos = document.querySelector('input[name="unos"]')
// const podnaslov = document.querySelector('#podnaslov');

// poljeZaUnos.addEventListener('change', (event) => {
//     console.log(`Tip dogadjaja je ${event.type}`);
//     podnaslov.innerHTML = `${event.target.value}`
//     console.log(event.target.value);
// })


// const forma = document.querySelector('.forma');
// const podnaslov = document.querySelector('#podnaslov');

// const osobe = [];

// forma.addEventListener('submit', (event) => {
//     event.preventDefault();

// console.log('forma je submitovana');
// console.log(event.target.ime.value);

//     const osoba = {}

//     osoba.ime = event.target.ime.value;
//     osoba.prezime = event.target.prezime.value;
//     osoba.email = event.target.email.value;

//     podnaslov.innerHTML = `dodata je osoba: ime:${osoba.ime} prezime:${event.target.prezime.value}, email: ${osoba.email}`

//     console.log(osoba);
//     osobe.push(osoba);
//     console.log(osobe);

//     event.target.ime.value = '';
//     event.target.prezime.value = '';
//     event.target.email.value = '';

//     event.target.ime.focus();
// })


//* bubbling i capturing

const deda = document.querySelector('#deda');
const otac = document.querySelector('#otac');
const dete = document.querySelector('#dete');


// deda.addEventListener('click', (event) => {
//     console.log('deda element');
//     // }, { capture: true })
// }, { once: true })

// otac.addEventListener('click', (event) => {
//     console.log('otac element');
//     // event.stopPropagation();
// })

// dete.addEventListener('click', (event) => {
//     console.log('dete element');
//     // event.stopPropagation();
// })

//* remove event listener - uklanjanje event listenera

// dete.addEventListener('click', novaFja);

// function novaFja() {
//     console.log('klik na dete element');
// }

// setTimeout(() => {
//     dete.removeEventListener('click', novaFja)
// }, 5000);


// let brojac = 1;
// function novaFja() {
//     console.log('klik na dete element');

//     brojac += 1;

//     if (brojac > 5) {
//         dete.removeEventListener('click', novaFja)
//     }
// }


//! event listener ne moze da se ukloni ako se koristi kao bezimena funkcija

dete.addEventListener('click', () => {
    console.log('klik na dete element');
});


setTimeout(() => {
    dete.removeEventListener('click', () => {
        console.log('klik na dete element');
    });
}, 2000);