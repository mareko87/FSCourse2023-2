// 'use strict'

//? objects- objekti

// const osoba = {
//     ime: 'Petar',            // property
//     prezime: 'Petrovic',
//     godine: 38,
//     ozenjen: true
// }

// console.log(osoba);
// console.log(osoba.godine);
// console.log(`${osoba.ime} ${osoba.prezime} ${osoba.godine} ${osoba.ozenjen}`);

// console.log(osoba['godine']);

//* object.keys - vraca sve key (kljuceve) za vas objekat

// let kljucevi = Object.keys(osoba);
// console.log(kljucevi);

// kljucevi.forEach((kljuc) => console.log(osoba[kljuc]))
// kljucevi.forEach((kljuc) => console.log(`${kljuc}: ${osoba[kljuc]}`))

// console.log('****************************************************');

//* Slozeni objekti - nizovi u objektu

// const osoba2 = {
//     ime: 'Petar',
//     prezime: 'Petrovic',
//     godine: 38,
//     ozenjen: true,
//     adrese: [
//         {
//             ulica: 'neka ulica1',
//             broj: 45,
//             grad: 'Beograd',
//             drzava: 'Srbija'
//         },
//         {
//             ulica: 'neka ulica2',
//             broj: 56,
//             grad: 'Novi Sad',
//             drzava: 'Srbija'
//         }
//     ]
// }

// console.log(osoba2.adrese[1].ulica);

// console.log('****************************************************');
// osoba2.adrese.forEach(adresa => console.log(adresa.ulica));

//* funkcije u objektu - metode - Methods

console.log();    // log je metoda objeckta console

const pas = {
    ime: 'dzeki',
    rasa: 'vucjak',
    godine: 3,
    tezinaKg: 20,

    // psecihGodina: pas.godine * 7   //ovako ne moze - u ovom trenutku pas ne postoji

    // psecihGodina: this.godine * 7  //ni ovako ne moze

    psecihGodina: function () {
        return this.godine * 7;
    }
}

console.log(pas);

// console.log(pas.godine * 7);

// console.log(pas.psecihGodina(pas.godine))

console.log(pas.psecihGodina());

//* Kljucna rec 'this'

// console.log(this);

// document
//      window
//             .js
//                  objekat
//                          f-ja

// function aaa() {

// }

// this.a = 42;
// var aa = 24;

// let aaaa = 56;

//* call i apply

// const x = {
//     a: 4,
//     b: 2
// }

// console.log(x);

// function saberi(c, d) {
//     return this.a + this.b + c + d
// }

// console.log(saberi());

//* call
// console.log(saberi.call(x, 2, 3));   // prihvata listu argumenata

//* aplly
// console.log(saberi.apply(x, [2, 3])); // prihvata niz argumenata

//* bind - povezi

// const objekat = {
//     a: 'proba 123'
// }

// function fun2() {
//     return this.a
// }

// console.log(fun2());        //undefined - ne moze ovako

// let temp = fun2.bind(objekat);
// console.log(temp());
// console.log(fun2.bind(objekat)());


//nije moguce bind-ovati vise puta
// let temp2 = temp.bind({
//     a: 'milan milanovic'
// })

// console.log(temp2());

// const obj = {
//     a: 5,
//     fun2: fun2,
//     temp: temp,
//     temp2: temp2
// }

// console.log(obj);
// console.log(obj.fun2(), obj.temp(), obj.temp2());


// arrow f-je i 'this'

// const obj2 = {
//     obicnaFja: function () {
//         console.log(this === obj2);
//     },
//     arrowFja: () => {
//         console.log(this === obj2);
//         console.log(this === window);
//     }
// }

// obj2.obicnaFja();
// obj2.arrowFja();

// 'use strict'

xxx = 9;
console.log(xxx);

let pera;
pra = 5;
console.log(pera);

// let, const arrow f-je po defaultu rade u 'use strict' modu


function fun1() {
    // 'use strict'
    return this
}

console.log(fun1());