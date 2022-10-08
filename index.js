var miliSec = 0
var sec = 0
var min = 0
var hour = 0
var interval

function twoDigits(digit) {

    if (digit < 10) {
        return ('0' + digit)
    } else {
        return digit
    }
}

function start() {
    watch()
    interval = setInterval(watch, 10)
    document.querySelector("#iniciar").style.display = "none";
}

function pause() {
    clearInterval(interval)
}
function stop() {
    clearInterval(interval)
    miliSec = 0
    sec = 0
    min = 0
    hour = 0
    document.getElementById('timer').innerText = hour + '0' + ':' + min + '0' + ':' + sec + '0' + ':' + miliSec + '0'
    document.querySelector("#iniciar").style.display = "inline-block";
}

function watch() {
    miliSec += 1
    if (miliSec == 100) {
        sec += 1
        miliSec = 0
        if (sec == 60) {
            min += 1
            sec = 0
            if (min == 60) {
                hour += 1
                min = 0
            }
        }
    }

    document.getElementById('timer').innerText = twoDigits(hour) + ":" + twoDigits(min) + ":" + twoDigits(sec) + ":" + twoDigits(miliSec)

}