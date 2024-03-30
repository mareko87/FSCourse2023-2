const namirnicaElement = document.querySelector('.namirnica');
const btnDodavanjeElement = document.querySelector('.dodavanje');
const listaNamirnicaElement = document.querySelector('.lista-namirnica-body');

const lista = ['hleb', 'mleko', 'jogurt'];
// const lista = [];
//      idx       0        1        2

window.onload = () => {
    ispis();
}

const ispis = () => {
    listaNamirnicaElement.innerHTML = '';
    lista.forEach((element, idx) => {
        listaNamirnicaElement.innerHTML += `
        <tr>
            <td>${element}</td>
            <td><button class="btn btn-danger brisanje-${idx}" onclick=brisanjeSloga(event)>X</button></td>
        </tr>
        `
    })
}

const brisanjeSloga = (event) => {
    // console.log(event.target.className);
    let klasa = event.target.className;
    let idx = klasa.split(' ').slice(-1)[0].split('-')[1];
    // console.log(idx);
    lista.splice(idx, 1);
    // console.log(lista);

    ispis();

}

btnDodavanjeElement.addEventListener('click', () => {
    // console.log(namirnicaElement.value);
    if (namirnicaElement.value !== '') {    // ! = = =
        lista.push(namirnicaElement.value)
    }
    // console.log(lista);
    ispis();

    namirnicaElement.value = '';
    namirnicaElement.focus();

})


//* dodatak

//? split
// let str = 'ovo je neki string'
// console.log(str.split(' '));

//? splice  - menja pocetni niz - odsecanje
// const niz = [1, 2, 3, 4, 5, 6];
// console.log(niz);
// let temp = niz.splice(3, 2);    //splice(index, brojElemenata)
// console.log(temp);
// console.log(niz);

// console.log(`*****************************************`);
//? slice - ne menja pocetni niz - kopiranje
// const niz2 = [1, 2, 3, 4, 5, 6];
// console.log(niz2);
// let temp2 = niz2.slice(3, 5);    //splice( od index ukljucen, do index nije ukljucen)
// console.log(temp2);
// console.log(niz2);

//* primena

// btn btn-danger brisanje-0   -  0

// //? nacin 1

// let klasa = 'btn btn-danger brisanje-0';
// let klasaLista = klasa.split(' ')
// console.log(klasaLista);
// let temp3 = klasaLista.slice(-1);
// console.log(temp3);
// let indx = temp3[0].split('-')[1];
// console.log(indx);

// let idx2 = klasa.split(' ').slice(-1)[0].split('-')[1];
// console.log(idx2);


// //? nacin 2
// let klasa2 = 'btn btn-danger brisanje-0';
// let klasaLista2 = klasa.split('-');
// // console.log(klasaLista);
// let indx3 = klasaLista2[klasaLista2.length - 1];
// console.log(indx3);