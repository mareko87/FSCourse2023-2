//* Funkcije u JS

// Fukcije su fundamentalna gradivna jedinica vecine programskih jezika (moze se nazivati i procedura i/ili metoda)
// Funkcije su podprogrami koji se mogu pozivati iz nekog drugog dela programa i koriste se da izvrse odredjeni zadatak ili da izracunaju nesto
// Funkcije mogu da primaju neke podatke na ulazu i da vracaju neke podatke na izlazu iz funkcije. Ovo nije obavezno, jer funkcije mogu biti i bez ulaza i bez izlaza i tada se nazivaju procedure
// u JS-u fukcije su objekti prve klase

//? kreirenje funkcije

// function imeFunkcije (parametri) {
//     telo fukcije
// }

// imeFunkcije (parametri);

//* definisanje funkcije

// function imeFunkcije(param1, param2,...) {
//     naredbe;                    //a = 3 + 5;
//     blokovi naredbi;            //if, for...
//     return                      //ono sto vraca funkcija
// }
// function pozdrav() {
//     console.log('Pozdrav svima');
// }

// //* pozivanje funkcije

// pozdrav();

// pozdrav();

// pozdrav();
// console.log(`************************************************`);

// function pozdrav2() {
//     let a = 3 + 5;
//     console.log(`Pozdrav svima, rezultat je ${a}`);
// }

// pozdrav2();
// console.log(`************************************************`);

//? funkcije sa parametrima

// function saberi(a, b) {
//     let c = a + b;
//     console.log(`Rezultat ${a} + ${b} = ${c}`);
// }

// saberi(3, 5);

// saberi(2.34, 45.67);

// saberi('kuca', 'maca')


//? funkcije koje vracaju vrednost

// function saberi2(a, b) {
//     let c = a + b;
//     return c;
// }

// saberi2(2, 4);    //nema ispisa vrednosti

// let rez = saberi2(2, 4);
// console.log(rez);

// console.log(saberi2(5, 6));

//* deklarisanje funkcije

// function saberi2(a, b) {
//     return a + b;
// }

// const saberi2 = function (a, b) {
//     return a + b;
// }

// function fun2(saberi2, xx) {
//     saberi2(5, 6)
// }

//? Arrow funkcija

// function ispisi() {
//     console.log('Neki ispis');
// }

//* arrow oblik

// const ispisi = () => {
//     console.log('Neki ispis');
// }

// ispisi();


// const saberi3 = (a, b) => {
//     let c = a + b;
//     return c;
// };

// console.log(saberi3(3, 5));

//* redosled pisanja koda
//* Hoisting - podizanje, uzdizanje

//? function hoisting

// ispis('Petar');

// function ispis(ime) {
//     console.log(`Pozdrav ${ime}, kako si?`);
// }

//? variable hoisting

// console.log(br);

// var br = 6;
// var br;

// br =6;

// console.log(br);

// console.log(br2);           //vraca gresku
// let br2;

// console.log(br3);           //vraca indefined
// var br3;

//* Globalne i lokalne promenljive - oblast definisanosti i osencenje promenljivih (let vs var)

// var - global scope - vazi u celom domenu u kome je definisana
// let - block scope - vezana je za blok u kome je definisana i samo u njemu vazi

var a = 7;
// for (var i = 0; i < a; i++) {
//     var promenljiva = 5;
//     promenljiva = promenljiva + 1;
//     console.log(promenljiva);
// }

// // console.log(promenljiva);
// console.log(`Trenutna vrednost ${i}`);

// for (var i = 0; i < a; i++) {
//     promenljiva = promenljiva + 1;
//     console.log(promenljiva);
// }

// for (var i = 0; i < a; i++) {
//     promenljiva = promenljiva + 1;
//     console.log(promenljiva);
// }

// for (let i = 0; i < a; i++) {
//     let promenljiva = 5;
//     promenljiva = promenljiva + 1;
//     console.log(promenljiva);
// }

// for (let i = 0; i < a; i++) {
//     let promenljiva = 2;
//     promenljiva = promenljiva + 1;
//     console.log(promenljiva);
// }

// console.log(promenljiva);

//? sencenje promenljivih - variable shadowing

// const fun = (prvi, drugi) => {
//     prvi = 5;
//     return prvi;
// }

// console.log(fun(3, 4));

// var abc = 455;

// const fun2 = (abc) => {
//     var abc = 10;
//     return abc;
// }

// console.log(fun2());