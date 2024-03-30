// https://jsonplaceholder.typicode.com/users

const lista = document.querySelector('.lista');

const dohvatiPodatke = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    // console.log(response);
    let resJson = await response.json();
    // console.log(resJson);
    resJson.forEach(element => {
        // console.log(element.name);
        lista.innerHTML += `<li>${element.name}</li>`
    });
}

dohvatiPodatke();