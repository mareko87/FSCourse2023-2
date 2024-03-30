//? OOP - klase - Class

// class Knjiga {

//     static brKnjiga=0;

//     constructor(naziv, autor, godina) {
//         this.naziv = naziv;
//         this.autor = autor;
//         this.godina = godina
//     }

//     skraceniOpis(nekiBr) {
//         return `${this.naziv} je napisao ${this.autor}, ${this.godina} godine. Neki broj je ${nekiBr}`
//     }

//     starostKnjige() {
//         let danasGodina = new Date().getFullYear();
//         return danasGodina - this.godina;
//     }

// }

// const knj1 = new Knjiga('Autostoperski vodic kroz galaksiju', 'Daglas Adams', 1979);
// console.log(knj1);
// console.log(knj1.skraceniOpis());


// Knjiga.prototype.skraceniOpis = function (nekiBr) {
//     return `${this.naziv} je napisao ${this.autor}, ${this.godina} godine. Neki broj je ${nekiBr}`
// }

// Knjiga.prototype.starostKnjige = function () {
//     let danasGodina = new Date().getFullYear();
//     return danasGodina - this.godina;
// }

// const knj2 = new Knjiga('Na Drini cuprija', 'Ivo Andric', 1945);
// console.log(knj2);
// console.log(knj2.skraceniOpis());
// console.log(knj2.starostKnjige());

// console.log(Knjiga.length);


class Knjiga {
    static brKnjiga = 0;
    constructor(naziv, autor, godina) {
        this.naziv = naziv;
        this.autor = autor;
        this.godina = godina
        Knjiga.brKnjiga = Knjiga.brKnjiga + 1;
    }
    skraceniOpis(nekiBr) {
        return `${this.naziv} je napisao ${this.autor}, ${this.godina} godine. Neki broj je ${nekiBr}`
    }
    starostKnjige() {
        let danasGodina = new Date().getFullYear();
        return danasGodina - this.godina;
    }
}
console.log(Knjiga.brKnjiga);

const knj1 = new Knjiga('Autostoperski vodic kroz galaksiju', 'Daglas Adams', 1979);
const knj2 = new Knjiga('Na Drini cuprija', 'Ivo Andric', 1945);
console.log(Knjiga.brKnjiga);

//? Nasledjivanje klasa

class Casopis extends Knjiga {
    constructor(naziv, autor, godina, mesec) {
        super(naziv, autor, godina)

        this.mesec = mesec;
    }
}

const casop1 = new Casopis('Svet kompjutera', 'Voja Antonic', 1984, 1);
console.log(casop1);


const casop2 = new Casopis('Svet ', 'Vovfgarhatrhja Antonic', 1984, 1);

console.log(casop1.starostKnjige());
console.log(Knjiga.brKnjiga);

// Knjiga - roditeljska klasa (super klasa -> klasi Casopis)
//    ^
//    |
//    |
// Casopis - dete klasa