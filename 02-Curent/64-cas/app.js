const prviBroj = document.querySelector('#prviBroj');
const drugiBroj = document.querySelector('#drugiBroj');
const rezultat = document.querySelector('#rezultat');
const operacija = document.querySelector('.operacija');
const btnIzracunaj = document.querySelector('.btn-izracunaj');

btnIzracunaj.addEventListener('click', () => {
    let brojA = Number(prviBroj.value);
    let brojB = Number(drugiBroj.value);

    let oper = operacija.value;

    const digitron = () => {
        switch (oper) {
            case '1':
                return brojA + brojB;
            //break                 //nema funckiju ako postoji return
            case '2':
                return brojA - brojB;
            case '3':
                return brojA * brojB;
            case '4':
                if (brojA !== 0 && brojB !== 0) {
                    return brojA / brojB;
                } else {
                    return ('deljenje nule i/ili nulom nema smisla')
                }
            default:
                return ('niste odabrali operaciju')
        }
    }

    rezultat.value = digitron(brojA, brojB)


})


