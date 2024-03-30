const slikaElement = document.querySelector('#slika');

fetch('slika.jpeg')
    .then(res => {
        return res.blob(); // blob - binzry large object
    })
    .then(resBlob => {
        console.log(resBlob);
        slikaElement.src = URL.createObjectURL(resBlob);
    })
    .catch(err => console.log(err));