
let restant = document.querySelector('#Cronometro');

function calc() {
    let fechaAr = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' });
    let fechaArObj = new Date(fechaAr);

    var days = fechaArObj.getDate();
    var hours = fechaArObj.getHours();
    var mins = fechaArObj.getMinutes();
    var seg = fechaArObj.getSeconds();
    
    var daysR = 11 - days;
    var hoursR = 24 - hours;
    var minsR = 60 - mins;
    var segR = 60 - seg;

    restant.innerHTML = `<span>Días restantes:</span> ${daysR}<br><span>Horas restantes:</span>${hoursR}<br><span>Minutos restantes:</span> ${minsR}<br><span>Segundos restantes:</span> ${segR}`;

    if (daysR === 0 && hoursR === 0 && minsR === 0 && segR === 0) {
        restant.innerHTML = `La dinámica ha concluido`;
    }
}

calc();
setInterval(calc, 1000);
