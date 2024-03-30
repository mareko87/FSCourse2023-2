//* Asinhrono programiranj - Callbacks - kolbekovi

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

// const dodajArtikal = (artikal) => {
//     setTimeout(() => {
//         artikli.push(artikal)
//         console.log('Artikal uspesno dodat');
//     }, 3000);
// }

// dodajArtikal({
//     id: 3,
//     naziv: 'xxxxx',
//     zalihe: 22
// })

// ispisArtikala();

//? callbacks

const dodajArtikal = (artikal, callback) => {
    setTimeout(() => {
        artikli.push(artikal)
        console.log('Artikal uspesno dodat');
        callback();
    }, 3000);
}


dodajArtikal({ id: 3, naziv: 'xxxxx', zalihe: 22 }, ispisArtikala)
