let hours = document.getElementById('hours');
let mins = document.getElementById('mins');
let sec = document.getElementById('sec');
let ampm = document.getElementById('ampm');

setInterval(() => {
    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = hr >= 12 ? 'PM' : 'AM';

    if (hr > 12) hr -= 12;
    if (hr == 0) hr = 12;

    hours.innerHTML = hr < 10 ? '0' + hr : hr;
    mins.innerHTML = min < 10 ? '0' + min : min;
    sec.innerHTML = s < 10 ? '0' + s : s;
    ampm.innerHTML = am;
}, 1000);