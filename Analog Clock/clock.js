let hourEle = document.getElementById('hours');
let minEle = document.getElementById('mins');
let secEle = document.getElementById('seconds');

document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        let now = new Date();
        let currentHour = now.getHours();
        let currentMin = now.getMinutes();
        let currentSec = now.getSeconds();

        let hourRotation = (currentHour % 12) * 30 + (currentMin / 60) * 30;
        let minuteRotation = currentMin * 6;
        let secondRotation = currentSec * 6;

        hourEle.style.transform = `rotate(${hourRotation}deg)`;
        minEle.style.transform = `rotate(${minuteRotation}deg)`;
        secEle.style.transform = `rotate(${secondRotation}deg)`;
    }, 1000);
});