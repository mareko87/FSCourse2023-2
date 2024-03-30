//? Asinhorno programiranje - asinhrona priroda JS
//* AJAX - Async Js And XML - 

// console.log('prvi');
// console.log('drugi');
// console.log('treci');

// setTimeout(() => {
//     console.log('Proba 123');
// }, 3000);

// setTimeout(() => { console.log('Proba 123') }, 3000);


console.log('prvi');
setTimeout(() => {
    console.log('drugi');
}, 3000);
console.log('treci');

//* problematika

//* dohvati podatke     //potrebno vreme - 1s   => prvo ovo izvrsi, pa tek onda sledece
//* ispisi podatke      //potrebno vreme - 0.1s