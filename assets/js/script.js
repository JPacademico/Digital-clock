const horas = document.getElementById('horas');
const min = document.getElementById('minutos');
const sec = document.getElementById('segundos');

const relogio = setInterval(function time(){

    let datahj = new Date();
    let hora = datahj.getHours();
    let min = datahj.getMinutes();
    let sec = datahj.getSeconds();

    horas.textContent = hora;
    minutos.textContent = min;
    segundos.textContent = sec;

})