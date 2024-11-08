const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time(){
    let poxa = new Date();
    let hr = poxa.getHours();
    let min = poxa.getMinutes();
    let s = poxa.getSeconds();

    if(hr < 10) hr = '0' + hr;
    if(min<10) min = '0' + min;
    if(s<10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})