// CRUD - create        read        update      delete - table      or      data
//        kreiraj       procita     izmeni      obrisi - tabelu     ili     prikaz podataka

const inputImeElement = document.querySelector('.input-ime');
const inputPrezimeElement = document.querySelector('.input-prezime');
const inputGodineElement = document.querySelector('.input-godine');

const btnDodajElement = document.querySelector('.btn-dodaj');
const btnIzmeniElement = document.querySelector('.btn-izmeni');
const btnZameniElement = document.querySelector('.btn-zameni');
const btnOdustaniElement = document.querySelector('.btn-odustani');
const btnObrisiElement = document.querySelector('.btn-obrisi');

const tabelaPrikaz = document.querySelector('.tabela-prikaz')

let tmpIdx = null;

const osobe = [
    {
        ime: 'Petar',
        prezime: 'Petrovic',
        godine: 44
    },
    {
        ime: 'Ivana',
        prezime: 'Ivanovic',
        godine: 35
    },
    {
        ime: 'Marko',
        prezime: 'Markovic',
        godine: 40
    },
    {
        ime: 'Ana',
        prezime: 'Anic',
        godine: 30
    }
];

// window.onload = () => {}
window.addEventListener('load', () => {
    procitaj();
});

btnDodajElement.addEventListener('click', () => {
    if (inputImeElement.value !== '' && inputPrezimeElement.value !== '' && inputGodineElement.value > 0) {
        osobe.push({
            ime: inputImeElement.value,
            prezime: inputPrezimeElement.value,
            godine: inputGodineElement.value
        });
        inputImeElement.value = '';
        inputPrezimeElement.value = '';
        inputGodineElement.value = '';
    } else {
        alert('Nisu uneti svi podaci!!!')
    }

    inputImeElement.focus();
    procitaj();

});


btnZameniElement.addEventListener('click', () => {
    osobe[tmpIdx].ime = inputImeElement.value;
    osobe[tmpIdx].prezime = inputPrezimeElement.value;
    osobe[tmpIdx].godine = inputGodineElement.value;

    izmeniOdustani();
    procitaj();
})


btnOdustaniElement.addEventListener('click', () => {
    izmeniOdustani();
})

const procitaj = () => {
    tabelaPrikaz.innerHTML = '';

    osobe.forEach((osoba, idx) => {
        tabelaPrikaz.innerHTML += `
        <tr>
            <th scope="row">${idx + 1}</th>
            <td>${osoba.ime}</td>
            <td>${osoba.prezime}</td>
            <td>${osoba.godine}</td>
            <td><button class="btn btn-warning btn-izmeni" onClick=izmeni(${idx})>izmeni</button></td>
            <td><button class="btn btn-danger btn-obrisi" onClick="obrisi(${idx})">obrisi</button></td>
        </tr>
        `
    })
}

const izmeni = (idx) => {
    inputImeElement.value = osobe[idx].ime;
    inputPrezimeElement.value = osobe[idx].prezime;
    inputGodineElement.value = osobe[idx].godine;

    btnDodajElement.hidden = true;
    btnZameniElement.hidden = false;
    btnOdustaniElement.hidden = false;

    tmpIdx = idx;
}

const obrisi = (idx) => {
    osobe.splice(idx, 1);
    procitaj();
}

const izmeniOdustani = () => {
    inputImeElement.value = '';
    inputPrezimeElement.value = '';
    inputGodineElement.value = '';

    inputImeElement.focus();

    btnDodajElement.hidden = false;
    btnZameniElement.hidden = true;
    btnOdustaniElement.hidden = true;
}

