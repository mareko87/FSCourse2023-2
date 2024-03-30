//? STRINGOVI I METODE STRINGOVA

//? zapisivanje stringova

// let char = 'a'; // broj - 1; '.', '<'

// let str1 = 'Ovo je neki string';
// let str2 = "Ovo je neki string";
// console.log(str1);
// console.log(str2);

// //let str3 = 'Da l' sam posao il' sam dosao'; //ovako ne moze
// let str3 = "Da l' sam posao il' sam dosao";
// console.log(str3);
// let str4 = 'Da l\' sam posao il\' sam dosao';
// console.log(str4);

// let str5 = "Milan je rekao: \"Danas je lep dan\"";
// let str6 = 'Milan je rekao: "Danas je lep dan"';
// console.log(str5);
// console.log(str6);

// let str7 = 'Milan je rekao: \n "Danas je lep dan\"';
// console.log(str7);

// let str8 = `Milan je rekao:
// "Danas je lep dan."
// vise linija koda tj stringa
// i mozemo koristiti i '' i ""
// `;
// console.log(str8);

// let god = 33;
// let ime = "Milan";
// console.log(`${ime} je osoba i ima ${god} godina`);

//? ugradjene metode stringova

//* concat ili konkatenacija
// let s1 = 'Petar';
// let s2 = 'Petrovic';

// console.log(s1 + s2);
// console.log(s1.concat(s2));
// console.log(s1.concat(' ', s2, ' ', 'Pera', ' ', '1985.god'));

//? transformacije stringa

//* trim - trim()

// console.log('     Pozdrav     ');
// console.log('     Pozdrav     '.trim());

// let xxx = 'kafa, jaja, mleko, secer, brasno';
// let niz2 = xxx.split(',');
// console.log(niz2);
// let nizz2 = xxx.split(',').map(element => element.trim());
// console.log(nizz2);

// console.log('********************************************\n');

//* trimStart

// console.log('     Pozdrav     ');
// console.log('     Pozdrav     '.trimStart());

//* trimEnd

// console.log('     Pozdrav     ');
// console.log('     Pozdrav     '.trimEnd());

// console.log('********************************************\n');

//* toLowerCase

// console.log('PETAR'.toLowerCase());

//* toUpperCase

// console.log('petar'.toUpperCase());

// console.log('********************************************\n');

//? Pronalazenje podstringa

//* charAt

// let str = 'Neki string';
// let temp = str.charAt(8);
// console.log(temp);

//* charCodeAt

// console.log(str.charCodeAt(0));
// console.log(str.charCodeAt(5));
// console.log(str.charCodeAt(4));

// let proba = 'ČčĆć';

// console.log(proba.charCodeAt(1));

//* fromCharCode

// console.log(String.fromCharCode(80, 101, 114, 97));

//* normalize

// console.log('\u0049,\u0050,\u0051,\u0263'.normalize());

// console.log('********************************************\n');

//* startsWith

// let str2 = 'Kad sam bio mlad';
// console.log(str2.startsWith('k'));
// console.log(str2.startsWith('Kad'));
// console.log(str2.startsWith(' sam '));

// console.log('********************************************\n');

//* endsWith

// console.log(str2.endsWith('K'));
// console.log(str2.endsWith('mlad'));

// console.log('********************************************\n');

//* includes

// console.log(str2.includes(' sam '));
// console.log(str2.includes('m b'));
// console.log(str2.includes('K b'));

// console.log('********************************************\n');

//* indexOf - vraca index prvog pojavljivanja zadatog podstringa - ako ne postoji -1

// let str3 = `Bila jednom jedna devojcica koja se zvala Crvenkapa. Ona je jednom isla kod bake, a jednom kod lovca.`;
// let strZaPretragu = 'jednom'
// let indexPrvi = str3.indexOf(strZaPretragu);
// console.log(indexPrvi);

//* lastIndexOf - vraca index poslednjeg pojavljivanja zadatog podstringa

// let indexPoslednji = str3.lastIndexOf(strZaPretragu);
// console.log(indexPoslednji);

// console.log('********************************************\n');

//* match

// let str4 = 'Ovo je NAJBOLJI cas javascripta do sada';
// console.log(str4.match('je'));
// console.log(str4.match(/[A-Z]/g));

//* matchAll

//* spread operator '...'

// const A = [1, 2, 3];
// const B = [4, 5, 6];
// //[1,2,3,4,5,6]

// let C = [A, B]; // ovo vraca niz nizova, nije ono sto zelimo da dobijemo
//let C = [...A, ...B]
// let C = [0, ...A, 'X', ...B, 99]
// console.log(C);

// console.log('********************************************\n');

//* matchAll - nastavak

// console.log(str4.matchAll('j')); // ovako ne moze, dobili smo neki iterato - znaci da postoji neki niz
// console.log([...str4.matchAll('j')]);
// [...str4.matchAll('a')].forEach(element => {
//     console.log(`${element} se nalazi na ${element.index} mestu`);
// })

// console.log('********************************************\n');

//? izdvajanje podstringa

//* slice

// console.log('Ovo je string koji cemo Slasovati'.slice(7, 13)); //ide od 7 do 13, ne uzimajuci 13 element, vec samo do 12
// console.log('********************************************\n');

//* substring - daje isto sto i slice

// console.log('Ovo je string koji cemo Slasovati'.substring(7, 13));
// console.log('Ovo je string koji cemo Slasovati'.substring(13, 7));

// console.log('********************************************\n');

//* split

// let str6 = 'Ovo je string koji cemo splitovati'
// console.log(str6.split(' '));
// let xxx = 'kafa, jaja, mleko, secer, brasno';
// let niz2 = xxx.split(',');
// console.log(niz2);

// console.log('********************************************\n');

//? zamena unutar stringa

//* search

// let str5 = 'jabuka, kruska, visnja, jabuka, kruska, banana, limun';
// console.log(str5.search('kruska'));
// console.log('********************************************\n');

//* replace

// console.log(str5.replace('jabuka', 'ZAMENA'));
// console.log(str5.replace(/jabuka/g, 'ZAMENA')); //ako zelimo sva pojavljivanja da zamenimo -/g - modifikator

//! vredne pomena

//* padStart

// console.log('pozdrav'.padStart(10, '_'));

//* padEnd - pad je skraceno od padding 

// console.log('pozdrav'.padEnd(10) + 'proba');
// console.log('pozdrav'.padEnd(10, '*'));

//! primer koriscenja

// let sifra = '54'; //0054
// console.log(sifra.toString().padStart(4, '0'));

//* repeat

// console.log('WebsitesWorkshop'.repeat(10));

//! STRING je NIZ karaktera 

//* duzina JS stringova

let str10 = 'Ovo je neki string';
console.log(str10.length);

const niz = [1, 2, 3, 4]
console.log(niz[0]);

let nizKar = '1234'
console.log(nizKar[0]);

console.log('********************************************\n');

let ss = 'Ivica i Marica';

for (let i = 0; i < ss.length; i++) {
    console.log(ss[i]);
}