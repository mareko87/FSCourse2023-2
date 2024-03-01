const brojAElement = document.querySelector('#broja');
const brojBElement = document.querySelector('.brojb');
const dugmeElement = document.querySelector('.dugme');
const rezultatElement = document.querySelector('#rezultat');

dugmeElement.addEventListener('click', () => {
    // console.log('Klik na dugme');

    let A = Number(brojAElement.value);
    let B = Number(brojBElement.value);

    let C = A + B;

    rezultatElement.innerHTML = 'Rezultat je: ' + C;
})