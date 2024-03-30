//? NIZOVI i METODE Nizova

//* Metode nizova

//? kreiranje nizova

// const niz = [1, 2, 3, 4, 5, 6];
// const niz = Array(1, 2, 3, 4, 5, 6);
// const niz = new Array(1, 2, 3, 4, 5, 6);

// console.log(niz);

//* Array.of() - II nacin kreiranja niza

// console.log(Array(7));      // kreira niz od 7 praznih elemenata [_, _, _, _, _, _, _]
// console.log(Array.of(7));   // [7]
// console.log(Array.of(7, 3, 4));

// const a = 3;
// a = 4;                  //ne moze da dodeli druga vrednost varijabli koja je definisana sa const
// console.log(a);

// const niz2 = [1, 2, 3, 4]
// niz2 = [5, 6, 7];

// niz2.push(9);
// console.log(niz2);

//? Metode nizova

//* dodavanje i uklanjanje elemenata

//* push - dodavanje elementa na kraj niza

// const niz = ['mile', 'marta', 'petar', 'ivana'];
// console.log(niz);
// console.log('**********************************************');

// let rez = niz.push('visnja');

// console.log(niz);
// console.log(niz.length);
// console.log(rez);

// console.log('**********************************************');

//* pop - izbacuje element sa kraja niza i vraca ga kao vrednost

// let rez2 = niz.pop();
// console.log(niz);
// console.log(niz.length);
// console.log(rez2);

// console.log('**********************************************');

//* unshift - dodavanje elementa na pocetak

// let rez3 = niz.unshift('visnja');
// console.log(niz);
// console.log(niz.length);
// console.log(rez3);

//* shift - uklanjanje elementa sa pocetka

// let rez4 = niz.shift();
// console.log(niz);
// console.log(niz.length);
// console.log(rez4);

// 0010 <<   => 0100        //shift
// 1001 <<   => 0010

//* concat - spajanje dva ili vise nizova (vraca kopiju novog niza)

// const n1 = ['a', 'b', 'c'];
// const n2 = ['d', 'e', 'f'];
// ['a', 'b', 'c', 'd', 'e', 'f']

// console.log(n1 + n2);   //ovako se ne dobija zeljeni razultat
// console.log([n1, n2]);  // ['a'  'b'   'c']
//                         ['d'   'e'  'f']

// const n3 = n1.concat(n2, ['g', 'h']);

// console.log(n3);

//* spread operator (...)

// const n4 = ['xx', ...n1, ...n2, 'g'];
// console.log(n4);

//* splice - dodaje i oduzima element iz niza (modifikuje originalni niz)

// const niz = [1, 2, 3, 4, 5];
// console.log(niz);

// let rez = niz.splice(2, 2, ...[7, 8, 9]);
// let rez = niz.splice(2, 0, 8, 7, 6, 25);

// console.log(niz);
// console.log(rez);

//* slice - odabira (odseca) deo niza i vraca ga kako novi niz

// const niz = [1, 2, 3, 4, 5];
// console.log(niz);

// let rez = niz.slice(2, 4);

// console.log(niz);
// console.log(rez);

//* copyWithin - kopira elemente niza sa jednog na drugo mesto u okviru niza

// const niz = ['mile', 'marta', 'petar', 'ivana', 'cira'];
// console.log(niz);

// niz.copyWithin(0, 2, 5);
// console.log(niz);

//*? pretraga niza

//* find - vraca prvi lelement u nizu koji zadovpljava zadati uslov

// const niz = ['milan', 'petar', 44, true, 'igor'];

// let rez = niz.find(element => {
//     if (element === 'petar') return element
// })
// console.log(rez);

//! primer

// const niz2 = [1, 2, 3, 4, 5];
// let pronadjen = niz2.find(broj => {   //vraca prvi element koji ispunjava uslov - SAMO JEDAN ELEMENT
//     if (broj > 3) return broj
// })
// console.log(pronadjen);

// let pronadjen2 = niz2.find(broj => broj > 3);
// console.log(pronadjen2);

//* findIndex- vraca poziciju (index) prvog elementa koji zadovaoljava zadati uslov

// const sareni = ['str', true, 4, 'neki string', 'jos neki string', 5]
// let rez = sareni.findIndex(element => typeof element === 'number');
// console.log(rez);

//* indexOf - pretrazuje niz od pocetka trazeci zeljeni element-njegovu poziciju

// let rez2 = sareni.indexOf('jos neki string');
// console.log(rez2);

//* lastIndexOf - pretrazuje niz unazad trazeci zeljeni element-njegovu poziciju

// let rez3 = sareni.lastIndexOf('str');
// console.log(rez3);

//? konverziju niza u string

//* join

// const niz = ['Kad', 'sam', 'imao', '18', 'godina', 'polozio', 'sam', 'vozacki', 'ispit'];
// console.log(niz);
// let nizJoin = niz.join();
// let nizJoin2 = niz.join(' ')

// console.log(nizJoin);
// console.log(nizJoin2);

//* toString

// console.log(niz.toString());

//? sortiranje niza

//* sort - sortira elemenete niza po datom kriterijumu i unistava originalni niz

// const niz = [3, 71, 41, 1, 92, 235, 55];
// console.log(niz);
// // let sortiran = niz.sort();      // sortira po rastucem redosledu ASCII vrednosti

// let sortiran = niz.sort((a, b) => {
//     return a - b;      //ako je negativno ostaje isto, a ako je pozitivno zameni ih
// })
// console.log(sortiran);

// let sortiran2 = niz.sort((a, b) => a - b);   //skraceni zapis
// console.log(sortiran2);

//* reverse - menja redosled elemenata u obrnutom smeru

// const niz = [1, 2, 3, 4, 5];
// const niz = [1, 'pera', 3, 'maja', 5, true]
// console.log(niz);
// // niz.reverse();
// console.log(niz.reverse());

//? iteracije kroz nizove - metode koje "prodju" kroz sve elemente niza

//* forEach - iterira kroz niz - poziva bezimenu funkciju za svaki element niza

// const niz = [1, 2, 3, 4, 5];

// niz.forEach((element, idx, n) => {
//     // console.log(`${idx} - ${element} - ${n}`);
//     // console.log(`idx:${idx} - broj:${element}`);
//     // console.log(element + element);
//     // console.log(element ** 3);
//     // console.log(n);
//     n[idx] = element + element;
// })

// console.log(niz);

// //! primer

// const imena = ['petar', 'milan', 'marko'];
// const prezimena = ['petrovic', 'milanovic', 'markovic'];

// const prime = [];

// imena.forEach((ime, idxIme) => {
//     prezimena.forEach((prezime, idxPrez) => {
//         if (idxIme === idxPrez) {
//             prime[idxIme] = ime + ' ' + prezime;
//         }
//     })
// })
// console.log(prime);

//* filter - kreira novi niz sa elementima starog niza koji zadovoljvaju zadati uslov

// const niz = [1, 2, 3, 4, 5];

// let nizFiltiranihVrednosti = niz.filter((broj, idx) => {
//     if (broj > 2 && broj < 6) {
//         return broj
//     }
// })

// let nizFiltiranihVrednosti = niz.filter((broj, idx) => {
//     if (broj % 2 !== 0) {
//         return broj
//     }
// })

// const imena = ['pera', 'perica', 'iva', 'marko', 'milorad', 'mira']

// let nizFiltiranihVrednosti = imena.filter((ime, idx) => {
//     if (ime.length > 4) {
//         return ime
//     }
// })

// console.log(nizFiltiranihVrednosti);

//* map - kreira novi niz sa razultatom pozivanja funkcije za svaki element postojeceg niza

// const niz = [1, 2, 3, 4, 5, 6];

// let mapiran = niz.map((broj, idx) => {
//     return broj * 2
// });

// console.log(mapiran);
// console.log(niz);

//* some - proverava da li bar jedan element niza zadovoljava uslov - vraca true ili false

// const niz = [1, 2, 3, 4, 5, 6];
// let rez = niz.some((broj) => {
//     if (broj % 2 === 0) {
//         return broj;
//     }
// })
// console.log(rez);

//* every - proverava da li svi element niza zadovoljavaju uslov - vraca true ili false

// const niz2 = [1, 3, 4, 11, 7, 9];
// let rez2 = niz2.every((broj) => {
//     if (broj % 2 !== 0) {
//         return broj;
//     }
// })
// console.log(rez2);

//* includes - proverava da dati niz sadrzi neki element - vraca true ili false

// const imena = ['pera', 'perica', 'iva', 'marko', 'milorad', 'mira'];
// let rez = imena.includes('iva');
// console.log(rez);

//* reduce - redukuje niz u jedan element obradjujuci elemente niza sa leve na desnu stranu po neeko kriterijumu

// const niz = [1, 3, 4, 11, 7, 9];
// let zbir = 0;
// let zbir2 = 0;
// for (let i = 0; i < niz.length; i++) {
//     zbir = zbir + niz[i];
//     // zbir += niz[i];
// }
// console.log(zbir);

// // niz.forEach((broj) => {
// //     zbir2 += broj;
// // })
// // console.log(zbir2);
// niz.forEach(broj => zbir2 = zbir2 += broj)// skraceni oblik
// console.log(zbir2);

// let suma = niz.reduce((akumulator, element, idx, n) => {
//     return akumulator + element;
// }, 0);

// console.log(suma);

// let prosek = niz.reduce((akumulator, broj) => {
//     return akumulator + broj;
// })
// console.log(prosek / niz.length);


//* reduce - pronalazenje datuma

const datumi = [
    '2019/06/01',
    '2020/06/01',
    '2020/07/05', // Ovo je najnoviji datum
    '2018/11/10'
].map(d => new Date(d));

// console.log(datumi);

// datumi u JS se mogu porediti sa < ili >
// datum a > datuma b samo ako je datum a kasniji od datuma b

//! ispravljeno
// const maxDatum = datumi.reduce((max, d) => {
//     if (d > max) {
//         return d;
//     } else {
//         return max
//     }
// }, datumi[0]);
// console.log(maxDatum);

//? vredne pomena

//* isArray - proverava da li je neki objeka niz

const imena = ['pera', 'perica', 'iva', 'marko', 'milorad', 'mira'];
// console.log(Array.isArray(imena));

//* entries - vraca uredjeni par index/vrednost iterativnog objekta niza

//! ispravljeno
let rez = imena.entries();
console.log(rez);
let tmp = [...rez];
console.log(tmp);


//! metode koje nisam pomenu na casu, ali da ih imate (spadaju u "vredne pomena")

//* fill - popunjava niz sa istom konstantnom statickom vrednoscu

// const niz = ['pera', 'mika', 'pera', 'mika', 'pera', 'mika'];
// console.log(niz.fill('*', 2, 4));
// console.log(niz);

//* keys - vraca sve indexe originalnog iterativnog objekta

// const niz = ['pera', 'mika', 'pera', 'mika', 'pera', 'mika'];
// let indexi = niz.keys();
// console.log([...indexi]);

//* valueOf - vraca primitivne vrednosti niza (vraca sam niz)

// const niz = ['milos', 'petar', 'marko', 'igor', 'zika', 'mika'];
// console.log(niz.valueOf());



