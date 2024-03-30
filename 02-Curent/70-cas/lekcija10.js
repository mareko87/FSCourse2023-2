//? OOP - Objektno orijentisano programiranje

//* Objekti u JS-u i Konstruktorske funkcije

// const knjiga1 = {
//     naziv: 'Autostoperski vodic kroz galaksiju',
//     autor: 'Daglas Adams',
//     godina: 1979
// }

// const knjiga2 = {
//     naziv: 'Na Drini cuprija',
//     autor: 'Ivo Andric',
//     godina: 1945
// }

// console.log(knjiga1.naziv);
// console.log(knjiga2.autor);
// console.log(knjiga1.godina);

//* Konstruktorske funkcije

//* Osnovna objasnjenja

// function Knjiga(naziv, autor, godina) {
//     // let naziv = naziv;
//     this.naziv = naziv;
//     this.autor = autor;
//     this.godina = godina
// }

// Knjiga();

// const knjiga1 = new Knjiga('Autostoperski vodic kroz galaksiju', 'Daglas Adams', 1979);
// const knjiga2 = new Knjiga('Na Drini cuprija', 'Ivo Andric', 1945);

// console.log(knjiga1);
// console.log(knjiga2);

//? sa funkcijama - metode

// function Knjiga(naziv, autor, godina) {
//     this.naziv = naziv;
//     this.autor = autor;
//     this.godina = godina

//     this.skraceniOpis = function (nekiBr) {
//         return `${this.naziv} je napisao ${this.autor}, ${this.godina} godine. Neki broj je ${nekiBr}`
//     }

//     this.starostKnjige = function () {
//         let danasGodina = new Date().getFullYear();
//         return danasGodina - this.godina;
//     }
// }

// const knjiga1 = new Knjiga('Autostoperski vodic kroz galaksiju', 'Daglas Adams', 1979);
// console.log(knjiga1);
// console.log(knjiga1.skraceniOpis(42));
// console.log(knjiga1.starostKnjige());

// const knjiga2 = new Knjiga('Na Drini cuprija', 'Ivo Andric', 1945);
// console.log(knjiga2);
// console.log(knjiga2.skraceniOpis());
// console.log(knjiga2.starostKnjige());

//? prototype - prototip

function Knjiga(naziv, autor, godina) {
    this.naziv = naziv;
    this.autor = autor;
    this.godina = godina

    // this.skraceniOpis = function (nekiBr) {
    //     return `${this.naziv} je napisao ${this.autor}, ${this.godina} godine. Neki broj je ${nekiBr}`
    // }

    // this.starostKnjige = function () {
    //     let danasGodina = new Date().getFullYear();
    //     return danasGodina - this.godina;
    // }
}

Knjiga.prototype.skraceniOpis = function (nekiBr) {
    return `${this.naziv} je napisao ${this.autor}, ${this.godina} godine. Neki broj je ${nekiBr}`
}

const knjiga1 = new Knjiga('Autostoperski vodic kroz galaksiju', 'Daglas Adams', 1979);
console.log(knjiga1);
console.log(knjiga1.skraceniOpis(42));

Knjiga.prototype.starostKnjige = function () {
    let danasGodina = new Date().getFullYear();
    return danasGodina - this.godina;
}

console.log(knjiga1.starostKnjige());

Knjiga.prototype.promeniGodinu = function (godina) {
    this.godina = godina;
    this.menjano = true;
}

console.log(knjiga1);
knjiga1.promeniGodinu(2020);
console.log(knjiga1);

const knjiga2 = new Knjiga('Na Drini cuprija', 'Ivo Andric', 1945);
console.log(knjiga2);
knjiga2.promeniGodinu(2023);
console.log(knjiga2);
console.log(knjiga2.starostKnjige());

//? Nasledjivanje - Inheretance

function Casopis(naziv, autor, godina, mesec) {
    Knjiga.call(this, naziv, autor, godina);

    this.mesec = mesec;
}

Casopis.prototype = Object.create(Knjiga.prototype);

const casopis1 = new Casopis('Svet kompjutera', 'Voja Antonic', 1984, 1);
console.log(casopis1);

console.log(casopis1.naziv);
console.log(casopis1.starostKnjige());
casopis1.promeniGodinu(2023);
console.log(casopis1);
console.log(casopis1.starostKnjige());


