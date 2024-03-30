// https://dog.ceo/api/breed/hound/images/random/3
// API - Application Programming Interface

const btnDohvatiElement = document.querySelector('.dohvati');
const btnObrisiElement = document.querySelector('.obrisi');
const slikeELement = document.querySelector('.slike');

btnDohvatiElement.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breed/hound/images/random/3')
        // .then((res)=> {
        //     return res.json();
        // })

        .then(res => res.json())
        .then(resJson => {
            console.log(resJson.message);
            // resJson.message.forEach(pas => {
            //     slikeELement.innerHTML += `<img src=${pas}>`
            // });

            let psi = resJson.message;
            slikeELement.innerHTML += `

            <div class="row">
                <div class="col mt-2">
                    <img src=${psi[0]} height=200px>
                </div>
                <div class="col">
                    <img src=${psi[1]} height=200px>
                </div>
                <div class="col">
                    <img src=${psi[2]} height=200px>
                </div>
            </div>
            `
        })
})

btnObrisiElement.addEventListener('click', () => {
    slikeELement.innerHTML = '';
})
