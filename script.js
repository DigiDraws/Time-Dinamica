let restant = document.querySelector('#Cronometro');
function calc() {

let fecha = new Date();
var days = fecha.getDate();
 var hours = fecha.getHours();
 var mins = fecha.getMinutes();
 var seg = fecha.getSeconds();
 //calcular el tiempo restante para concluir la dinamica de digidraws
 var daysR = 10-days;
 var hoursR = 24-hours;
 //var minsR =  (60*24)-((60*hours)+mins)
 var minsR = 60-mins;
 var segR = 60-seg;
restant.innerHTML = `<span>Días restantes:</span> ${daysR}<br><span>Horas restantes:</span>${hoursR}<br><span>Minutos restantes:</span> ${minsR}<br><span>Segundos restantes:</span> ${segR}`;
if (daysR === 0 && hoursR === 0 && minsR === 0 && segR === 0) {
    restant.innerHTML = `La dinamica a terminado`;
}
}

calc();
setInterval(calc, 1000);
