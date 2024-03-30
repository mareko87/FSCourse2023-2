// https://jsonplaceholder.typicode.com/users

// JSON - JS object notification 

const lista = document.querySelector('.lista');

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        console.log(response);
        // let resJ = response.json()
        // return resJ
        return response.json();
    })
    .then(resJson => {
        console.log(resJson);
        resJson.forEach(element => {
            // console.log(element.name);
            lista.innerHTML += `<li>${element.name}</li>`
        });
    })
    .catch(err => console.log(err));