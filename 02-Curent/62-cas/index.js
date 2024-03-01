// prva naredba;
// druga naredba;
// ...;
// poslednja naredba;

//* komentari

// jednolinijski komentar

/* viselinijski
komentar
bsrhrthsth
hsthsth
*/

// console.log('test');  // ova linija koda ce u konzoli ispisati 'test'

//* promenljive

// kljucne reci "let", "const" i "var"

//let a; //deklaracija
//a = 5; //inicijalizacija - definicija

// let a = 5;
// console.log(a);

// let ime = 'Petar';
// let b = 54.789;

// let c = a + b;
// console.log(c);

//? notacija ili nacin imenovanja

// let imePromenljive = 'neki opis/vrednost'

//promenljive u nazivu mogu da sadrze samo slova, brojeve i '_', ali naziv ne sme da pocen brojem

// let _3Dcretez = 'neki opis';

// let petar;
// let Petar;

// let ime = 'Petar';
// let ime2 = 45; //nije dobar primer

// imePrvePromenljive - camel case
// ImeDrugeProvenljive - Pascal case

//ne u JS
// ime_trece_promenljive - kobasica notacija
// sIme, nBroj... - madjarska notacija, hungarian

//* tipovi podataka

// let x;

// x = 10;
// x = "Milan"
// // x = a + b;

// console.log(x);

//? Primitivni tipovi podata
// 1. String - znakovni tip podataka
// 2. Number - brojevni tip podataka
// 3. BigInt - jako veliki brojevi
// 4. Boolean - logicki tip tacno/netacno
// 5. Undefined
// 6. Null
// 7. Symbol

//? Referentni tipovi podataka
// 8. Object
// - Array - nizovi
// - Object - objekat
// - Date - datum


//*    1. String  - znakovni tip podataka

// let char = 'a';

// let str1 = "Neki tekst";
// let str2 = 'Neki tekst';
//let str3 = "Neki tekst'; // ovo ne moze da se koristi ovako

//let str4 = 'Da l' sam posao il' sam dosao'; //ovo ne moze
// let str5 = "Da l' sam posao il' sam dosao";
// let str6 = 'Da l\' sam posao il\' sam dosao';

// let str7 = 'Milan je rekao:"Dobar dan"';

// let str8 = 'Milan je rekao:\n"Dobar dan"';

// console.log(str8);

//? template literal - ``
// let str9 = `Template literal`

// let str10 = `Petar je rekao:
// "Danas je lep dan"
// vise linija teksta
// i moze da se koristi ' ' " "
// `
// console.log(str10);

//* Number - opseg -2^53-1 do 2^53-1 (- + 9.007.199.254.740.991)

// let broj = 5;
// let broj2 = 123_456_789;

// console.log(broj2);

// let broj3 = -45.67;
// console.log(broj3);

// const Pi = 3.14;
// console.log(Pi);

// Pi = 15;
// console.log(Pi);

//* BigInt
// console.log(10000000000000000000000 * 1000000000000000000000);

//* Infinity

// console.log(-5 / 0);

//* NaN - Not A Number

// console.log(100 / 'deset');


//* Boolean - Bool - true/false

// let bullTrue = false;

// console.log(bullTrue);
// console.log('false');

// console.log(4 < 5);

// let godine = 35;

// if (godine < 30) {
//     console.log('Jos si mlad');
// } else {
//     console.log('I nisi tako mlad');
// };

//* Undefined

// let x;
// console.log(x);


//* Null

// let prom = null;
// console.log(prom);

// let prom2 = 5 / prom;
// console.log(prom2);

//* Symbols

// -+Infinity
// Nan
// USD - User Defined Symbols


//? Referentni tipovi podataka

//* Array - Nizovi

// const kontinenti = ["Afirka", "Evropa", "Azija", "Amerika"];
// // idx                  0        1         2       3
// console.log(kontinenti);

// console.log(kontinenti[2]);

// console.log(kontinenti.length);

// const niz1 = ['Milan', 2, null, 'Petar', undefined];
// console.log(niz1);
// console.log(niz1[3]);
// console.log(niz1.length);

//* Object - obekti {}

//key : value - property - osobina

// let osoba = {
//     ime: 'Petar',
//     prezime: 'Petrovic',
//     godRod: 1996
// }

// console.log(osoba);
// console.log(osoba.ime);
// console.log(osoba.prezime);

// console.log(`Osoba se zove ${osoba.ime} ${osoba.prezime} i rodjena je ${osoba.godRod} godine`);

// let osoba1 = {
//     ime: 'Petar',
//     prezime: 'Petrovic',
//     godRod: 1996,
//     adresa: ['Ulica', 'broj'],
//     nekiObj: {
//         prvi: 123,
//         drugi: 'sdgsdgsg'
//     }
// }

// console.log(osoba1);
// console.log(osoba1.adresa[0]);

// let osobe = [
//     {
//         ime: 'Petar',
//         prezime: 'Petrovic',
//         godRod: 1996,
//         adresa: ['Ulica', 'broj'],
//         nekiObj: {
//             prvi: 123,
//             drugi: 'sdgsdgsg'
//         }
//     },
//     {
//         ime: 'Marko',
//         prezime: 'Markovic',
//         godRod: 1996,
//         adresa: ['Ulica', 'broj'],
//         nekiObj: {
//             prvi: 123,
//             drugi: 'sdgsdgsg'
//         }
//     },
//     {
//         ime: 'Milan',
//         prezime: 'Milanovic',
//         godRod: 1996,
//         adresa: ['Ulica', 'broj'],
//         nekiObj: {
//             prvi: 123,
//             drugi: 'sdgsdgsg'
//         }
//     }
// ]

// for (let i = 0; i < osobe.length; i++) {
//     console.log(`Osoba se zove ${osobe[i].ime} ${osobe[i].prezime} i rodjena je ${osobe[i].godRod} godine`);
// }

//* operatori

//? operator dodele =
// let a = 5;
// a = 7;
// console.log(a);

//? operator +=

// a += 5;  // a = a + 5;
// console.log(a);

//? operator kondicionalnog uvecavanja ++ menja vrednost za 1

// console.log(++a);
// console.log(a);

// console.log(--a);

//? % moduo operator - ostatak pri deljenju

// let c = 11 % 3;  //11/3 = 3.66667 - vraca ostatak celobrojnog deljenja -> 2
// console.log(c);

//? operator stepenovanja

//10 na 3, 10 ^3, 10**3
// console.log(10 ** 3);

//? operator uporedjivanja

// let broj = 5;

// console.log(3 == broj);
// console.log(3 != broj);

// console.log(3 == '3');
// console.log(3 === '3');

//? bool operatori

// console.log(4 > 2 && 3 < 1);  //&& - i , oba uslova moraju biti ispunjena
// console.log(4 > 2 || 3 < 1);  //|| - ili , ili jedan ili drugi uslov..

//* Konverzija tipova podataka

//? String-Number

// let strBr = '4.123'
// let a = Number(strBr)

// console.log(strBr);
// console.log(a);

// let strBr2 = 'asdf'
// let b = Number(strBr2)

// console.log(strBr2);
// console.log(b);

// let c = Number('123456');
// console.log(c);

// console.log(parseFloat('12.3456'));
// console.log(parseInt('12.3456'));

//? Number-Strig

// let xx = 32.456;
// console.log(xx);
// let strXX = String(xx);
// console.log(strXX);


//? Brojevne metode

// let br = 1234.56789;

// console.log(br);
// console.log(br.toExponential(2)); //ispisuje broj u eksplicitnom obliku, (2) je broj cifara iza zareza
// console.log(br.toFixed(2)); //skracivanje broja na (2) decimala
// console.log(br.toPrecision(5)); //skracivanje broja na (5) cifara

//? bool -> Number, String

// let bul = false;
// console.log(bul);
// console.log(String(bul));
// console.log(Number(bul));  // 0 ili 1

//* Date - datum

// let datum = new Date();

// console.log(datum);

// console.log(Number(datum));  //broj milisekundi od 01.01.1970.g datum nastanka LINUX-a, univerzalno vreme usvojen u JS

// console.log(datum.getTime()) // vraca br milisekundi
// console.log(datum.getDate());  // 1 - 31
// console.log(datum.getMonth()); // 0 - 11
// console.log(datum.getDay()); // Mon-Sun
// console.log(datum.getFullYear()); // YYYY
// console.log(datum.getHours()); // HH
// console.log(datum.getMinutes()); //MM
// console.log(datum.getSeconds()); //ss
// console.log(datum.getMilliseconds()); // mmm

//? Date->string

// console.log(String(datum));
// console.log(Date().toString());


//? Automatska konverzija podataka

// 5 + null// 5 pretvorio je null u 0
// "5" + null// 5null pretvorio null u string
// "5" + 2 // 52 pretvorice 2 u string
// "5" - 2 // 3 zato sto pretvara "5" u 5
// "5" * "2"// 10 oba pretvara u brojeve//
