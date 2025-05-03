let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

startBtn.addEventListener('click', () => {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', () => {
    timer = false;
});

resetBtn.addEventListener('click', () => {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById('hr').innerHTML = '00';
    document.getElementById('min').innerHTML = '00';
    document.getElementById('sec').innerHTML = '00';
    document.getElementById('count').innerHTML = '00';
});

function stopWatch() {
    if (timer) {
        count++;

        if(count == 100){
            sec++;
            count = 0;
        }

        if(sec == 60){
            min++;
            sec = 0;
        }

        if(min == 60){
            hr++;
            min = 0;
        }

        let hrString = hr;
        let minString = min;
        let secString = sec;
        let countString = count;

        if (hr < 10) {
            hrString = '0' + hrString;
        }

        if (min < 10) {
            minString = '0' + minString;
        }

        if (sec < 10) {
            secString = '0' + secString;
        }

        if (count < 10) {
            countString = '0' + countString;
        }

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;
        setTimeout(stopWatch, 10);
    }
}