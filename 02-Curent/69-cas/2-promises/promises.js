//* Asinhrono programiranj - Promises - promisi - obecanja

const artikli = [
    {
        id: 1,
        naziv: 'Mleko',
        zalihe: 10
    },
    {
        id: 2,
        naziv: 'Hleb',
        zalihe: 25
    }
];

const lista = document.querySelector('.lista');

const ispisArtikala = () => {
    lista.innerHTML = '';
    // setTimeout(() => {
    artikli.forEach(artikal => {
        lista.innerHTML += `<li> ${artikal.id} | ${artikal.naziv} | ${artikal.zalihe}`
    })
    // }, 2000)

}

const dodajArtikal = (artikal) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            artikli.push(artikal)
            let error = false;
            if (!error) {
                resolve();
            } else {
                reject('Greska: dogodila se neka greska');
            }
        }, 1000);
    })
}

// ispisArtikala();


//? 1. koriscenje .than i .catch

// dodajArtikal({
//     id: 3,
//     naziv: 'xxxxx',
//     zalihe: 22
// })
//     .then(ispisArtikala)
//     .catch(error => console.log(error))
//     .finally(() => {
//         console.log('ovo se uvek izvrsava');
//     });

// ispisArtikala();

//? 2. koriscenje Async-await

const fun1 = async () => {
    // async function fun1() {
    await dodajArtikal({
        id: 3,
        naziv: 'xxxxx',
        zalihe: 22
    });
    ispisArtikala();
}

fun1()

//* promise.all

const p1 = Promise.resolve('Promis 1');
const p2 = 42;
const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Pozdrav svima!')
});

Promise.all([p1, p2, p3])
    .then((vrednost) => {
        console.log(vrednost)

    });

