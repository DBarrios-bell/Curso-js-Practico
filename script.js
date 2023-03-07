const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const p = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){
    // console.log({event});
    event.preventDefault();
    const suma = BigInt(input2.value) + BigInt(input1.value)
    p.innerText = "resultado: " + suma;
}