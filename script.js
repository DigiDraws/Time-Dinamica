
let restant = document.querySelector('#Cronometro');

function calc() {
    let fechaAr = new Date(new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' }));

    var days = fechaAr.getDate();
    var hours = fechaAr.getHours();
    var mins = fechaAr.getMinutes();
    var seg = fechaAr.getSeconds();
    console.log(hours);
    
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
