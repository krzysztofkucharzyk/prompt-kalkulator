let button = document.querySelector('button');
let x = document.getElementById('x');
let y = document.getElementById('y');
let div = document.querySelector('div');

let d = document.getElementById('d');
let u = document.getElementById('u'); 
let m = document.getElementById('m'); 

button.addEventListener('click', wyswietl);

function wyswietl() {
    let num1 = prompt('Podaj liczbę x');
    let num2 = prompt('Podaj liczbę y');

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    x.innerText = 'Liczba 1: ' + num1;
    y.innerText = 'Liczba 2: ' + num2;

    d.onclick = function() {
        div.innerText = num1 + num2;
    };

    u.onclick = function() {
        div.innerText = num1 - num2;
    }

    m.onclick = function() {
        div.innerText = num1 * num2;
    }

}