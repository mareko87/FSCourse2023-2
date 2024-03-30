//! strukture za upravljanje tokom programa

//? strukture za kontrolu toka programa

//* if naredba

// let uslov = true;

// if (uslov) {
//     //naredbe koje se izvrsavaju ako je uslov ispunjen - true
//     console.log(`Uslov je ispunjen`);
// }

// let god = 25;

// if (god > 18) {
//     console.log(`Mozes da polazes vozacki ispit`);
// }

let ime = 'Pera';

// if (ime === 'Pera') {
//     console.log(`Ime je ${ime}`);
// }

//* AND - && i OR || operatora

//* AND primer

// if (god > 21 && god < 67) {
//     console.log(`Nisi jos za penziju`);
// }

//* OR primer

// if (god > 30 || ime === 'Pera') {
//     console.log(`Ispunjen je bar jedan uslov`);
// }

// x AND y => rez
// 0     0     0        x    y   rez
// 0     1     0   ____/____/____()
// 1     0     0
// 1     1     1

// x  OR y => rez
// 0     0     0        x
// 0     1     1   ____/___    rez
// 1     0     1       y   |___()
// 1     1     1   ___/____|

//* if then else - ako -> onda -> u suprotnom

// let god = 17;

// if (god > 18) {
//     console.log(`Mozes da polazes vozacki ispit`);
// } else {
//     console.log(`Ne mozes jos da polazes vozacki ispit`);
// }

//* tenarni operator

//uslov ? tacno : nije tacno;

// god > 18 ? console.log(`Mozes da polazes vozacki ispit`) : console.log(`Ne mozes jos da polazes vozacki ispit`);

//* else if

// if (god < 7) {
//     console.log(`Ti si za vrtic`);
// } else if (god < 15) {
//     console.log(`Ti si za osnovnu skolu`);
// } else if (god < 19) {
//     console.log(`Ti si za srednju skolu`);
// } else {
//     console.log(`Ti nisi u skoli - nadam se`);
// }

//* case - switch

// let voce = 'limun'

// switch (voce) {
//     case 'jabuka':
//         console.log(`voce je jabuka`);
//         break;
//     case 'ananas':
//         console.log(`voce je ananas`);
//         break;
//     case 'tresnja':
//         console.log(`voce je tresnja`);
//         break;
//     default:
//         console.log(`nema tog voca`);
//         break;
// }

//! primer

// let metodPlacanja = 1;   //0-visa; 1-master, 2-kes

// switch (metodPlacanja) {
//     case 0:
//         console.log(`Izabrali ste VISA karticu`);
//         break;
//     case 1:
//         console.log(`Izabrali ste MASTER karticu`);
//         break;
//     case 2:
//         console.log(`Izabrali ste kes`);
//         break;
//     default:
//         console.log(`Nema tog nacina placanja`);
//         break;
// }

//! ovako ne moze da se koristi case-switch
// let god = 7;

// switch (god) {
//     case (god < 7):   //god < 7 - true ili false
//         console.log(`Ti si za vrtic`);
//         break;
//     case (god < 15):
//         console.log(`Ti si za osnovnu skolu`);
//         break;
//     case (god < 19):
//         console.log(`Ti si za srednju skolu`);
//         break;
//     default:
//         console.log(`Ti nisi u skoli - nadam se`);
//         break;
// }

//? iteratorske petlje

//* for petlja - for loop

//* osnovni oblik

//          od                  do              po
//for (pocetna vrednost; krajnja vrednost; korak iteracije){
//for (let    i=0;            i<10;             i = i+1 )    
//telo petlje
//}


// for (i = 1; i <= 10; i = i + 2) {
//     console.log(i);
// }

const niz = ['Pera', 'Mika', 'Maja', 'Nina', 'Laza'];
// idx          0       1       2       3       4

// console.log(niz);
// console.log(niz[1]);

// for (let i = 0; i < 5; i++) {
//     // console.log(niz[i]);
//     console.log(`${i}. element niza je ${niz[i]} `);
// }

// niz.push('Ana')
// console.log(niz);

// niz.pop();
// console.log(niz);

// niz.pop();
// console.log(niz);

// niz.push('Laza')
// console.log(niz);

// for (let i = 0; i < 5; i++) {
//     // console.log(niz[i]);
//     console.log(`${i}. element niza je ${niz[i]} `);
// }

// console.log(`*****************************************\n`);

// for (let i = 0; i < niz.length; i++) {
//     // console.log(niz[i]);
//     console.log(`${i}. element niza je ${niz[i]} `);
// }

// for (i = 1; i <= 10; i++) {
//     console.log(`Trostruka vrednost ${[i]} je ${[i] * 3}`);
// }

//* for in

const imena = ['Pera', 'Mika', 'Maja', 'Nina', 'Laza'];

// for (const idx in imena) {
//     console.log(idx);
// }

// for (const idx in imena) {
//     console.log(`${idx} - ${imena[idx]}`);
// }

//* for of

// for (const ime of imena) {
//     console.log(ime);
// }

// for (const [idx, ime] of imena.entries()) {
//     console.log(`${idx} - ${ime}`);
// }

//* forEach

// imena.forEach((element, idx) => {
//     console.log(`${idx} - ${element}`);
// })

//* if u for petlji

const brojevi = [2, 8, 0, 5, 7, 15, 9]

// for (i = 0; i < brojevi.length; i++) {
//     if (brojevi[i] > 5) {
//         console.log(`${brojevi[i]}`);
//     }
// }

//* break i continue

//* continue
// for (i = 0; i < brojevi.length; i++) {
//     if (brojevi[i] === 5) {
//         continue;
//     }
//     console.log(`${brojevi[i]}`);
// }

//* break
// for (i = 0; i < brojevi.length; i++) {
//     if (brojevi[i] === 5) {
//         continue;
//     }
//     if (brojevi[i] > 10) {
//         break;
//     }
//     console.log(`${brojevi[i]}`);
// }

//* while do

// let i = 1;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }


//* do while

// let i = 1;

// do {
//     console.log(i);
//     i++;
// } while (i <= 10)

//? ugnjezdene petlje

//          |1 2 3|
//matrica = |4 5 6|
//          |7 8 9|


let matrica = [
    [1, 2, 3],  //index 0
    [4, 5, 6],  //index 1
    [7, 8, 9]   //index 2
];

// console.log(matrica[1][1]);

let str = '';

for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
        // console.log(matrica[i][j]);
        str = str + matrica[i][j];
    }
    str = str + '\n';
}
console.log(str);