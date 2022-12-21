let x =Math.floor(Math.random()*20);
let y=Math.floor(Math.random()*20);

let aufgabe = document.querySelector('h4')
aufgabe.innerText = `${x} * ${y}`
rezlutat = x*y


document.querySelector('#aufgabeBtn').addEventListener('click', e =>{
    e.preventDefault();
    let falsche = document.querySelector('p')
    let input = document.querySelector('#login_uberprufung').value;
    if(input == rezlutat){
        window.location.href = "seite/index.html";
    }else{
        window.location.href = "www.falscheAntwort.com"; 
    }
})
